/**
 * @fileoverview Module
 */
/**
 * @module wi-online
 */
/**
 * @param {} idUser
 * @param {} password
 * @implements Method: POST
 * @implements Route: /login
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"success" : "", 
	"token" : ""
}
 */
function login(idUser, password) {}
/**
 * @param {} token
 * @param {} file
 * @param {} override
 * @implements Method: POST
 * @implements Route: /upload/lases
 * @implements Note: override = true: override existing well if duplicate well
override = null: create new well if duplicate well
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "UPLOAD FILES SUCCESS", 
	"content" : {
		"0" : {
			"idWell" : 3, 
			"start" : "1146.0480", 
			"stop" : "2108.3016", 
			"step" : "0.1524", 
			"name" : "02/97-DD-1X", 
			"username" : "admin", 
			"updatedAt" : "2017-11-29T09:02:49.121Z", 
			"createdAt" : "2017-11-29T09:02:49.121Z"
		}
	}
}
 */
function upload_las_files(token, file, override) {}
/**
 * @param {} token
 * @implements Method: POST
 * @implements Route: /user/info
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : ""
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "GET USER INFOR SUCCESS", 
	"content" : {
		"username" : "admin", 
		"password" : "c4ca4238a0b923820dcc509a6f75849b", 
		"islogin" : "false", 
		"role" : 1, 
		"createdAt" : "2017-11-29T08:02:13.000Z", 
		"updatedAt" : "2017-11-29T08:02:13.000Z"
	}
}
 */
function get_user_info(token) {}
/**
 * @implements Method: POST
 * @implements Route: /user/well/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_new_well() {}
/**
 * @param {} token
 * @param {} idWell
 * @implements Method: POST
 * @implements Route: /user/well/info
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idWell" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY GET WELL INFOR", 
	"content" : {
		"idWell" : 4, 
		"name" : "02/97-DD-2X", 
		"start" : 1119.835, 
		"stop" : 2184.806, 
		"step" : 0.1524, 
		"UWI" : {
		}, 
		"API" : {
		}, 
		"createdAt" : "2017-11-29T08:10:22.000Z", 
		"updatedAt" : "2017-11-29T08:10:22.000Z", 
		"username" : "admin"
	}
}
 */
function get_well_info(token, idWell) {}
/**
 * @implements Method: POST
 * @implements Route: /user/well/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_an_existing_well() {}
/**
 * @param {} token
 * @param {} idWell
 * @implements Method: POST
 * @implements Route: /user/well/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idWell" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY DELETE WELL", 
	"content" : {
		"idWell" : 2, 
		"name" : "02_97-DD-1X", 
		"start" : 1146.048, 
		"stop" : 2108.3016, 
		"step" : 0.1524, 
		"UWI" : {
		}, 
		"API" : {
		}, 
		"createdAt" : "2017-11-29T08:57:52.000Z", 
		"updatedAt" : "2017-11-29T08:57:52.000Z", 
		"username" : "admin"
	}
}
 */
function delete_the_well(token, idWell) {}
/**
 * @param {} token
 * @param {} idWell
 * @param {} file
 * @implements Method: POST
 * @implements Route: /user/well/addDatasets
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY ADD DATASETS", 
	"content" : {
		"0" : {
			"idWell" : 1, 
			"name" : "02/97-DD-1X", 
			"start" : 1146.048, 
			"stop" : 2108.3016, 
			"step" : 0.1524, 
			"UWI" : {
			}, 
			"API" : {
			}, 
			"createdAt" : "2017-11-29T09:14:50.000Z", 
			"updatedAt" : "2017-11-29T09:14:50.000Z", 
			"username" : "admin"
		}
	}
}
 */
function upload_files_and_import_dataset_into_existing_well(token, idWell, file) {}
/**
 * @param {} token
 * @param {} datasets
 * @param {} idWell
 * @implements Method: POST
 * @implements Route: /user/well/copyDatasets
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idWell" : 2, 
	"datasets" : {
		"0" : {
			"idDataset" : 1, 
			"name" : "02/97-DD-1X", 
			"numberOfSample" : 0, 
			"unit" : "M", 
			"top" : 0, 
			"bottom" : 0, 
			"step" : 0, 
			"createdAt" : "2017-11-29T09:14:50.000Z", 
			"updatedAt" : "2017-11-29T09:14:50.000Z", 
			"idWell" : 1
		}
	}
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY COPY DATASETS", 
	"content" : {
		"0" : {
			"idDataset" : 3, 
			"name" : "SNS_5AP", 
			"numberOfSample" : 0, 
			"unit" : "M", 
			"top" : 0, 
			"bottom" : 0, 
			"step" : 0, 
			"idWell" : 2, 
			"updatedAt" : "2017-11-29T07:18:08.124Z", 
			"createdAt" : "2017-11-29T07:18:08.124Z"
		}
	}
}
 */
function copy_datasets_from_a_well_to_another(token, datasets, idWell) {}
/**
 * @param {object}idWells
 * @implements Method: POST
 * @implements Route: /user/well/exportHeader
 * @implements Note: 
 * @example Example Payload: 
{
	"idWells" : {
		"0" : 1, 
		"1" : 2, 
		"2" : 3
	}
}
 * @example Example Response: 
{
}
 */
function empty_array_for_all_wells(idWells) {}
/**
 * @param {} token
 * @implements Method: POST
 * @implements Route: /user/wells
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : ""
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY GET WELLS", 
	"content" : {
		"0" : {
			"idWell" : 1, 
			"name" : "02/97-DD-1X", 
			"start" : 1146.048, 
			"stop" : 2108.3016, 
			"step" : 0.1524, 
			"UWI" : {
			}, 
			"API" : {
			}, 
			"createdAt" : "2017-11-29T09:14:50.000Z", 
			"updatedAt" : "2017-11-29T09:14:50.000Z", 
			"username" : "admin"
		}
	}
}
 */
function get_wells_of_the_user(token) {}
/**
 * @implements Method: POST
 * @implements Route: /user/well/dataset/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_new_dataset() {}
/**
 * @param {} token
 * @param {} idDataset
 * @implements Method: POST
 * @implements Route: /user/well/dataset/info
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idDataset" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY GET DATASET INFO", 
	"content" : {
		"idDataset" : 1, 
		"name" : "02/97-DD-1X", 
		"numberOfSample" : 0, 
		"unit" : "M", 
		"top" : 0, 
		"bottom" : 0, 
		"step" : 0, 
		"createdAt" : "2017-11-29T09:14:50.000Z", 
		"updatedAt" : "2017-11-29T09:14:50.000Z", 
		"idWell" : 1
	}
}
 */
function get_the_dataset_infomation(token, idDataset) {}
/**
 * @implements Method: POST
 * @implements Route: /user/well/dataset/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_an_existing_dataset() {}
/**
 * @param {} token
 * @param {} idDataset
 * @implements Method: POST
 * @implements Route: /user/well/dataset/detete
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idDataset" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "DATASET DELETED", 
	"content" : {
		"idDataset" : 1, 
		"name" : "02/97-DD-1X", 
		"numberOfSample" : 0, 
		"unit" : "M", 
		"top" : 0, 
		"bottom" : 0, 
		"step" : 0, 
		"createdAt" : "2017-11-29T09:14:50.000Z", 
		"updatedAt" : "2017-11-29T09:14:50.000Z", 
		"idWell" : 1
	}
}
 */
function delete_the_dataset(token, idDataset) {}
/**
 * @param {} token
 * @param {} idWell
 * @implements Method: POST
 * @implements Route: /user/well/datasets
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idWell" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY GET DATASTES", 
	"content" : {
		"0" : {
			"idDataset" : 2, 
			"name" : "02_97-DD-1X", 
			"numberOfSample" : 0, 
			"unit" : "M", 
			"top" : 0, 
			"bottom" : 0, 
			"step" : 0, 
			"createdAt" : "2017-11-29T09:14:50.000Z", 
			"updatedAt" : "2017-11-29T09:14:50.000Z", 
			"idWell" : 2
		}
	}
}
 */
function get_datasets_of_the_well(token, idWell) {}
/**
 * @implements Method: POST
 * @implements Route: /user/well/dataset/curve/new
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function create_a_new_curve() {}
/**
 * @param {} token
 * @param {} idCurve
 * @implements Method: POST
 * @implements Route: /user/well/dataset/curve/info
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idCurve" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY GET CURVE INFOR", 
	"content" : {
		"idCurve" : 20, 
		"name" : "HCAL", 
		"path" : "60cee3a0/69a2ca11/2ee7288e/c2b47e18/HCAL.txt", 
		"unit" : "IN", 
		"startDepth" : 0, 
		"stopDepth" : 0, 
		"step" : 0, 
		"createdAt" : "2017-11-29T09:14:50.000Z", 
		"updatedAt" : "2017-11-29T09:14:50.000Z", 
		"idDataset" : 2
	}
}
 */
function get_curve_info(token, idCurve) {}
/**
 * @param {} token
 * @param {} idCurve
 * @param {} unit
 * @implements Method: POST
 * @implements Route: /user/well/dataset/curve/data
 * @implements Note: response is a stream of data
 * @example Example Payload: 
{
	"token" : "", 
	"idCurve" : 1, 
	"unit" : "M"
}
 * @example Example Response: 
{
}
 */
function get_curve_data(token, idCurve, unit) {}
/**
 * @implements Method: POST
 * @implements Route: /user/well/dataset/curve/edit
 * @implements Note: 
 * @example Example Payload: 
{
}
 * @example Example Response: 
{
}
 */
function edit_curve() {}
/**
 * @param {} token
 * @param {} idCurve
 * @implements Method: POST
 * @implements Route: /user/well/dataset/curve/delete
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idCurve" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY DELETE CURVE", 
	"content" : {
		"idCurve" : 30, 
		"name" : "TNPH", 
		"path" : "b5d800ec/83e2f376/24529d36/7386b1ca/TNPH.txt", 
		"unit" : "V/V", 
		"startDepth" : 0, 
		"stopDepth" : 0, 
		"step" : 0, 
		"createdAt" : "2017-11-29T09:14:50.000Z", 
		"updatedAt" : "2017-11-29T09:14:50.000Z", 
		"idDataset" : 2
	}
}
 */
function delete_curve(token, idCurve) {}
/**
 * @param {} token
 * @param {} idDataset
 * @implements Method: POST
 * @implements Route: /user/well/dataset/curves
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "", 
	"idDataset" : 1
}
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "SUCCESSFULLY GET CURVES", 
	"content" : {
		"0" : {
			"idCurve" : 16, 
			"name" : "DTCO3", 
			"path" : "f318aad2/674942ad/0450c0e7/8a59b240/DTCO3.txt", 
			"unit" : "US/F", 
			"startDepth" : 0, 
			"stopDepth" : 0, 
			"step" : 0, 
			"createdAt" : "2017-11-29T09:14:50.000Z", 
			"updatedAt" : "2017-11-29T09:14:50.000Z", 
			"idDataset" : 2
		}
	}
}
 */
function get_curves_of_the_dataset(token, idDataset) {}
/**
 * @param {} token
 * @param {} idObjs
 * @implements Method: POST
 * @implements Route: /export/las2
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "aaa", 
	"idObjs" : {
		"0" : {
			"idWell" : 2, 
			"datasets" : {
				"0" : {
					"idDataset" : 2, 
					"idCurves" : {
						"0" : 1, 
						"1" : 2
					}
				}
			}
		}
	}
}
 * @example Example Response: 
{
	"datasetName" : "W40", 
	"wellName" : "W4", 
	"path" : "exportsthuy4W40_W4_1522655496979.las", 
	"fileName" : "W40_W4_1522655496979.las"
}
 */
function export_well_to_las_2_file(token, idObjs) {}
/**
 * @param {} token
 * @param {} idObjs
 * @implements Method: POST
 * @implements Route: /export/las3
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "aaa", 
	"idObjs" : {
		"0" : {
			"idWell" : 2, 
			"datasets" : {
				"0" : {
					"idDataset" : 2, 
					"idCurves" : {
						"0" : 1, 
						"1" : 2
					}
				}
			}
		}
	}
}
 * @example Example Response: 
{
	"wellName" : "W4", 
	"path" : "exportsthuy4W40_W4_1522655496979.las", 
	"fileName" : "W40_W4_1522655496979.las"
}
 */
function export_well_to_las_3_file(token, idObjs) {}
/**
 * @param {} token
 * @param {} name
 * @param {} idProject
 * @implements Method: POST
 * @implements Route: import/project/well
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "aaa", 
	"name" : "W4", 
	"idProject" : 1
}
 * @example Example Response: 
{
	"createdAt" : "2018-07-06T02:26:56.000Z", 
	"filename" : "W4", 
	"idWell" : 357, 
	"name" : "W4", 
	"updatedAt" : "2018-07-06T02:26:56.000Z", 
	"username" : "thuy"
}
 */
function import_a_well_from_project_to_inventory(token, name, idProject) {}
/**
 * @param {} token
 * @param {} datasets
 * @implements Method: POST
 * @implements Route: import/project/dataset
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "aaa", 
	"datasets" : {
		"0" : {
			"idDataset" : 1, 
			"idDesWell" : 357, 
			"name" : "W40", 
			"idWell" : 1
		}
	}
}
 * @example Example Response: 
{
	"bottom" : "2184.8064", 
	"createdAt" : "2018-07-06T02:26:56.000Z", 
	"idDataset" : 454, 
	"idWell" : 357, 
	"name" : "W40", 
	"numberOfSample" : 0, 
	"step" : "0.1524", 
	"top" : "1119.8352", 
	"unit" : "M", 
	"updatedAt" : "2018-07-06T02:26:56.000Z"
}
 */
function import_a_dataset_from_project_to_inventory(token, datasets) {}
/**
 * @param {} token
 * @param {} curves
 * @implements Method: POST
 * @implements Route: import/project/well
 * @implements Note: 
 * @example Example Payload: 
{
	"token" : "aaa", 
	"curves" : {
		"0" : {
			"idCurve" : 1, 
			"name" : "DTCO3", 
			"wellName" : "W4", 
			"datasetName" : "W4", 
			"idProject" : 1
		}
	}
}
 * @example Example Response: 
{
	"createdAt" : "2018-07-05T10:48:13.000Z", 
	"idCurve" : 213, 
	"idDataset" : 67, 
	"name" : "ECGR", 
	"updatedAt" : "2018-07-05T10:48:13.000Z"
}
 */
function import_a_curve_from_project_to_inventory(token, curves) {}