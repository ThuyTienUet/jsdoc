/**
 * @fileoverview Module
 */
/**
 * @module API_well_insight
 */
/**
 * @implements Method: POST
 * @implements Route: /custom-fill/all
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function GET_CustomFills() {}
/**
 * @implements Method: POST
 * @implements Route: /custom-fill/clear
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Clear_Init_Advance() {}
/**
 * @param {String} name
 * @param {object}content
 * @param {object}0
 * @param {40} 0.lowVal
 * @param {50} 0.hightVal
 * @param {chert} 0.pattern
 * @param {black} 0.foreground
 * @param {blue} 0.background
 * @param {} 0.description
 * @param {object}1
 * @param {50} 1.lowVal
 * @param {70} 1.hightVal
 * @param {chert} 1.pattern
 * @param {yellow} 1.foreground
 * @param {blue} 1.background
 * @param {} 1.description
 * @implements Method: POST
 * @implements Route: /custom-fill/save
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Added new custom-fill", 
	"content" : {
		"name" : "abc", 
		"content" : {
			"0" : {
				"lowVal" : 99999, 
				"hightVal" : 50, 
				"pattern" : "chert", 
				"foreground" : "black", 
				"background" : "blue", 
				"description" : ""
 }, 
			"1" : {
				"lowVal" : 50, 
				"hightVal" : 70, 
				"pattern" : "chert", 
				"foreground" : "yellow", 
				"background" : "blue", 
				"description" : ""
			}
		}
	}
}
 */
function Save_CustomFills(name, content) {}
/**
 * @implements Method: POST
 * @implements Route: /dustbin
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function get_all_from_dusbin() {}
/**
 * @param {int} idObject
 * @param {String} type
 * @implements Method: POST
 * @implements Route: /dustbin/delete
 * @implements Note: type = well,dataset,curve,plotplot,crossplot,histogram
 * @example Example Payload: 
{
	"idObject" : 1, 
	"type" : "well"
}
 * @example Example Response: 
{
}
 */
function delete_permanently_an_object(idObject, type) {}
/**
 * @param {int} idObject
 * @param {String} type
 * @implements Method: POST
 * @implements Route: /dustbin/restore
 * @implements Note: 
 * @example Example Payload: 
{
	"idObject" : 1, 
	"type" : "well"
}
 * @example Example Response: 
{
}
 */
function restore_an_object(idObject, type) {}
/**
 * @param {} idFamily
 * @implements Method: DELETE
 * @implements Route: /family/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_family(idFamily) {}
/**
 * @implements Method: POST
 * @implements Route: /family/edit
 * @implements Note: các field cần thay đổi kèm idFamily
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_family() {}
/**
 * @param {} idFamily
 * @implements Method: POST
 * @implements Route: /family/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Get_family_info(idFamily) {}
/**
 * @implements Method: GET
 * @implements Route: /family/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Get_family_list() {}
/**
 * @implements Method: POST
 * @implements Route: /family/new
 * @implements Note: params: tất cả các trường không được null
 * @example Example Payload: 
{
	"name" : "Rate of opreration", 
	"familyGroup" : "ROP", 
	"unit" : "mn/m", 
	"minScale" : 0, 
	"maxScale" : 60, 
	"displayType" : "Linear", 
	"displayMode" : "Line", 
	"blockPosition" : "NONE", 
	"lineStyle" : "[7,2,2,2]", 
	"lineWidth" : 1, 
	"lineColor" : "black"
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new Family success", 
	"content" : {
		"idFamily" : 318, 
		"name" : "Rate of opreration", 
		"familyGroup" : "ROP", 
		"unit" : "mn/m", 
		"minScale" : 0, 
		"maxScale" : 60, 
		"displayType" : "Linear", 
		"displayMode" : "Line", 
		"blockPosition" : "NONE", 
		"lineStyle" : "[7,2,2,2]", 
		"lineWidth" : 1, 
		"lineColor" : "black", 
		"updatedAt" : "2017-09-25T09:07:10.115Z", 
		"createdAt" : "2017-09-25T09:07:10.115Z"
	}
}
 */
function Tạo_family_mới() {}
/**
 * @param {int} idFamily
 * @param {int} idFamilySpec
 * @implements Method: POST
 * @implements Route: /family/update-spec
 * @implements Note: Đổi spec của 1 family sang spec mới
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Update_a_family_with_new_spec(idFamily, idFamilySpec) {}
/**
 * @implements Method: POST
 * @implements Route: /image-list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"0" : "hoang9bd368a40756ea5e690a4fae9a198b66linux.jpg", 
		"1" : "hoangc54c2f6cb6ddf5a1d269718ec4b6fb51linux.jpg", 
		"2" : "hoangdcd571845f97d46f31ab41c5e811bcb2linux.jpg", 
		"3" : "hoange7e0e97cb2d57ce1322298fdcf706789linux.jpg", 
		"4" : "hoangf8cef15a24cd9b45c5550b4e206e3c21linux.jpg"
	}
}
 */
function Get_all_images_of_a_user() {}
/**
 * @param {jpg} image
 * @implements Method: POST
 * @implements Route: /image-upload
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Upload success", 
	"content" : "/c61f3965/0e48e95d/efd21a5e/e2349db0/linux.jpg"
}
 */
function upload_image_to_get_url(image) {}
/**
 * @param {object}curveList
 * @param {Curve_Objects} curveList.0
 * @implements Method: POST
 * @implements Route: /inventory/import/curve
 * @implements Note: idInvCurve: idCurve của inventory, list curve được create/update
 * @example Example Payload: 
{
	"curveList" : {
		"0" : {
			"idInvCurve" : 1, 
			"name" : "DTCO3", 
			"unit" : "US/F", 
			"idDesDataset" : 1
 }, 
		"1" : {
			"idInvCurve" : 2, 
			"name" : "ECGR", 
			"unit" : "US/F", 
			"idDesDataset" : 1
		}
	}
}
 * @example Example Response: 
{
}
 */
function import_form_inventory(curveList) {}
/**
 * @param {object}datasetList
 * @param {Dataset_Objects} datasetList.0
 * @implements Method: POST
 * @implements Route: /inventory/import/dataset
 * @implements Note: 
 * @example Example Payload: 
{
	"datasetList" : {
		"0" : {
			"name" : "hoang", 
			"idDesWell" : 1, 
			"curves" : {
				"0" : {
					"idInvCurve" : 1, 
					"name" : "DTCO3", 
					"unit" : "US/F"
 }, 
				"1" : {
					"idInvCurve" : 2, 
					"name" : "ECGR", 
					"unit" : "US/F"
				}
			}
		}
	}
}
 * @example Example Response: 
{
}
 */
function import_form_inventory_1(datasetList) {}
/**
 * @implements Method: POST
 * @implements Route: /login
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Login() {}
/**
 * @param {} idMarkerTemplate
 * @implements Method: DELETE
 * @implements Route: /marker-template/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_marker_template(idMarkerTemplate) {}
/**
 * @implements Method: POST
 * @implements Route: /marker-template/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_a_marker_template() {}
/**
 * @implements Method: POST
 * @implements Route: /marker-template/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_all_marker_template() {}
/**
 * @param {} template
 * @param {} name
 * @param {} color
 * @param {} lineStyle
 * @param {} description
 * @implements Method: POST
 * @implements Route: /marker-template/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_new_marker_template(template, name, color, lineStyle, description) {}
/**
 * @implements Method: POST
 * @implements Route: /pal/all
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function GET_PAL_INFO() {}
/**
 * @implements Method: POST
 * @implements Route: /pattern/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function pattern_list() {}
/**
 * @param {Integer} idCrossplot
 * @param {Object} lineStyle
 * @param {Boolean} displayLine
 * @param {Boolean} displayEquation
 * @param {String} regType
 * @param {Boolean} inverseReg
 * @param {Boolean} exclude
 * @param {Double} fitX
 * @param {Double} fitY
 * @param {array} polygons
 * @implements Method: POST
 * @implements Route: /poroject/cross-plot/regression-line/new
 * @implements Note: regRype : ENUM('Linear', 'Exponent', 'Powerwer').
polygons : Array of IdPolygons
 * @example Example Payload: 
{
	"idCrossPlot" : 1, 
	"lineStyle" : {
		"color" : "Blue", 
		"width" : 1, 
		"style" : {
		}
 }, 
	"displayLine" : "true", 
	"displayEquation" : "true", 
	"regType" : "Linear", 
	"inverseReg" : "false", 
	"exclude" : "false", 
	"fitX" : 12.32, 
	"fitY" : 232.232, 
	"polygons" : {
		"0" : 1, 
		"1" : 3
	}
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Save polygon_regressionLine success", 
	"content" : {
		"0" : {
			"0" : {
				"createdAt" : "2017-09-24T07:45:00.869Z", 
				"updatedAt" : "2017-09-24T07:45:00.869Z", 
				"idPolygon" : 1, 
				"idRegressionLine" : 7
 }, 
			"1" : {
				"createdAt" : "2017-09-24T07:45:00.869Z", 
				"updatedAt" : "2017-09-24T07:45:00.869Z", 
				"idPolygon" : 3, 
				"idRegressionLine" : 7
			}
		}
	}
}
 */
function Create_new_regression_line(idCrossplot, lineStyle, displayLine, displayEquation, regType, inverseReg, exclude, fitX, fitY, polygons) {}
/**
 * @implements Method: POST
 * @implements Route: /project/cross-plot/axis-color/all
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"0" : {
			"name" : "test", 
			"content" : {
				"name" : "hoang", 
				"data" : "abc"
 }
 }, 
		"1" : {
			"name" : "hoang", 
			"content" : {
				"name" : "hoang", 
				"data" : "abc"
			}
		}
	}
}
 */
function List_axis_colors() {}
/**
 * @implements Method: POST
 * @implements Route: /project/cross-plot/axis-color/clear
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Clear_axis_colors() {}
/**
 * @param {test-1} name
 * @param {object}content
 * @param {hoang} content.name
 * @implements Method: POST
 * @implements Route: /project/cross-plot/axis-color/save
 * @implements Note: Nhớ parse content ra string trước khi up lên. name : tạo mới khi name chưa tồn tại, update nếu name đã tồn tại
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Add_or_Update_axis_colors(name, content) {}
/**
 * @param {Integer} idCrossPlot
 * @implements Method: DELETE
 * @implements Route: /project/cross-plot/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_CrossPlot(idCrossPlot) {}
/**
 * @param {String} name
 * @param {Integer} idWell
 * @implements Method: POST
 * @implements Route: /project/cross-plot/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_CrossPlot(name, idWell) {}
/**
 * @param {Integer} idCrossPlot
 * @implements Method: POST
 * @implements Route: /project/cross-plot/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_CrossPlot(idCrossPlot) {}
/**
 * @param {Integer} idProject
 * @param {String} name
 * @implements Method: POST
 * @implements Route: /project/cross-plot/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Tạo_CrossPlot(idProject, name) {}
/**
 * @implements Method: POST
 * @implements Route: /project/cross-plot/overlay-line/all
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Get_all_overlay_line() {}
/**
 * @param {37} idOverlayLine
 * @implements Method: POST
 * @implements Route: /project/cross-plot/overlay-line/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Get_info_overlay_line(idOverlayLine) {}
/**
 * @param {1} idCurveX
 * @param {2} idCurveY
 * @implements Method: POST
 * @implements Route: /project/cross-plot/overlay-line/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Get_overlay_line_by_2_curve(idCurveX, idCurveY) {}
/**
 * @param {} idPointSet
 * @implements Method: DELETE
 * @implements Route: /project/cross-plot/point-set/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_PointSet(idPointSet) {}
/**
 * @implements Method: POST
 * @implements Route: /project/cross-plot/point-set/edit
 * @implements Note: similar above. Send fields should be changed
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_PointSet() {}
/**
 * @param {} idPointSet
 * @implements Method: POST
 * @implements Route: /project/cross-plot/point-set/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_PointSet(idPointSet) {}
/**
 * @param {Integer} idCrossPlot
 * @param {Integer(*)} idCurveX
 * @param {Integer(*)} idCurveY
 * @param {Integer(*)} idCurveZ
 * @param {Integer} idWell
 * @param {float} left
 * @param {float} right
 * @param {float } bottom
 * @param {float} top
 * @param {boolean(false)} logX
 * @param {boolean( false)} logY
 * @param {Integer(*)} majorX
 * @param {Integer(*)} majorY
 * @param {Integer(*)} minorX
 * @param {Integer(*)} minorY
 * @param {Integer(*)} min
 * @param {Integer(*) } max
 * @param {Integer(*)} numColor
 * @param {String} pointSymbol
 * @param {Integer(5)} pointSize
 * @param {String(blue)} color
 * @param {String('AnaDrill CDN 6.5in Den/Neu Rhof 1.0')} overlayLine
 * @param {boolean(false)} standalone
 * @param {boolean( true)} showLine
 * @param {boolean(true)} lineMode
 * @param {String} zAxes
 * @implements Method: POST
 * @implements Route: /project/cross-plot/point-set/new
 * @implements Note: left => scaleLeft.   right  => scaleRight.  bottom  => scaleBottom.  top => scaleTop.   min => scaleMin.  max => scaleMax.  color => pointColor.  zAxes: ENUM('Curve','Zone')
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Tạo_PointSet(idCrossPlot, idCurveX, idCurveY, idCurveZ, idWell, left, right, bottom, top, logX, logY, majorX, majorY, minorX, minorY, min, max, numColor, pointSymbol, pointSize, color, overlayLine, standalone, showLine, lineMode, zAxes) {}
/**
 * @param {} idPolygon
 * @implements Method: DELETE
 * @implements Route: /project/cross-plot/polygon/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_Polygon(idPolygon) {}
/**
 * @param {} idPolygon
 * @implements Method: POST
 * @implements Route: /project/cross-plot/polygon/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_Polygon(idPolygon) {}
/**
 * @param {} idPolygon
 * @implements Method: POST
 * @implements Route: /project/cross-plot/polygon/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_Polygon(idPolygon) {}
/**
 * @param {String} idCrossPlotlineStyle
 * @param {boolean(false)} display
 * @param {array} points
 * @implements Method: POST
 * @implements Route: /project/cross-plot/polygon/new
 * @implements Note: points: array of JSON
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Tạo_Polygon(idCrossPlotlineStyle, display, points) {}
/**
 * @implements Method: POST
 * @implements Route: /project/cross-plot/regression-line/edit
 * @implements Note: params: create payload + idRegressionLine
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Edit_an_regression_line() {}
/**
 * @param {Number} idProject
 * @implements Method: DELETE
 * @implements Route: /project/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idProject" : 1
}
 * @example Example Response: 
{
}
 */
function Xóa_Project(idProject) {}
/**
 * @param {Number} idProject
 * @param {String(*)} name
 * @param {String(*)} company
 * @param {String(*)} department
 * @param {String(*)} description
 * @implements Method: POST
 * @implements Route: /project/edit
 * @implements Note: (*) can be null.
 * @example Example Payload: 
{
	"idProject" : 1, 
	"name" : "Test-Project-change", 
	"company" : "UET", 
	"department" : "ABC Department", 
	"description" : "This is a description"
}
 * @example Example Response: 
{
}
 */
function Sửa_Project(idProject, name, company, department, description) {}
/**
 * @param {} idFlow
 * @implements Method: DELETE
 * @implements Route: /project/flow/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_flow(idFlow) {}
/**
 * @param {} idProject
 * @param {} name
 * @param {} content
 * @param {} description
 * @implements Method: POST
 * @implements Route: /project/flow/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_flow(idProject, name, content, description) {}
/**
 * @param {} idFlow
 * @implements Method: POST
 * @implements Route: /project/flow/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_flow(idFlow) {}
/**
 * @param {} IdProject
 * @implements Method: POST
 * @implements Route: /project/flow/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_flow(IdProject) {}
/**
 * @param {} idProject
 * @param {} name
 * @param {} content
 * @param {} description
 * @implements Method: POST
 * @implements Route: /project/flow/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_new_flow(idProject, name, content, description) {}
/**
 * @param {} idTask
 * @implements Method: DELETE
 * @implements Route: /project/flow/task/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_task(idTask) {}
/**
 * @param {} idFlow
 * @param {} name
 * @param {} content
 * @param {} description
 * @param {(*)} idTaskSpec
 * @implements Method: POST
 * @implements Route: /project/flow/task/edit
 * @implements Note: (*) không bắt buộc truyền vào.
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_task(idFlow, name, content, description, idTaskSpec) {}
/**
 * @param {} idTask
 * @implements Method: POST
 * @implements Route: /project/flow/task/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_task(idTask) {}
/**
 * @param {} idFlow
 * @implements Method: POST
 * @implements Route: /project/flow/task/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_task(idFlow) {}
/**
 * @param {} idFlow
 * @param {} name
 * @param {} content
 * @param {} description
 * @param {(*)} idTaskSpec
 * @implements Method: POST
 * @implements Route: /project/flow/task/new
 * @implements Note: (*) can be null 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_task(idFlow, name, content, description, idTaskSpec) {}
/**
 * @param {Number} idProject
 * @implements Method: POST
 * @implements Route: /project/fullinfo
 * @implements Note: 
 * @example Example Payload: 
{
	"idProject" : 1
}
 * @example Example Response: 
{
}
 */
function Full_Info_Project(idProject) {}
/**
 * @param {} idGroup
 * @implements Method: POST
 * @implements Route: /project/group/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_group(idGroup) {}
/**
 * @param {} idGroup
 * @implements Method: POST
 * @implements Route: /project/group/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_group(idGroup) {}
/**
 * @param {} idGroup
 * @implements Method: POST
 * @implements Route: /project/group/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Get group info success", 
	"content" : {
		"idGroup" : 2, 
		"idParent" : 0, 
		"name" : "myGroup", 
		"wells" : {
			"0" : {
				"idWell" : 29, 
				"name" : "W4"
			}
		}
	}
}
 */
function info_group(idGroup) {}
/**
 * @param {} idProject
 * @param {} name
 * @param {} idParent
 * @implements Method: POST
 * @implements Route: /project/group/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new group success", 
	"content" : {
		"idParent" : 0, 
		"type" : "Well", 
		"idGroup" : 2, 
		"idProject" : 2, 
		"name" : "myGroup", 
		"updatedAt" : "2017-11-22T07:43:39.917Z", 
		"createdAt" : "2017-11-22T07:43:39.917Z"
	}
}
 */
function create_group(idProject, name, idParent) {}
/**
 * @implements Method: POST
 * @implements Route: /project/histogram/all
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Get_All_Histogram() {}
/**
 * @param {} idHistogram
 * @implements Method: DELETE
 * @implements Route: /project/histogram/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_Histogram(idHistogram) {}
/**
 * @param {String(*)} histogramTitle
 * @param {Double} hardCopyWidth
 * @param {Double} hardCopyHeight
 * @param {Double} intervalDepthTop
 * @param {Double} intervalDepthBottom
 * @param {Integer} divisions
 * @param {Double} leftScale
 * @param {Double} rightScale
 * @param {Boolean} showGaussian
 * @param {Boolean} loga
 * @param {Boolean} showGrid
 * @param {Boolean} flipHorizontal
 * @param {String} lineStyle
 * @param {String} lineColor
 * @param {String} plotType
 * @param {String} color
 * @param {String} discriminators
 * @param {Integer} idWell
 * @param {Integer} idCurve
 * @param {Integer} idZoneSet
 * @param {String} activeZone
 * @implements Method: POST
 * @implements Route: /project/histogram/edit
 * @implements Note: (*) can be null.    plotType: ENUM('Frequency', 'Percent')
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_Histogram(histogramTitle, hardCopyWidth, hardCopyHeight, intervalDepthTop, intervalDepthBottom, divisions, leftScale, rightScale, showGaussian, loga, showGrid, flipHorizontal, lineStyle, lineColor, plotType, color, discriminators, idWell, idCurve, idZoneSet, activeZone) {}
/**
 * @param {} idHistogram
 * @implements Method: POST
 * @implements Route: /project/histogram/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"idHistogram" : 8, 
		"histogramTitle" : {
		}, 
		"hardCopyWidth" : {
		}, 
		"hardCopyHeight" : {
		}, 
		"intervalDepthTop" : {
		}, 
		"intervalDepthBottom" : {
		}, 
		"activeZone" : "All", 
		"divisions" : 50, 
		"leftScale" : 0, 
		"rightScale" : 0, 
		"showGaussian" : "false", 
		"loga" : "false", 
		"showGrid" : "false", 
		"flipHorizontal" : "false", 
		"lineStyle" : "Custom", 
		"lineColor" : "Blue", 
		"plotType" : "Frequency", 
		"color" : "Blue", 
		"discriminators" : {
		}, 
		"createdAt" : "2017-09-08T04:21:38.000Z", 
		"updatedAt" : "2017-09-08T04:21:38.000Z", 
		"idWell" : 1, 
		"idCurve" : {
		}, 
		"idZoneSet" : 1, 
		"zoneset" : {
			"idZoneSet" : 1, 
			"name" : "hoang", 
			"createdAt" : {
			}, 
			"updatedAt" : {
			}, 
			"idWell" : 1, 
			"zones" : {
				"0" : {
					"idZone" : 1, 
					"startDepth" : 1000, 
					"endDepth" : 9000, 
					"fill" : "", 
					"showName" : "true", 
					"name" : "", 
					"createdAt" : {
					}, 
					"updatedAt" : {
					}, 
					"idZoneSet" : 1
 }, 
				"1" : {
					"idZone" : 2, 
					"startDepth" : 1, 
					"endDepth" : 2, 
					"fill" : "", 
					"showName" : "true", 
					"name" : "", 
					"createdAt" : {
					}, 
					"updatedAt" : {
					}, 
					"idZoneSet" : 1
 }
 }
 }, 
		"well" : {
			"idWell" : 1, 
			"name" : "W4", 
			"topDepth" : "1119.8352", 
			"bottomDepth" : "2184.8064", 
			"step" : "0.1524", 
			"createdAt" : "2017-09-08T03:35:49.000Z", 
			"updatedAt" : "2017-09-08T03:35:49.000Z", 
			"idProject" : 1
		}
	}
}
 */
function Info_Histogram(idHistogram) {}
/**
 * @param {String} name
 * @param {String} histogramTitle
 * @param {Double} hardCopyWidth
 * @param {Double} hardCopyHeight
 * @param {Double(*)} intervalDepthTop
 * @param {Double(*)} intervalDepthBottom
 * @param {Integer} divisions
 * @param {Double} leftScale
 * @param {Double} rightScale
 * @param {Boolean} showGaussian
 * @param {Boolean} loga
 * @param {Boolean} showGrid
 * @param {Boolean} flipHorizontal
 * @param {String} lineStyle
 * @param {String} lineColor
 * @param {String} plot
 * @param {String} plotType
 * @param {String} color
 * @param {String} discriminators
 * @param {Integer} idWell
 * @param {Integer} idProject
 * @param {Integer(*)} idZoneSet
 * @param {Integer} idZone
 * @param {String} activeZone
 * @implements Method: POST
 * @implements Route: /project/histogram/new
 * @implements Note: (*) can be null.   Chỉ được có idZone hoặc IntervalDepths.    plot: ENUM('Bar','Curve'). 
   plotType: ENUM('Frequency', 'Percent')
 * @example Example Payload: 
{
	"idWell" : 1, 
	"intervalDepthTop" : 118.9, 
	"intervalDepthBottom" : 1189.5, 
	"idZoneSet" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new histogram success", 
	"content" : {
		"idHistogram" : 14, 
		"histogramTitle" : {
		}, 
		"hardCopyWidth" : {
		}, 
		"hardCopyHeight" : {
		}, 
		"intervalDepthTop" : 118.9, 
		"intervalDepthBottom" : 1189.5, 
		"divisions" : 50, 
		"leftScale" : 0, 
		"rightScale" : 0, 
		"showGaussian" : "false", 
		"loga" : "false", 
		"showGrid" : "false", 
		"flipHorizontal" : "false", 
		"lineStyle" : "Custom", 
		"lineColor" : "Blue", 
		"plotType" : "Frequency", 
		"color" : "Blue", 
		"discriminators" : {
		}, 
		"createdAt" : "2017-09-06T07:44:10.000Z", 
		"updatedAt" : "2017-09-06T07:44:10.000Z", 
		"idWell" : 18, 
		"idCurve" : {
		}, 
		"idZoneSet" : {
		}
	}
}
 */
function Tạo_Histogram(name, histogramTitle, hardCopyWidth, hardCopyHeight, intervalDepthTop, intervalDepthBottom, divisions, leftScale, rightScale, showGaussian, loga, showGrid, flipHorizontal, lineStyle, lineColor, plot, plotType, color, discriminators, idWell, idProject, idZoneSet, idZone, activeZone) {}
/**
 * @param {Number} idProject
 * @implements Method: POST
 * @implements Route: /project/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idProject" : 1
}
 * @example Example Response: 
{
}
 */
function Info_Project(idProject) {}
/**
 * @implements Method: POST
 * @implements Route: /project/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function List_Project() {}
/**
 * @param {String} name
 * @param {String} company
 * @param {String} department
 * @param {String} description
 * @implements Method: POST
 * @implements Route: /project/new
 * @implements Note: 
 * @example Example Payload: 
{
	"name" : "Test-Project", 
	"company" : "UET", 
	"department" : "FIT", 
	"description" : "blablabla"
}
 * @example Example Response: 
{
}
 */
function Tạo_Project(name, company, department, description) {}
/**
 * @param {Number} idPlot
 * @implements Method: DELETE
 * @implements Route: /project/plot/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idPlot" : 1
}
 * @example Example Response: 
{
}
 */
function Xóa_Plot(idPlot) {}
/**
 * @param {Number} idDepthAxis
 * @implements Method: DELETE
 * @implements Route: /project/plot/depth-axis/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idDepthAxis" : 4
}
 * @example Example Response: 
{
}
 */
function Xóa_Depth_Axis(idDepthAxis) {}
/**
 * @param {Number} idDepthAxis
 * @implements Method: POST
 * @implements Route: /project/plot/depth-axis/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idDepthAxis" : 2, 
	"showTitle" : "true", 
	"title" : "Depth", 
	"trackBackground" : "rgba(255,255,255,0)", 
	"geometryWidth" : 60, 
	"orderNum" : "a", 
	"idPlot" : 2, 
	"justification" : "center", 
	"depthType" : "", 
	"unitType" : "M", 
	"decimals" : 1
}
 * @example Example Response: 
{
}
 */
function Info_Depth_Axis(idDepthAxis) {}
/**
 * @param {Number} idPlot
 * @implements Method: POST
 * @implements Route: /project/plot/depth-axis/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idPlot" : 4, 
	"showTitle" : "true", 
	"title" : "Depth", 
	"trackBackground" : "rgba(255,255,255,0)", 
	"geometryWidth" : 60, 
	"orderNum" : "a", 
	"justification" : "center", 
	"depthType" : "", 
	"unitType" : "M", 
	"decimals" : 1
}
 * @example Example Response: 
{
}
 */
function Tạo_Depth_Axis(idPlot) {}
/**
 * @param {} idPlotidWell
 * @implements Method: POST
 * @implements Route: /project/plot/duplicate
 * @implements Note: 
 * @example Example Payload: 
{
	"idPlot" : 1, 
	"idWell" : 1
}
 * @example Example Response: 
{
}
 */
function Duplicate_logplot(idPlotidWell) {}
/**
 * @param {Number} idPlot
 * @param {Number} idWell
 * @param {String(*)} name
 * @param {String(*)} option
 * @param {int} referenceCurve
 * @implements Method: POST
 * @implements Route: /project/plot/edit
 * @implements Note: (*) can be null.
 * @example Example Payload: 
{
	"idPlot" : 1, 
	"idWell" : 1, 
	"name" : "Plot-test", 
	"option" : "Option-test", 
	"referenceCurve" : "2"
}
 * @example Example Response: 
{
}
 */
function Sửa_Plot(idPlot, idWell, name, option, referenceCurve) {}
/**
 * @param {} idImageTrack
 * @implements Method: DELETE
 * @implements Route: /project/plot/image-track/delete/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_image_track(idImageTrack) {}
/**
 * @param {} idImageTrack
 * @param {} info
 * @implements Method: POST
 * @implements Route: /project/plot/image-track/edit/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_image_track(idImageTrack, info) {}
/**
 * @param {} idImageOfTrack
 * @implements Method: DELETE
 * @implements Route: /project/plot/image-track/image/delete/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Delete__image_of_image_track(idImageOfTrack) {}
/**
 * @param {} idImageOfTrack
 * @implements Method: POST
 * @implements Route: /project/plot/image-track/image/edit/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Edit__image_of_image_track(idImageOfTrack) {}
/**
 * @param {} idImageOfTrack
 * @implements Method: POST
 * @implements Route: /project/plot/image-track/image/info/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info__image_of_image_track(idImageOfTrack) {}
/**
 * @param {} idImageOfTrack
 * @implements Method: POST
 * @implements Route: /project/plot/image-track/image/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_image_of_track_by_image_track_id(idImageOfTrack) {}
/**
 * @param {} imageUrl
 * @param {0} topDepth
 * @param {100} bottomDepth
 * @param {0} left
 * @param {100} right
 * @param {1} idImageTrack
 * @implements Method: POST
 * @implements Route: /project/plot/image-track/image/new/
 * @implements Note: Cần cả 4 element
 * @example Example Payload: 
{
	"idImageTrack" : 3, 
	"imageUrl" : "", 
	"topDepth" : 0, 
	"bottomDepth" : 100
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"idImageOfTrack" : 3, 
		"idImageTrack" : 3, 
		"imageUrl" : "", 
		"topDepth" : 0, 
		"bottomDepth" : 100, 
		"left" : 0, 
		"right" : 100, 
		"updatedAt" : "2017-10-26T04:52:09.464Z", 
		"createdAt" : "2017-10-26T04:52:09.464Z"
	}
}
 */
function Create_image_of_image_track(imageUrl, topDepth, bottomDepth, left, right, idImageTrack) {}
/**
 * @param {} idImageTrack
 * @implements Method: POST
 * @implements Route: /project/plot/image-track/info/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_image_track(idImageTrack) {}
/**
 * @param {boolean} showTitle
 * @param {String} title
 * @param {String} topJustification
 * @param {String} orderNum
 * @param {String} background
 * @param {Number} width
 * @param {Number} idImageTrack
 * @param {Number} idPlot
 * @implements Method: POST
 * @implements Route: /project/plot/image-track/new/
 * @implements Note: yêu cầu idPlot
 * @example Example Payload: 
{
	"showTitle" : "true", 
	"title" : "Image Track 1", 
	"topJustification" : "Center", 
	"orderNum" : "zz", 
	"background" : "white", 
	"width" : 1, 
	"idImageTrack" : 6e+34, 
	"idPlot" : 2
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"showTitle" : "true", 
		"title" : "Image Track 1", 
		"topJustification" : "Center", 
		"orderNum" : "zz", 
		"background" : "white", 
		"width" : 1, 
		"idImageTrack" : 6, 
		"idPlot" : 2, 
		"updatedAt" : "2017-10-26T04:44:53.760Z", 
		"createdAt" : "2017-10-26T04:44:53.760Z"
	}
}
 */
function Create_image_track(showTitle, title, topJustification, orderNum, background, width, idImageTrack, idPlot) {}
/**
 * @param {Number} idPlot
 * @implements Method: POST
 * @implements Route: /project/plot/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idPlot" : 1
}
 * @example Example Response: 
{
}
 */
function Info_Plot(idPlot) {}
/**
 * @param {Number} idProject
 * @param {String} name
 * @param {String} option
 * @param {int} referenceCurve
 * @param {boolean} override
 * @implements Method: POST
 * @implements Route: /project/plot/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idWell" : 1, 
	"name" : "Ex-Plot", 
	"option" : "blank-plot", 
	"referenceCurve" : "2"
}
 * @example Example Response: 
{
}
 */
function Tạo_Plot(idProject, name, option, referenceCurve, override) {}
/**
 * @param {} idObjectTrack
 * @implements Method: DELETE
 * @implements Route: /project/plot/object-track/delete/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Delete_object_track(idObjectTrack) {}
/**
 * @param {} idObjectTrack
 * @implements Method: POST
 * @implements Route: /project/plot/object-track/edit/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Edit_object_track(idObjectTrack) {}
/**
 * @param {} idObjectTrack
 * @implements Method: POST
 * @implements Route: /project/plot/object-track/info/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_object_track(idObjectTrack) {}
/**
 * @param {boolean} showTitle
 * @param {String} title
 * @param {String} topJustification
 * @param {String} orderNum
 * @param {Number} width
 * @param {Number} idObjectTrack
 * @param {Number} idPlot
 * @implements Method: POST
 * @implements Route: /project/plot/object-track/new/
 * @implements Note: require idPlot
 * @example Example Payload: 
{
	"showTitle" : "true", 
	"title" : "Histogram Track 1", 
	"topJustification" : "Center", 
	"orderNum" : "zz", 
	"width" : 1, 
	"idObjectTrack" : 2, 
	"idPlot" : 2
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful ObjectTrack", 
	"content" : {
		"showTitle" : "true", 
		"title" : "Histogram Track 1", 
		"topJustification" : "Center", 
		"orderNum" : "zz", 
		"width" : 1, 
		"idObjectTrack" : 2, 
		"idPlot" : 2, 
		"updatedAt" : "2017-10-26T04:54:22.273Z", 
		"createdAt" : "2017-10-26T04:54:22.273Z"
	}
}
 */
function Create_object_track(showTitle, title, topJustification, orderNum, width, idObjectTrack, idPlot) {}
/**
 * @param {} idObjectOfTrack
 * @implements Method: DELETE
 * @implements Route: /project/plot/object-track/object/delete/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Delete_object_of_object_track(idObjectOfTrack) {}
/**
 * @param {} idObjectOfTrack
 * @implements Method: POST
 * @implements Route: /project/plot/object-track/object/edit/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Edit_object_of_object_track(idObjectOfTrack) {}
/**
 * @param {} idObjectOfTrack
 * @implements Method: POST
 * @implements Route: /project/plot/object-track/object/info/
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_object_of_object_track(idObjectOfTrack) {}
/**
 * @param {2} idObjectTrack
 * @param {} object
 * @param {10} topDepth
 * @param {100} bottomDepth
 * @implements Method: POST
 * @implements Route: /project/plot/object-track/object/new/
 * @implements Note: require all
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful ObjectOfTrack", 
	"content" : {
		"left" : 0, 
		"right" : 100, 
		"idObjectOfTrack" : 1, 
		"idObjectTrack" : 2, 
		"object" : "", 
		"topDepth" : 10, 
		"bottomDepth" : 100, 
		"updatedAt" : "2017-10-26T05:00:10.664Z", 
		"createdAt" : "2017-10-26T05:00:10.664Z"
	}
}
 */
function Create_object_of_object_track(idObjectTrack, object, topDepth, bottomDepth) {}
/**
 * @param {} idAnnotation
 * @implements Method: DELETE
 * @implements Route: /project/plot/track/annotation/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Delete_an_annotation(idAnnotation) {}
/**
 * @param {} idAnnotation
 * @implements Method: POST
 * @implements Route: /project/plot/track/annotation/edit
 * @implements Note: required idAnnotation
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Edit_an_annotation(idAnnotation) {}
/**
 * @param {} idAnnotation
 * @implements Method: POST
 * @implements Route: /project/plot/track/annotation/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Get_annotation_info(idAnnotation) {}
/**
 * @param {String} text
 * @param {String} textStyle
 * @param {ENUM('Top','Center','Bottom')} vAlign
 * @param {ENUM('Left','Center','Right')} hAlign
 * @param {String} background
 * @param {Boolean} fitBounds
 * @param {Boolean} deviceSpace
 * @param {Boolean} vertical
 * @param {Boolean} shadow
 * @param {Double} left
 * @param {Double} width
 * @param {Double} top
 * @param {Double} bottom
 * @param {1} idTrack
 * @implements Method: POST
 * @implements Route: /project/plot/track/annotation/new
 * @implements Note: 
 * @example Example Payload: 
{
	"text" : "hihi", 
	"textStyle" : {
	}, 
	"vAlign" : "Center", 
	"hAlign" : "Center", 
	"background" : {
	}, 
	"fitBounds" : "true", 
	"deviceSpace" : "true", 
	"vertical" : "false", 
	"shadow" : "false", 
	"left" : 0, 
	"width" : 100, 
	"top" : 0, 
	"bottom" : 0, 
	"idTrack" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new Annotation success", 
	"content" : {
		"idAnnotation" : 2, 
		"text" : "hihi", 
		"textStyle" : {
		}, 
		"vAlign" : "Center", 
		"hAlign" : "Center", 
		"background" : {
		}, 
		"fitBounds" : "true", 
		"deviceSpace" : "true", 
		"vertical" : "false", 
		"shadow" : "false", 
		"left" : 0, 
		"width" : 100, 
		"top" : 0, 
		"bottom" : 0, 
		"idTrack" : 1, 
		"updatedAt" : "2017-09-22T09:55:31.513Z", 
		"createdAt" : "2017-09-22T09:55:31.513Z"
	}
}
 */
function Create_new_annotation(text, textStyle, vAlign, hAlign, background, fitBounds, deviceSpace, vertical, shadow, left, width, top, bottom, idTrack) {}
/**
 * @param {Number} idTrack
 * @implements Method: DELETE
 * @implements Route: /project/plot/track/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idTrack" : 1
}
 * @example Example Response: 
{
}
 */
function Xóa_Track(idTrack) {}
/**
 * @param {Number} idTrack
 * @param {Number} idPlot
 * @param {Number} orderNum
 * @param {boolean} showTitle
 * @param {String} title
 * @param {String} topJustification
 * @param {String} bottomJustification
 * @param {Boolean} showLabels
 * @param {Boolean} showValueGrid
 * @param {int} majorTicks
 * @param {int} minorTicks
 * @param {boolean} showDepthGrid
 * @param {float} width
 * @param {string} color
 * @param {boolean} showEndLabels
 * @implements Method: POST
 * @implements Route: /project/plot/track/edit
 * @implements Note: topJustification: Left,Right,Center.    
bottomJustification: Left,Right,Center
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_Track(idTrack, idPlot, orderNum, showTitle, title, topJustification, bottomJustification, showLabels, showValueGrid, majorTicks, minorTicks, showDepthGrid, width, color, showEndLabels) {}
/**
 * @param {} idImage
 * @implements Method: DELETE
 * @implements Route: /project/plot/track/image/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_image(idImage) {}
/**
 * @implements Method: POST
 * @implements Route: /project/plot/track/image/edit
 * @implements Note: params: create payload + idImage
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_image() {}
/**
 * @param {} idImage
 * @implements Method: POST
 * @implements Route: /project/plot/track/image/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_image(idImage) {}
/**
 * @implements Method: POST
 * @implements Route: /project/plot/track/image/new
 * @implements Note: 
 * @example Example Payload: 
{
	"location" : "/c61f3965/0e48e95d/efd21a5e/e2349db0/linux.jpg", 
	"top" : 1146.048, 
	"bottom" : 1155.4141979508197, 
	"width" : 50, 
	"left" : 50, 
	"idTrack" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new image success", 
	"content" : {
		"idImage" : 1, 
		"location" : "/c61f3965/0e48e95d/efd21a5e/e2349db0/linux.jpg", 
		"top" : 1146.048, 
		"bottom" : 1155.4141979508197, 
		"width" : 50, 
		"left" : 50, 
		"idTrack" : 1, 
		"updatedAt" : "2017-09-22T03:06:06.498Z", 
		"createdAt" : "2017-09-22T03:06:06.498Z"
	}
}
 */
function create_image() {}
/**
 * @param {Number} idTrack
 * @implements Method: POST
 * @implements Route: /project/plot/track/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idTrack" : 1
}
 * @example Example Response: 
{
}
 */
function Info_Track(idTrack) {}
/**
 * @param {} idLine
 * @implements Method: DELETE
 * @implements Route: /project/plot/track/line/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idLine" : 1
}
 * @example Example Response: 
{
}
 */
function Xóa_1_line(idLine) {}
/**
 * @param {} idTrack
 * @param {} minValue
 * @param {} maxValue
 * @param {} displayMode
 * @param {} blockPosition
 * @param {} displayType
 * @param {(*)} lineStyle
 * @param {(*)} lineWidth
 * @param {(*)} lineColor
 * @param {} showHeader
 * @param {} showDataset
 * @param {} autoValueScale
 * @param {} wrapMode
 * @param {} ignoreMissingValues
 * @param {} displayAs
 * @param {} lias
 * @param {(*)} symbolName
 * @implements Method: POST
 * @implements Route: /project/plot/track/line/edit
 * @implements Note: params: circle, cross, diamond, star, triangle, dot, or plussymbolSize; (*)symbolStrokeStyle; (*)symbolFillStyle; (*)symbolLineWidth; (*)symbolLineDash; (*). (*) can be null
 * @example Example Payload: 
{
	"idLine" : 5, 
	"idTrack" : 6, 
	"showHeader" : "true", 
	"showDataset" : "false", 
	"minValue" : 0, 
	"maxValue" : 200, 
	"autoValueScale" : "false", 
	"displayMode" : "Line", 
	"wrapMode" : "None", 
	"blockPosition" : "None", 
	"ignoreMissingValues" : "false", 
	"displayType" : "Linear", 
	"displayAs" : "Normal", 
	"lineStyle" : "[0]", 
	"lineWidth" : 1, 
	"lineColor" : "red", 
	"alias" : "DTCO3", 
	"symbolName" : "circle", 
	"symbolSize" : 4, 
	"symbolStrokeStyle" : "blue", 
	"symbolFillStyle" : "red", 
	"symbolLineWidth" : 1, 
	"symbolLineDash" : "[0]"
}
 * @example Example Response: 
{
}
 */
function Sửa_1_line(idTrack, minValue, maxValue, displayMode, blockPosition, displayType, lineStyle, lineWidth, lineColor, showHeader, showDataset, autoValueScale, wrapMode, ignoreMissingValues, displayAs, lias, symbolName) {}
/**
 * @param {Number} idTrack
 * @param {Number} idCurve
 * @implements Method: POST
 * @implements Route: /project/plot/track/line/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idTrack" : 1, 
	"idCurve" : 2
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new line success", 
	"content" : {
		"showHeader" : "true", 
		"showDataset" : "false", 
		"minValue" : 0, 
		"maxValue" : 200, 
		"autoValueScale" : "false", 
		"displayMode" : "Line", 
		"wrapMode" : "None", 
		"blockPosition" : "None", 
		"ignoreMissingValues" : "false", 
		"displayType" : "Linear", 
		"displayAs" : "Normal", 
		"lineStyle" : "[0]", 
		"lineWidth" : 1, 
		"lineColor" : "red", 
		"idLine" : 5, 
		"idTrack" : 6, 
		"idCurve" : 6, 
		"updatedAt" : "2017-07-25T02:18:24.273Z", 
		"createdAt" : "2017-07-25T02:18:24.273Z"
	}
}
 */
function Tạo_1_line(idTrack, idCurve) {}
/**
 * @param {Number} idPlot
 * @implements Method: POST
 * @implements Route: /project/plot/track/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idPlot" : 4, 
	"orderNum" : 1
}
 * @example Example Response: 
{
}
 */
function Tạo_Track(idPlot) {}
/**
 * @implements Method: POST
 * @implements Route: /project/plot/track/shading/delete
 * @implements Note: name: newShading
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_shading() {}
/**
 * @param {} idTrack
 * @param {} name
 * @param {} negativeFill
 * @param {} positiveFill
 * @param {bool} isNegPosFilling
 * @param {} idLeftLine
 * @param {} idRightLine
 * @param {} leftFixedValue
 * @param {} rightFixedValue
 * @param {} idControlCurve
 * @implements Method: POST
 * @implements Route: /project/plot/track/shading/edit
 * @implements Note: idTrack: 1
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sua_shading(idTrack, name, negativeFill, positiveFill, isNegPosFilling, idLeftLine, idRightLine, leftFixedValue, rightFixedValue, idControlCurve) {}
/**
 * @param {} idTrack
 * @param {} name
 * @param {} negativeFill
 * @param {} positiveFill
 * @param {bool} isNegPosFilling
 * @param {} idLeftLine
 * @param {} idRightLine
 * @param {} leftFixedValue
 * @param {} rightFixedValue
 * @param {} idControlCurve
 * @implements Method: POST
 * @implements Route: /project/plot/track/shading/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Tao_Shading(idTrack, name, negativeFill, positiveFill, isNegPosFilling, idLeftLine, idRightLine, leftFixedValue, rightFixedValue, idControlCurve) {}
/**
 * @param {Integer} idZoneTrack
 * @implements Method: DELETE
 * @implements Route: /project/plot/zone-track/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_Zone_Track(idZoneTrack) {}
/**
 * @param {String(*)} title
 * @param {Boolean(*)} showTitle
 * @param {String(*)} topJustification
 * @param {String(*)} bottomJustification
 * @param {String(*)} color
 * @param {Number(*)} width
 * @param {String(*)} idZoneSet
 * @implements Method: POST
 * @implements Route: /project/plot/zone-track/edit
 * @implements Note: (*) can be null.   topJustification: Enum('Center', 'Left', 'Right').    bottomJustification: Enum('Center', 'Left', 'Right')
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_Zone_Track(title, showTitle, topJustification, bottomJustification, color, width, idZoneSet) {}
/**
 * @param {Integer} idZoneTrack
 * @implements Method: POST
 * @implements Route: /project/plot/zone-track/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_Zone_Track(idZoneTrack) {}
/**
 * @param {Number} idPlot
 * @param {String} title
 * @param {Boolean} showTitle
 * @param {String} topJustification
 * @param {String} bottomJustification
 * @param {String} color
 * @param {Float} width
 * @param {Integer} idZoneSet
 * @param {String} orderNum
 * @implements Method: POST
 * @implements Route: /project/plot/zone-track/new
 * @implements Note: changed idTrack to idPlot.   topJustification, bottomJustification: Enum['Center','Left','Right']
 * @example Example Payload: 
{
	"idPlot" : 1, 
	"title" : "Zone1", 
	"showTitle" : "true", 
	"topJustification" : "Center", 
	"bottomJustification" : "Center", 
	"color" : "white", 
	"width" : 1
}
 * @example Example Response: 
{
}
 */
function Tạo_Zone_Track(idPlot, title, showTitle, topJustification, bottomJustification, color, width, idZoneSet, orderNum) {}
/**
 * @param {num} idWell
 * @param {Array} headers
 * @implements Method: POST
 * @implements Route: /project/well/bulk-update-well-header
 * @implements Note: (header: string, value: value). header array with result = UPDATED,CREATED,ERROR...
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function bulk_update_well_header(idWell, headers) {}
/**
 * @param {} idCombinedBox
 * @implements Method: DELETE
 * @implements Route: /project/well/combined-box/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_combined_box(idCombinedBox) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/edit
 * @implements Note: 
 * @example Example Payload: 
{
	"idWell" : 2, 
	"name" : "testCombinedBox1", 
	"selection" : "", 
	"idCombinedBox" : 1, 
	"idLogPlots" : {
		"0" : 4
 }, 
	"idCrossPlots" : {
		"0" : 4
 }, 
	"idHistograms" : {
		"0" : 4
	}
}
 * @example Example Response: 
{
}
 */
function edit_combined_box() {}
/**
 * @param {} idCombinedBox
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"idCombinedBox" : 25, 
		"name" : "testCombinedBox11", 
		"selection" : "", 
		"createdAt" : "2017-12-01T04:41:49.000Z", 
		"updatedAt" : "2017-12-01T04:41:49.000Z", 
		"idWell" : 2, 
		"plots" : {
		}, 
		"crossplots" : {
		}, 
		"histograms" : {
		}
	}
}
 */
function info_combined_box(idCombinedBox) {}
/**
 * @param {String} name
 * @param {String} selection
 * @param {int} idWell
 * @param {array} idLogPlots
 * @param {array} idCrossPlots
 * @param {array} idHistogram
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/new
 * @implements Note: array là mảng các id logplot,crossplot,histogram. idLogPlots,idCrossPlot,idHistogram can be mull
 * @example Example Payload: 
{
	"idWell" : 2, 
	"name" : "testCombinedBox1", 
	"selection" : "", 
	"idLogPlots" : {
		"0" : 4
 }, 
	"idCrossPlots" : {
		"0" : 4
 }, 
	"idHistograms" : {
		"0" : 4
	}
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"idCombinedBox" : 25, 
		"idWell" : 2, 
		"name" : "testCombinedBox1", 
		"selection" : "", 
		"updatedAt" : "2017-12-01T04:41:49.999Z", 
		"createdAt" : "2017-12-01T04:41:49.999Z"
	}
}
 */
function new_combined_box(name, selection, idWell, idLogPlots, idCrossPlots, idHistogram) {}
/**
 * @param {} idSelectionTool
 * @implements Method: DELETE
 * @implements Route: /project/well/combined-box/selection-tool/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_selection_tool(idSelectionTool) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/selection-tool/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_selection_tool() {}
/**
 * @param {} idSelectionTool
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/selection-tool/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_selection_tool(idSelectionTool) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/selection-tool/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idCombinedBox" : 1, 
	"data" : {
		"0" : {
			"startDepth" : 123, 
			"stopDepth" : 132
 }, 
		"1" : {
			"startDepth" : 123, 
			"stopDepth" : 132
 }
 }, 
	"idCombinedBoxTool" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"data" : {
			"0" : {
				"startDepth" : 123, 
				"stopDepth" : 132
 }, 
			"1" : {
				"startDepth" : 123, 
				"stopDepth" : 132
 }
 }, 
		"idSelectionTool" : 2, 
		"idCombinedBox" : 1, 
		"idCombinedBoxTool" : 1, 
		"updatedAt" : "2018-02-26T04:42:14.444Z", 
		"createdAt" : "2018-02-26T04:42:14.444Z"
	}
}
 */
function create_new_selection_tool() {}
/**
 * @param {} idCombinedBoxTool
 * @implements Method: DELETE
 * @implements Route: /project/well/combined-box/tool/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_combined_box_tool(idCombinedBoxTool) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/tool/edit
 * @implements Note: 
 * @example Example Payload: 
{
	"name" : "myTool", 
	"color" : "sua color", 
	"idCombinedBox" : 23
}
 * @example Example Response: 
{
}
 */
function edit_combined_box_tool() {}
/**
 * @param {} idCombinedBoxTool
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/tool/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_combined_box_tool(idCombinedBoxTool) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/tool/list
 * @implements Note: sample: get list of tool
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_combined_box_tool() {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/combined-box/tool/new
 * @implements Note: 
 * @example Example Payload: 
{
	"name" : "myTool", 
	"color" : "day la color", 
	"idCombinedBox" : 23
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"idCombinedBoxTool" : 1, 
		"name" : "myTool", 
		"color" : "day la color", 
		"idCombinedBox" : 23, 
		"updatedAt" : "2017-12-01T04:49:25.459Z", 
		"createdAt" : "2017-12-01T04:49:25.459Z"
	}
}
 */
function new_combined_box_tool() {}
/**
 * @param {Number} idCurve
 * @implements Method: DELETE
 * @implements Route: /project/well/dataset/curve/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idCurve" : 1
}
 * @example Example Response: 
{
}
 */
function Xóa_Curve(idCurve) {}
/**
 * @param {Number(*)} idCurve
 * @param {Number} idDataset
 * @param {String(*)} name
 * @param {String} unit
 * @param {String} initValue
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/edit
 * @implements Note: (*) can be null
 * @example Example Payload: 
{
	"idCurve" : 1, 
	"idDataset" : 1, 
	"name" : "Curve", 
	"unit" : "mn/m", 
	"initValue" : "60"
}
 * @example Example Response: 
{
}
 */
function Sửa_Curve(idCurve, idDataset, name, unit, initValue) {}
/**
 * @param {Number} idCurve
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/export
 * @implements Note: check status Http200: success va file duoc gui theo res404: not found with idCurve
 * @example Example Payload: 
{
	"idCurve" : 2
}
 * @example Example Response: 
{
}
 */
function Export_curve_datat_to_excel(idCurve) {}
/**
 * @param {Number} idCurve
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/getData
 * @implements Note: 
 * @example Example Payload: 
{
	"idCurve" : 1
}
 * @example Example Response: 
{
}
 */
function Data_Curve(idCurve) {}
/**
 * @param {Number} idCurve
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/getDataFile
 * @implements Note: 
 * @example Example Payload: 
{
	"idCurve" : 1
}
 * @example Example Response: 
{
}
 */
function Get_Curve_file(idCurve) {}
/**
 * @param {Number} idCurve
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/get-parents
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"well" : "Object", 
	"dataset" : "object", 
	"project" : "object", 
	"curve" : "object"
}
 */
function Get_parents_of_curve(idCurve) {}
/**
 * @param {Number} idCurve
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idCurve" : 1
}
 * @example Example Response: 
{
}
 */
function Info_Curve(idCurve) {}
/**
 * @param {Number} idDatatset
 * @param {String} name
 * @implements Method: POSt
 * @implements Route: /project/well/dataset/curve/info-by-name
 * @implements Note: 
 * @example Example Payload: 
{
	"idDataset" : 1, 
	"name" : "ECGR"
}
 * @example Example Response: 
{
}
 */
function Info_Curve_by_name_and_id_Dataset(idDatatset, name) {}
/**
 * @param {Number} idDatatset
 * @param {String} name
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/is-existed
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Found curve", 
	"content" : {
		"idCurve" : 2, 
		"name" : "DTCO3", 
		"unit" : "US/F", 
		"initValue" : "0", 
		"duplicated" : 1, 
		"createdAt" : "2018-03-20T02:34:26.000Z", 
		"updatedAt" : "2018-03-20T02:34:26.000Z", 
		"deletedAt" : {
		}, 
		"idDataset" : 1, 
		"idFamily" : 892
	}
}
 */
function Check_curve_if_existed(idDatatset, name) {}
/**
 * @param {Number} idDataset
 * @param {String} name
 * @param {String} dataset
 * @param {String} unit
 * @param {String} initValue
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idDataset" : 1, 
	"name" : "Ex-Curve", 
	"dataset" : "", 
	"unit" : "mn/m", 
	"initValue" : "30"
}
 * @example Example Response: 
{
}
 */
function Tạo_Curve(idDataset, name, dataset, unit, initValue) {}
/**
 * @param {array} data
 * @param {Number} idDataset
 * @param {String(*)} curveName
 * @param {Number} idDesCurve
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/processing
 * @implements Note: Cần có giải pháp reload lại các line trên logplot trong trường hợp ghi đè curve. data can be null, curveName: null hoặc String nếu tạo curve mới. response: 'content' : {'curveInfo duoc tao'}.    (*) can be null.
 * @example Example Payload: 
{
	"data" : {
		"0" : 123, 
		"1" : 132, 
		"2" : 13, 
		"3" : 123, 
		"4" : 123, 
		"5" : 123, 
		"6" : 213, 
		"7" : 213, 
		"8" : 133, 
		"9" : 1321, 
		"10" : 312, 
		"11" : 123, 
		"12" : 123, 
		"13" : 321, 
		"14" : 321, 
		"15" : 132
 }, 
	"idDataset" : 7, 
	"curveName" : "hihihih"
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"lines" : {
		}, 
		"histograms" : {
		}, 
		"pointsets" : {
		}
	}
}
 */
function Processing_curves(data, idDataset, curveName, idDesCurve) {}
/**
 * @param {} idCurve
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/scale
 * @implements Note: 
 * @example Example Payload: 
{
	"idCurve" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "min max curve success", 
	"content" : {
		"minScale" : 53.8328, 
		"maxScale" : 137.8071
	}
}
 */
function Lấy_minmaxScale_1_Curve(idCurve) {}
/**
 * @param {} projectname
 * @param {} wellname
 * @param {} idDataset
 * @param {} idSrcCurve
 * @param {} idDesCurve
 * @param {} isBackup
 * @param {} idLinefile
 * @param {} newCurveName
 * @implements Method: POST
 * @implements Route: /project/well/dataset/curve/updateData
 * @implements Note: newCurveName và idDesCurve, isBackup không được đồng thời tồn tại
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Edit_CUrve_Data(projectname, wellname, idDataset, idSrcCurve, idDesCurve, isBackup, idLinefile, newCurveName) {}
/**
 * @param {Number} idDataset
 * @implements Method: DELETE
 * @implements Route: /project/well/dataset/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idDataset" : 1
}
 * @example Example Response: 
{
}
 */
function Xóa_Dataset(idDataset) {}
/**
 * @param {Number} idDataset
 * @param {Number(*)} idWell
 * @param {String(*)} name
 * @param {String(*)} datasetKey
 * @param {String(*)} datasetLabel
 * @implements Method: POST
 * @implements Route: /project/well/dataset/edit
 * @implements Note: (*) can be null
 * @example Example Payload: 
{
	"idDataset" : 1, 
	"idWell" : 1, 
	"name" : "dataset-test", 
	"datasetKey" : "Key-test", 
	"datasetLabel" : "Label-test"
}
 * @example Example Response: 
{
}
 */
function Sửa_Dataset(idDataset, idWell, name, datasetKey, datasetLabel) {}
/**
 * @param {Number} idDataset
 * @implements Method: POST
 * @implements Route: /project/well/dataset/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idDataset" : 1
}
 * @example Example Response: 
{
}
 */
function Info_Dataset(idDataset) {}
/**
 * @param {Number} idWell
 * @param {String} name
 * @implements Method: POST
 * @implements Route: /project/well/dataset/info-by-name
 * @implements Note: 
 * @example Example Payload: 
{
	"idWell" : 1, 
	"name" : "W4"
}
 * @example Example Response: 
{
}
 */
function Info_Dataset_by_name_and_idWell(idWell, name) {}
/**
 * @param {Number} idWell
 * @implements Method: DELETE
 * @implements Route: /project/well/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"idWell" : 1
}
 * @example Example Response: 
{
}
 */
function Xóa_Well(idWell) {}
/**
 * @param {} idDiscrim
 * @implements Method: DELETE
 * @implements Route: /project/well/discrim/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Xóa_Discrim(idDiscrim) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/discrim/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_Discrim() {}
/**
 * @param {} idDiscrim
 * @implements Method: POST
 * @implements Route: /project/well/discrim/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_Discrim(idDiscrim) {}
/**
 * @param {ENUM('cross-plot','histogram')} list
 * @implements Method: POST
 * @implements Route: /project/well/discrim/list
 * @implements Note: 
 * @example Example Payload: 
{
	"list" : "histogram"
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Get list Discrim of cross-plot success", 
	"content" : {
		"0" : {
			"idDiscrim" : 1, 
			"use" : "true", 
			"combine" : "and", 
			"func" : "", 
			"value" : {
			}, 
			"createdAt" : {
			}, 
			"updatedAt" : {
			}, 
			"idCrossPlot" : 1, 
			"idHistogram" : {
			}, 
			"idCurveLeft" : 1, 
			"idCurveRight" : 1
 }, 
		"1" : {
			"idDiscrim" : 4, 
			"use" : "false", 
			"combine" : "and", 
			"func" : "<", 
			"value" : {
			}, 
			"createdAt" : "2017-09-11T04:09:13.000Z", 
			"updatedAt" : "2017-09-11T04:09:13.000Z", 
			"idCrossPlot" : 1, 
			"idHistogram" : {
			}, 
			"idCurveLeft" : 1, 
			"idCurveRight" : 2
		}
	}
}
 */
function List_Discrim_By_CrossPlot_or_Histogram(list) {}
/**
 * @param {} idHistogram
 * @param {} idCrossPlot
 * @param {STRING} value
 * @implements Method: POST
 * @implements Route: /project/well/discrim/new
 * @implements Note: idHistogram và idCrossPlot không có đồng thời.
 * @example Example Payload: 
{
	"value" : "", 
	"idCrossPlot" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new Discrim success", 
	"content" : {
		"use" : "false", 
		"idDiscrim" : 5, 
		"value" : "", 
		"idCrossPlot" : 1, 
		"updatedAt" : "2017-10-17T10:38:49.502Z", 
		"createdAt" : "2017-10-17T10:38:49.502Z"
	}
}
 */
function Tạo_Discrim(idHistogram, idCrossPlot, value) {}
/**
 * @param {Number} idWell
 * @param {Number(*)} idProject
 * @param {String(*)} name
 * @param {String(*)} topDepth
 * @param {String(*)} bottomDepth
 * @param {String(*)} step
 * @implements Method: POST
 * @implements Route: /project/well/edit
 * @implements Note: (*) can be null
 * @example Example Payload: 
{
	"idWell" : 1, 
	"idProject" : 1, 
	"name" : "Ex-Well-change", 
	"topDepth" : "20", 
	"bottomDepth" : "80", 
	"step" : "30"
}
 * @example Example Response: 
{
}
 */
function Sửa_Well(idWell, idProject, name, topDepth, bottomDepth, step) {}
/**
 * @param {int} idWell
 * @param {int} idDesProject
 * @implements Method: POST
 * @implements Route: /project/well/export-to-project
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Export_Well_to_another_project(idWell, idDesProject) {}
/**
 * @param {number} idWell
 * @implements Method: POST
 * @implements Route: /project/well/full-info
 * @implements Note: 
 * @example Example Payload: 
{
	"idWell" : 1
}
 * @example Example Response: 
{
}
 */
function Get_Well_full_info(idWell) {}
/**
 * @param {number} idWell
 * @implements Method: POST
 * @implements Route: /project/well/get-well-header
 * @implements Note: 
 * @example Example Payload: 
{
	"0" : "w", 
	"1" : "e", 
	"2" : "l", 
	"3" : "l", 
	"4" : " ", 
	"5" : "h", 
	"6" : "e", 
	"7" : "a", 
	"8" : "d", 
	"9" : "e", 
	"10" : "r", 
	"11" : " ", 
	"12" : "a", 
	"13" : "r", 
	"14" : "r", 
	"15" : "a", 
	"16" : "y"
}
 * @example Example Response: 
{
}
 */
function Get_well_headers_of_well(idWell) {}
/**
 * @param {number} idWell
 * @implements Method: POST
 * @implements Route: /project/well/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idWell" : 1
}
 * @example Example Response: 
{
}
 */
function Info_Well(idWell) {}
/**
 * @param {Number} idProject
 * @param {string} name
 * @implements Method: POST
 * @implements Route: /project/well/info-by-name
 * @implements Note: 
 * @example Example Payload: 
{
	"idProject" : 1, 
	"name" : "W4"
}
 * @example Example Response: 
{
}
 */
function Get_well_info_by_name_and_idProject(idProject, name) {}
/**
 * @param {Number} idProject
 * @param {Number(*)} start
 * @param {Number(*)} limit
 * @param {Boolean(*)} forward
 * @param {String(*)} match
 * @implements Method: POST
 * @implements Route: /project/well/list
 * @implements Note: - Nếu không có start --> start = 0- Nếu không có limit --> limit = 50- Nếu không có forward --> forward = true. Nếu forward = false thì list các well từ id = start tới id = start - limit - Nếu không có match --> match =  '*' (match tất cả các well có wellname khớp với 'match' (không phân biệt hoa thường)- Order well theo thứ tự tăng/giảm dần của idWell** Tham khao: https://gyazo.com/49677127ca48c5edc024799f742df967.      (*) can be null.
 * @example Example Payload: 
{
	"idProject" : 1, 
	"start" : 10, 
	"limit" : 20, 
	"forward" : "true"
}
 * @example Example Response: 
{
}
 */
function List_wells_of_a_project_with_filter(idProject, start, limit, forward, match) {}
/**
 * @param {} idMarkerSet
 * @implements Method: DELETE
 * @implements Route: /project/well/marker-set/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_marker_set(idMarkerSet) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/marker-set/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_marker_set() {}
/**
 * @param {} idMarkerSet
 * @implements Method: POST
 * @implements Route: /project/well/marker-set/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_marker_set(idMarkerSet) {}
/**
 * @param {} idWell
 * @implements Method: POST
 * @implements Route: /project/well/marker-set/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_marker_set(idWell) {}
/**
 * @param {} idMarker
 * @implements Method: DELETE
 * @implements Route: /project/well/marker-set/marker/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_marker(idMarker) {}
/**
 * @param {} depth
 * @implements Method: POST
 * @implements Route: /project/well/marker-set/marker/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_marker(depth) {}
/**
 * @param {} idMarker
 * @implements Method: POST
 * @implements Route: /project/well/marker-set/marker/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_marker(idMarker) {}
/**
 * @param {} depth
 * @param {} idMarkerTemplate
 * @param {} idMarkerSet
 * @implements Method: POST
 * @implements Route: /project/well/marker-set/marker/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_new_marker(depth, idMarkerTemplate, idMarkerSet) {}
/**
 * @param {} name
 * @param {} idWell
 * @param {} template
 * @implements Method: POST
 * @implements Route: /project/well/marker-set/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_new_marker_set(name, idWell, template) {}
/**
 * @param {Number} idWell
 * @param {Number} idProject
 * @param {String} name
 * @param {String} topDepth
 * @param {String} bottomDepth
 * @param {String} step
 * @implements Method: POST
 * @implements Route: /project/well/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idProject" : 1, 
	"name" : "Ex-Well", 
	"topDepth" : "10", 
	"bottomDepth" : "50", 
	"step" : "30"
}
 * @example Example Response: 
{
}
 */
function Tạo_Well(idWell, idProject, name, topDepth, bottomDepth, step) {}
/**
 * @param {} idReferenceCurve
 * @implements Method: DELETE
 * @implements Route: /project/well/reference-curve/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_reference_curve(idReferenceCurve) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/reference-curve/edit
 * @implements Note: params: same as response when create
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_reference_curve() {}
/**
 * @param {} idReferenceCurve
 * @implements Method: POST
 * @implements Route: /project/well/reference-curve/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_reference_curve(idReferenceCurve) {}
/**
 * @param {Integer} idHistogram
 * @param {Integer} idCrossplot
 * @param {Integer} idCurve
 * @implements Method: POST
 * @implements Route: /project/well/reference-curve/new
 * @implements Note: idHistogram và idCrossplot không có đồng thời.
 * @example Example Payload: 
{
	"idHistogram" : 1, 
	"idCurve" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new reference successful!", 
	"content" : {
		"left" : 0, 
		"right" : 0, 
		"visiable" : "true", 
		"log" : "true", 
		"color" : "rgb(0,0,0)", 
		"idReferenceCurve" : 6, 
		"idHistogram" : 2, 
		"idCurve" : 1, 
		"updatedAt" : "2017-10-02T04:48:21.895Z", 
		"createdAt" : "2017-10-02T04:48:21.895Z"
	}
}
 */
function create_reference_curve(idHistogram, idCrossplot, idCurve) {}
/**
 * @param {} idRegressionLine
 * @implements Method: DELETE
 * @implements Route: /project/well/regression-line/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Delete_an_regressionLine(idRegressionLine) {}
/**
 * @param {} idRegressionLine
 * @implements Method: POST
 * @implements Route: /project/well/regression-line/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Get regressionLine info success", 
	"content" : {
		"idRegressionLine" : 2, 
		"lineStyle" : {
			"color" : "Blue", 
			"width" : 1, 
			"style" : {
			}
 }, 
		"displayLine" : "true", 
		"displayEquation" : "true", 
		"regType" : "Linear", 
		"inverseReg" : "false", 
		"exclude" : "false", 
		"fitX" : 12.12, 
		"fitY" : 122.213, 
		"createdAt" : "2017-09-23T14:33:35.000Z", 
		"updatedAt" : "2017-09-23T14:33:35.000Z", 
		"idCrossPlot" : 1, 
		"polygons" : {
			"0" : {
				"idPolygon" : 1, 
				"lineStyle" : "pokwiao", 
				"display" : "false", 
				"points" : "adfw", 
				"createdAt" : "2017-09-23T14:31:45.000Z", 
				"updatedAt" : "2017-09-23T14:31:45.000Z", 
				"idCrossPlot" : 1, 
				"Polygon_RegressionLine" : {
					"createdAt" : "2017-09-23T14:33:35.000Z", 
					"updatedAt" : "2017-09-23T14:33:35.000Z", 
					"polygonId" : 1, 
					"regressionLineId" : 2
 }
 }, 
			"1" : {
				"idPolygon" : 3, 
				"lineStyle" : "pokwiao", 
				"display" : "false", 
				"points" : "adfw", 
				"createdAt" : "2017-09-23T14:31:54.000Z", 
				"updatedAt" : "2017-09-23T14:31:54.000Z", 
				"idCrossPlot" : 1, 
				"Polygon_RegressionLine" : {
					"createdAt" : "2017-09-23T14:33:35.000Z", 
					"updatedAt" : "2017-09-23T14:33:35.000Z", 
					"polygonId" : 3, 
					"regressionLineId" : 2
				}
			}
		}
	}
}
 */
function Get_an_regressionLine(idRegressionLine) {}
/**
 * @implements Method: POST
 * @implements Route: /project/well/update-well-header
 * @implements Note: params: 2 trường hợp: 1. Update theo idWellHeader (idWellHeader: num,value: value)2. Update theo header value (header: string, value: string). sample: header which updated or created
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function update_one_well_header() {}
/**
 * @param {Number} idZoneSet
 * @implements Method: POST
 * @implements Route: /project/well/zone-set/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_Zone_Set(idZoneSet) {}
/**
 * @param {Integer} idWell
 * @implements Method: POST
 * @implements Route: /project/well/zone-set/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function List_Zone_Set(idWell) {}
/**
 * @param {Integer} idWell
 * @param {String} name
 * @implements Method: POST
 * @implements Route: /project/well/zone-set/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Tạo_Zone_Set(idWell, name) {}
/**
 * @param {Integer} idZone
 * @implements Method: DELETE
 * @implements Route: /project/well/zone-set/zone/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"0" : "p", 
	"1" : "a", 
	"2" : "t", 
	"3" : "t", 
	"4" : "e", 
	"5" : "r", 
	"6" : "n", 
	"7" : ":", 
	"8" : " ", 
	"9" : "{"
}
 */
function Xóa_Zone(idZone) {}
/**
 * @param {Integer} idZone
 * @param {String(*)} name
 * @param {Boolean(*)} showName
 * @param {Number(*)} startDepth
 * @param {Number(*)} endDepth
 * @param {Object(*)} fill
 * @implements Method: POST
 * @implements Route: /project/well/zone-set/zone/edit
 * @implements Note: (*) can be null
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Sửa_Zone(idZone, name, showName, startDepth, endDepth, fill) {}
/**
 * @param {Integer} idZone
 * @implements Method: POST
 * @implements Route: /project/well/zone-set/zone/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Info_Zone(idZone) {}
/**
 * @param {Integer} idZone
 * @param {String(*)} name
 * @param {Boolean(*)} showName
 * @param {Number(*)} startDepth
 * @param {Number(*)} endDepth
 * @param {Object(*)} fill
 * @implements Method: POST
 * @implements Route: /project/well/zone-set/zone/new
 * @implements Note: (*) can be null.
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Tạo_Zone(idZone, name, showName, startDepth, endDepth, fill) {}
/**
 * @param {Number} idWell
 * @param {String} name
 * @param {String} datasetKey
 * @param {String} datasetLabel
 * @implements Method: POST
 * @implements Route: /prooject/well/dataset/new
 * @implements Note: 
 * @example Example Payload: 
{
	"idWell" : 1, 
	"name" : "dataset-test", 
	"datasetKey" : "Key-test", 
	"datasetLabel" : "Label-test"
}
 * @example Example Response: 
{
}
 */
function Tạo_Dataset(idWell, name, datasetKey, datasetLabel) {}
/**
 * @param {String} username
 * @param {String} password
 * @implements Method: POST
 * @implements Route: /register
 * @implements Note: password is Encrypted
 * @example Example Payload: 
{
	"username" : "mothi", 
	"password" : "123456"
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Success", 
	"content" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxhbiIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNTA0MDg2NjExLCJleHAiOjE1MDQwOTAyMTF9.3GpOnXm8_i6fl_jq4rjrX1VlUtbZoNOAM32QdbPwGas"
}
 */
function Register(username, password) {}
/**
 * @implements Method: POST
 * @implements Route: /ternary/list-template
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_ternary_template() {}
/**
 * @param {String} fileName
 * @implements Method: POST
 * @implements Route: /ternary/remove-template
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function remove_ternay_template(fileName) {}
/**
 * @param {String} fileName
 * @param {array} content
 * @implements Method: POST
 * @implements Route: /ternary/save-template
 * @implements Note: content: Array of Objects
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"fileName" : "test_1", 
	"content" : {
		"0" : {
			"x" : 1212, 
			"y" : 1321
 }, 
		"1" : {
			"x" : 3133, 
			"y" : 1311
		}
	}
}
 */
function save_ternary_template(fileName, content) {}
/**
 * @param {} idWorkflow
 * @implements Method: DELETE
 * @implements Route: /workflow/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_workflow(idWorkflow) {}
/**
 * @implements Method: POST
 * @implements Route: /workflow/edit
 * @implements Note: 
 * @example Example Payload: 
{
	"content" : {
		"a" : 1, 
		"b" : 2, 
		"c" : 3
 }, 
	"idWorkflow" : 1, 
	"name" : "Test", 
	"idWorkflowSpec" : 6
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"content" : {
			"a" : 1, 
			"b" : 2, 
			"c" : 3
 }, 
		"idWorkflow" : 1, 
		"name" : "Test", 
		"description" : {
		}, 
		"createdAt" : "2018-02-23T04:08:36.000Z", 
		"updatedAt" : "2018-02-23T04:09:32.000Z", 
		"idWorkflowSpec" : 6
	}
}
 */
function edit_workflow() {}
/**
 * @param {} idWorkflow
 * @implements Method: POST
 * @implements Route: /workflow/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info_workflow(idWorkflow) {}
/**
 * @implements Method: POST
 * @implements Route: /workflow/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_workflow() {}
/**
 * @param {} name
 * @param {JSON/JSON_String} content
 * @param {} idWorkflowSpec
 * @implements Method: POST
 * @implements Route: /workflow/new
 * @implements Note: 
 * @example Example Payload: 
{
	"name" : "Test", 
	"content" : {
		"a" : 1, 
		"b" : 2
 }, 
	"idWorkflowSpec" : 7
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"content" : {
			"a" : 1, 
			"b" : 2
 }, 
		"idWorkflow" : 1, 
		"name" : "Test", 
		"idWorkflowSpec" : 7, 
		"updatedAt" : "2018-02-23T04:08:36.037Z", 
		"createdAt" : "2018-02-23T04:08:36.037Z"
	}
}
 */
function create_new_workflow(name, content, idWorkflowSpec) {}
/**
 * @param {} idWorflowSpec
 * @implements Method: DELETE
 * @implements Route: /workflow-spec/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_workflow_spec(idWorflowSpec) {}
/**
 * @param {JSON/JSON_String} content
 * @implements Method: POST
 * @implements Route: /workflow-spec/edit
 * @implements Note: 
 * @example Example Payload: 
{
	"content" : {
		"a" : 123, 
		"b" : 456, 
		"c" : 456
 }, 
	"idWorkflowSpec" : 7, 
	"name" : "test", 
	"description" : {
	}
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"content" : {
			"a" : 123, 
			"b" : 456, 
			"c" : 456
 }, 
		"idWorkflowSpec" : 7, 
		"name" : "test", 
		"description" : {
		}, 
		"createdAt" : "2018-02-23T04:00:21.000Z", 
		"updatedAt" : "2018-02-23T04:03:55.000Z"
	}
}
 */
function edit_workflow_spec(content) {}
/**
 * @param {} idWorkflowSpec
 * @implements Method: POST
 * @implements Route: /workflow-spec/info
 * @implements Note: 
 * @example Example Payload: 
{
	"idWorkflowSpec" : 7
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"content" : {
			"a" : 123, 
			"b" : 456
 }, 
		"idWorkflowSpec" : 7, 
		"name" : "test", 
		"description" : {
		}, 
		"createdAt" : "2018-02-23T04:00:21.000Z", 
		"updatedAt" : "2018-02-23T04:00:21.000Z", 
		"workflows" : {
		}
	}
}
 */
function info_workflow_spec(idWorkflowSpec) {}
/**
 * @implements Method: POST
 * @implements Route: /workflow-spec/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_workflow_spec() {}
/**
 * @param {} name
 * @param {JSON/JSON_String} content
 * @implements Method: POST
 * @implements Route: /workflow-spec/new
 * @implements Note: 
 * @example Example Payload: 
{
	"name" : "test", 
	"content" : {
		"a" : 123, 
		"b" : 456
	}
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"content" : {
			"a" : 123, 
			"b" : 456
 }, 
		"idWorkflowSpec" : 4, 
		"name" : "test", 
		"updatedAt" : "2018-02-23T03:53:04.491Z", 
		"createdAt" : "2018-02-23T03:53:04.491Z"
	}
}
 */
function create_new_workflow_spec(name, content) {}
/**
 * @param {String} teamplate
 * @implements Method: POST
 * @implements Route: /zone-template/all
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_zone_by_zone_template(teamplate) {}
/**
 * @param {} idZoneTemplate
 * @implements Method: POST
 * @implements Route: /zone-template/delete
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_zone_teamplate(idZoneTemplate) {}
/**
 * @implements Method: POST
 * @implements Route: /zone-template/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_a_zone_template() {}
/**
 * @implements Method: POST
 * @implements Route: /zone-template/export
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function export_zone_template() {}
/**
 * @implements Method: POST
 * @implements Route: /zone-template/import
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function import_zone_template() {}
/**
 * @implements Method: POST
 * @implements Route: /zone-template/list
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function list_all_zone_template() {}
/**
 * @param {temp_ex_1} template
 * @param {zone_ex_1} name
 * @param {green} background
 * @param {white} foreground
 * @param {basement} pattern
 * @implements Method: POST
 * @implements Route: /zone-template/new
 * @implements Note: Yêu cầu phải có các zone con mới cho tạo zone template
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function Create_new_zone(template, name, background, foreground, pattern) {}
/**
 * @param {1} idCrossPlot
 * @implements Method: POST
 * @implements Route: nhu tren
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new ternary success", 
	"content" : {
		"xValue" : 0, 
		"yValue" : 0, 
		"name" : "", 
		"style" : "Circle", 
		"usedIn" : "false", 
		"show" : "true", 
		"idTernary" : 1, 
		"idCrossPlot" : 1, 
		"updatedAt" : "2017-10-06T10:34:03.298Z", 
		"createdAt" : "2017-10-06T10:34:03.298Z"
	}
}
 */
function Create_ternary(idCrossPlot) {}
/**
 * @param {} idUserDefineLine
 * @implements Method: DELETE
 * @implements Route: project/cross-plot/user-define-line/delete
 * @implements Note: info of deleted line
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_userdefine_line(idUserDefineLine) {}
/**
 * @param {Integer} idUserDefineLine
 * @param {String} functions
 * @param {String} lineStyle
 * @param {Boolean} displayLine
 * @param {Boolean} displayEquation
 * @param {Integer} idCrossPlot
 * @implements Method: POST
 * @implements Route: project/cross-plot/user-define-line/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_user_define_line(idUserDefineLine, functions, lineStyle, displayLine, displayEquation, idCrossPlot) {}
/**
 * @param {} idUserDefineLine
 * @implements Method: POST
 * @implements Route: project/cross-plot/user-define-line/info
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"idUserDefineLine" : 7, 
		"function" : "day la function", 
		"lineStyle" : "day la line style", 
		"displayLine" : "true", 
		"displayEquation" : "true", 
		"createdAt" : "2017-09-15T07:32:41.000Z", 
		"updatedAt" : "2017-09-15T07:32:41.000Z", 
		"idCrossPlot" : 1
	}
}
 */
function Info_user_define_line(idUserDefineLine) {}
/**
 * @param {String} functions
 * @param {String} lineStyle
 * @param {Boolean} displayLine
 * @param {Boolean} displayEquation
 * @param {Integer} idCrossPlot
 * @implements Method: POST
 * @implements Route: project/cross-plot/user-define-line/new
 * @implements Note: 
 * @example Example Payload: 
{
	"functions" : "day la function", 
	"lineStyle" : "day la line style", 
	"displayLine" : "true", 
	"displayEquation" : "true", 
	"idCrossPlot" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Create new user define line successfull", 
	"content" : {
		"idUserDefineLine" : 7, 
		"function" : "day la function", 
		"lineStyle" : "day la line style", 
		"displayLine" : "true", 
		"displayEquation" : "true", 
		"createdAt" : "2017-09-15T07:32:41.000Z", 
		"updatedAt" : "2017-09-15T07:32:41.000Z", 
		"idCrossPlot" : 1
	}
}
 */
function Create_new_user_define_line(functions, lineStyle, displayLine, displayEquation, idCrossPlot) {}
/**
 * @param {} idCrossPlot
 * @implements Method: POST
 * @implements Route: 
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function List_Ternary_by_crosspot_id(idCrossPlot) {}
/**
 * @implements Method: DELETE
 * @implements Route: 
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function delete_ternary() {}
/**
 * @implements Method: POST
 * @implements Route: 
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_ternary() {}
/**
 * @implements Method: POST
 * @implements Route: 
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function info() {}