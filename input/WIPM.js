/**
 * @fileoverview Module
 */
/**
 * @module WIPM
 */
/**
 * @param {string} model_id
 * @param {string} model_type
 * @param {object} params
 * @param {object} train
 * @implements Method: POST
 * @implements Route: /wipm/regression/model
 * @implements Note: Nêu thành công: status = 200
Nếu lỗi: status = 400, mesage chứa message của exception
Với neural network thay vì trả về loss sẽ trả về object error_path gồm 2 mảng validation_errors và train_error
 * @example Example Payload: 
{
	"model_id" : "reg", 
	"model_type" : "NeuralNetwork", 
	"params" : {
		"hidden_layer_sizes" : {
			"0" : 10, 
			"1" : 10, 
			"2" : 10
 }, 
		"solver" : "lbfgs", 
		"max_iter" : 1000
 }, 
	"train" : {
		"data" : {
			"0" : {
				"0" : 1.2, 
				"1" : 2.3, 
				"2" : 3
 }, 
			"1" : {
				"0" : 2.6, 
				"1" : 0.7, 
				"2" : 1.3
 }
 }, 
		"target" : {
			"0" : 1.5, 
			"1" : 0.7, 
			"2" : 3.6
		}
	}
}
 * @example Example Response: 
{
	"message" : "success", 
	"status" : 200, 
	"loss" : 2.333
}
 */
function Tạo_model_hồi_quy(model_id, model_type, params, train) {}
/**
 * @param {string} model_id
 * @param {array} data
 * @implements Method: POST
 * @implements Route: /wipm/regression/predict
 * @implements Note: Nêu thành công: status = 200
Nếu lỗi: status = 400, mesage chứa message của exception
data: array of double array
 * @example Example Payload: 
{
	"model_id" : "preg", 
	"data" : {
		"0" : {
			"0" : 1.2, 
			"1" : 2.3, 
			"2" : 3
 }, 
		"1" : {
			"0" : 2.6, 
			"1" : 0.7, 
			"2" : 1.3
		}
	}
}
 * @example Example Response: 
{
	"message" : "success", 
	"status" : 200, 
	"target" : {
		"0" : 1.25, 
		"1" : 3.2, 
		"2" : 0.21
	}
}
 */
function Predict_bằng_model_hồi_quy(model_id, data) {}
/**
 * @param {string} model_id
 * @param {string} model_type
 * @param {object} params
 * @param {object} train
 * @implements Method: POST
 * @implements Route: /wipm/classification/model
 * @implements Note: Nêu thành công: status = 200
Nếu lỗi: status = 400, mesage chứa message của exception
Với neural network thay vì trả về loss sẽ trả về object error_path gồm 2 mảng validation_errors và train_error
 * @example Example Payload: 
{
	"model_id" : "clf", 
	"model_type" : "KNN", 
	"params" : {
		"num_neighbors" : 20, 
		"p" : 1
 }, 
	"train" : {
		"data" : {
			"0" : {
				"0" : 1.2, 
				"1" : 2.3, 
				"2" : 3
 }, 
			"1" : {
				"0" : 2.6, 
				"1" : 0.7, 
				"2" : 1.3
 }
 }, 
		"target" : {
			"0" : 1, 
			"1" : 0, 
			"2" : 0
		}
	}
}
 * @example Example Response: 
{
	"message" : "success", 
	"status" : 200, 
	"loss" : 2.333
}
 */
function Tạo_model_phân_loại(model_id, model_type, params, train) {}
/**
 * @param {string} model_id
 * @param {array} data
 * @implements Method: POST
 * @implements Route: /wipm/classification/predict
 * @implements Note: Nêu thành công: status = 200
Nếu lỗi: status = 400, mesage chứa message của exception
data: array of double array
 * @example Example Payload: 
{
	"model_id" : "pclf", 
	"data" : {
		"0" : {
			"0" : 1.2, 
			"1" : 2.3, 
			"2" : 3
 }, 
		"1" : {
			"0" : 2.6, 
			"1" : 0.7, 
			"2" : 1.3
		}
	}
}
 * @example Example Response: 
{
	"message" : "success", 
	"status" : 200, 
	"target" : {
		"0" : 1.25, 
		"1" : 3.2, 
		"2" : 0.21
	}
}
 */
function Predict_bằng_model_phân_loại(model_id, data) {}
/**
 * @param {string} model_id
 * @param {string} model_type
 * @param {object} params
 * @param {object} train
 * @implements Method: POST
 * @implements Route: /wipm/crp/model
 * @implements Note: Nêu thành công: status = 200
Nếu lỗi: status = 400, mesage chứa message của exception
 * @example Example Payload: 
{
	"model_id" : "crp", 
	"params" : {
		"dim" : 1, 
		"tau" : 2
 }, 
	"train" : {
		"well" : {
			"0" : "well1", 
			"1" : "well2", 
			"2" : "well3"
 }, 
		"data" : {
			"0" : {
				"0" : 2.1, 
				"1" : 2.5, 
				"2" : 3.1
 }, 
			"1" : {
				"0" : 5.3, 
				"1" : 0.1, 
				"2" : 2.3
 }
 }, 
		"target" : {
			"0" : 1, 
			"1" : 0, 
			"2" : 1
		}
	}
}
 * @example Example Response: 
{
	"message" : "success", 
	"status" : 200
}
 */
function Tạo_model_bằng_phương_pháp_crp(model_id, model_type, params, train) {}
/**
 * @param {string} model_id
 * @param {array} data
 * @implements Method: POST
 * @implements Route: /wipm/crp/predict
 * @implements Note: Nêu thành công: status = 200
Nếu lỗi: status = 400, mesage chứa message của exception
data: array of double array
 * @example Example Payload: 
{
	"model_id" : "pcrp", 
	"data" : {
		"0" : {
			"0" : 2.1, 
			"1" : 2.5, 
			"2" : 3.1
 }, 
		"1" : {
			"0" : 5.3, 
			"1" : 0.1, 
			"2" : 2.3
		}
	}
}
 * @example Example Response: 
{
	"message" : "success", 
	"status" : 200, 
	"target" : {
		"0" : 1.25, 
		"1" : 3.2, 
		"2" : 0.21
	}
}
 */
function Predict_bằng_phương_pháp_crp(model_id, data) {}
/**
 * @param {string} model_type
 * @param {array} data
 * @implements Method: POST
 * @implements Route: /wipm/anfis/predict
 * @implements Note: Nêu thành công: status = 200
Nếu lỗi: status = 400, mesage chứa message của exception
Số hàng trong data bắt buộc là 6
data: array of double array
 * @example Example Payload: 
{
	"model_type" : "DecisionTree", 
	"data" : {
		"0" : {
			"0" : 1, 
			"1" : 2
 }, 
		"1" : {
			"0" : 1, 
			"1" : 2
 }, 
		"2" : {
			"0" : 1, 
			"1" : 2
 }, 
		"3" : {
			"0" : 1, 
			"1" : 2
 }, 
		"4" : {
			"0" : 1, 
			"1" : 2
 }, 
		"5" : {
			"0" : 1, 
			"1" : 2
		}
	}
}
 * @example Example Response: 
{
	"message" : "success", 
	"status" : 200, 
	"target" : {
		"0" : 1.25, 
		"1" : 3.2
	}
}
 */
function Predict_bằng_model_ANFIS(model_type, data) {}