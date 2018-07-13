/**
 * @fileoverview Module
 */
/**
 * @module wi-online
 */
/**
 * @param {String} model_id
 * @param {object}params
 * @param {int} params.n_rows
 * @param {int} params.n_cols
 * @param {double} params.learning_rate
 * @param {double} params.decay_rate
 * @param {String} params.neighborhood
 * @param {double} params.sigma
 * @param {double} params.sigma_decay_rate
 * @param {String} params.weights_initialization
 * @param {int} params.num_iteration
 * @param {int} params.epoch_size
 * @param {object}train
 * @param {2D_array} train.data
 * @param {1D_array} train.target
 * @implements Method: POST
 * @implements Route: /api/v1.0/lvq/train
 * @implements Note: neighborhood = 'bubble'||'gaussian'||'None'.  
weights_initialization = 'random'||'sample'||'pca'
 * @example Example Payload: 
{
	"model_id" : "model-1", 
	"params" : {
		"n_rows" : 9, 
		"n_cols" : 9, 
		"learning_rate" : 0.5, 
		"decay_rate" : 1, 
		"neighborhood" : "bubble", 
		"sigma" : 2, 
		"sigma_decay_rate" : 1, 
		"weights_initialization" : "random", 
		"num_iteration" : 10000, 
		"epoch_size" : 4000
 }, 
	"train" : {
		"data" : {
			"0" : {
				"0" : 1, 
				"1" : 2, 
				"2" : 3
 }, 
			"1" : {
				"0" : 2, 
				"1" : 3, 
				"2" : 4
 }
 }, 
		"target" : {
			"0" : 1, 
			"1" : 2, 
			"2" : 3
		}
	}
}
 * @example Example Response: 
{
}
 */
function Creating_and_training_the_SOM_model(model_id, params, train) {}
/**
 * @param {String} model_id
 * @param {2D_array} data
 * @implements Method: POST
 * @implements Route: /api/v1.0/lvq/predict
 * @implements Note: 
 * @example Example Payload: 
{
	"model_id" : "model-1", 
	"data" : {
		"0" : {
			"0" : 1, 
			"1" : 2, 
			"2" : 3
 }, 
		"1" : {
			"0" : 2, 
			"1" : 3, 
			"2" : 4
		}
	}
}
 * @example Example Response: 
{
}
 */
function Predicting_the_result_using_trained_model(model_id, data) {}