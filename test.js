let request = require('request');
let fs = require('fs');

request('http://localhost:3000/WIPM', { json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    let api_arr = res.body;
    fs.writeFileSync('./input/WIPM.js', '');
    let str = '/**\n * @fileoverview Module\n */';
    str += '\n/**\n * @module WIPM\n */';
    for (let i = 0; i < api_arr.length; i++) {
        str += '\n/**'
        let param = JSON.parse(api_arr[i].payloadParams);

        str += getParam(param, null);
        str += '\n * @implements Method: ' + api_arr[i].method;
        str += '\n * @implements Route: ' + api_arr[i].route;
        str += '\n * @implements Note: ' + api_arr[i].note;

        str += '\n * @example Example Payload: \n' + objToStr(JSON.parse(api_arr[i].samplePayload));
        str += '\n * @example Example Response: \n' + objToStr(JSON.parse(api_arr[i].response));
        // str += '\n * @example Example Error Response: \n' + objToStr(JSON.parse(api_arr[i].errResponse));
        str += '\n */\n';

        let arr = api_arr[i].name.split(" ");
        let tmp = '';
        for (let i in arr) {
            if (arr[i] == '-') arr[i] = '';
            else tmp += arr[i] + '_';
        }
        tmp = tmp.substring(0, tmp.length - 1); 
        str += 'function ' + tmp + '(';
        for (let key in param) {
            let val = param[key];
            str += `${key}` + ', ';
        }
        if (api_arr[i].payloadParams != '{}') {
            str = str.substring(0, str.length - 2);
        }
        str += ') {}';
    }
    fs.writeFileSync('./input/WIPM.js', str);
});

function objToStr(obj) {
    let count = 0;
    let c = 0;
    function toString(obj) {
        count++;
        let dest = "{\n";
        for (let key in obj) {
            c++;
        }
        for (let key in obj) {
            c--;
            for (let i = 0; i < count; i++) {
                dest += "\t";
            }
            const val = obj[key];
            dest += `"${key}" : `
            if (typeof val !== 'object') {
                if (typeof val !== 'number') {
                    dest += `"${val}"`;
                } else {
                    dest += `${val}`;
                }
            } else {
                dest += `${toString(val)}`;
                
            }
            if (c != 0) {
                dest += ", \n";
            } else {
                dest += "\n"
            }
        }
        count --;
        let tmp = "";
        for (let i = 0; i < count; i++) {
            tmp+= "\t";
        }
        dest +=  tmp + "}";
        return dest;
    }

    function cleaning(str) {

        return str.replace(/\,(\s)+\}/g, '\n }');
    }
    return cleaning(toString(obj));
}

function getParam(obj, parent) {
    function param(obj, parent) {
        let dest = '';
        
        for (let key in obj) {
            const val = obj[key];
            if (typeof val !== 'object') {
                if (parent != null) {
                    dest += '\n * @param {' + `${val}` + '} ' + parent + '.' + `${key}`;
                } else 
                dest += '\n * @param {' + `${val}` + '} ' + `${key}`;
            } else {
                dest += '\n * @param {object}' + `${key}`;
                dest += `${param(val, key)}`;                
            }
        }

        return dest;
    }

    return param(obj);
}

{/* <article class="readme"><?js= data.readme ?></article> */}