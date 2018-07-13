/**
 * @fileoverview Module
 */
/**
 * @module API_Authenticate
 */
/**
 * @param {String} username
 * @param {String} password
 * @param {String} fullname
 * @param {String} email
 * @param {String} captcha
 * @implements Method: POST
 * @implements Route: /register
 * @implements Note: 
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Success", 
	"content" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhYSIsInBhc3N3b3JkIjoiODI3Y2NiMGVlYThhNzA2YzRjMzRhMTY4OTFmODRlN2IiLCJlbWFpbCI6ImFAZ21haWwuY29tIiwiZnVsbG5hbWUiOiJCdWkgRGFuZyBIb2FuZyIsImNhcHRjaGEiOiI1NDg3OCIsImlhdCI6MTUxMjQ1ODE4NywiZXhwIjoxNTEyNDYxNzg3fQ.Bw6JffRqea8O6AB5H_2wlf1dyU0SjqdHKxs4COcN9zU"
}
 * @example Example Error Response: 
{
	"code" : 401, 
	"reason" : "WRONG_CAPTCHA || USER_EXISTED", 
	"content" : {
	}
}
 */
function Register(username, password, fullname, email, captcha) {}
/**
 * @param {String} username
 * @param {String} password
 * @implements Method: POST
 * @implements Route: /login
 * @implements Note: Content là jwt token sẽ hết hạn trong sau 24h, mọi request đến main service đều yêu cầu kèm token này, nếu không main service sẽ response 401 not authenticate.
jwt token có thể thêm vào request header (Authorization: token), hoặc body (token: token) với post method hoặc (/link?token=token) với get method. Hiện tại đang dùng với cách 1.
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successful", 
	"content" : {
		"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoYW5obmsiLCJwYXNzd29yZCI6ImM0Y2E0MjM4YTBiOTIzODIwZGNjNTA5YTZmNzU4NDliIiwiY2FwdGNoYSI6IjE1ODIwIiwicmVmcmVzaF90b2tlbiI6Ik5WR3lNbmtacmtNMXpyWnBLcGtvcG1YRTlXaGFiOEV1cnozMFRHZjRPdm9DZnVRcEx2N0JGeVdKMWpQT01SM2UiLCJpYXQiOjE1MTU0MDAwODcsImV4cCI6MTUxNTU3Mjg4N30.t1xaS85UpmTib1fC9-0Akhf2E04-hoXq6S8LPovcJ6c", 
		"refresh_token" : "B2ANMtlTdLcFOwYKRLnQJUCXmU7PhUkys3LsGu2A2NWjqUakpo2fJdgJRdNob1Zl"
	}
}
 * @example Example Error Response: 
{
	"reason" : "USER_NOT_EXISTS || WRONG_PASSWORD"
}
 */
function Login(username, password) {}
/**
 * @param {String} refresh_token
 * @implements Method: POST
 * @implements Route: /refresh-token
 * @implements Note: 
 * @example Example Response: 
{
	"code" : 200, 
	"reason" : "Successfull", 
	"content" : {
		"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoYW5obmsiLCJpYXQiOjE1MTU0MDAxMTksImV4cCI6MTUxNTQ4NjUxOX0.LHKEOdA8vwlDoj67of43YzOHSFbvFtOJbYcTfnK9E9s", 
		"refresh_token" : "fjABNZKXapu8DZcit3cQUrC17I66TdqJrbM76msYmABPdNwqTjQ3RJRcrjoGKrpb"
	}
}
 * @example Example Error Response: 
{
}
 */
function refresh_token(refresh_token) {}
/**
 * @param {} name
 * @param {} description
 * @param {String} location
 * @implements Method: POST
 * @implements Route: /company/new
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function create_company(name, description, location) {}
/**
 * @param {} idCompany
 * @implements Method: POST
 * @implements Route: /company/info
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function info_company(idCompany) {}
/**
 * @param {} idCompany
 * @implements Method: POST
 * @implements Route: /company/delete
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function delete_company(idCompany) {}
/**
 * @param {} name
 * @param {} description
 * @param {String} location
 * @param {} idCompany
 * @implements Method: POST
 * @implements Route: /company/edit
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function edit_company(name, description, location, idCompany) {}
/**
 * @implements Method: POST
 * @implements Route: /company/list
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function list_company() {}
/**
 * @param {} name
 * @param {} description
 * @param {} idCompany
 * @implements Method: POST
 * @implements Route: /group/new
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function create_group(name, description, idCompany) {}
/**
 * @implements Method: POST
 * @implements Route: /group/list
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function list_group() {}
/**
 * @param {} idGroup
 * @implements Method: POST
 * @implements Route: /group/delete
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function delete_group(idGroup) {}
/**
 * @param {} idGroup
 * @param {} idUser
 * @implements Method: POST
 * @implements Route: /group/add-user
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function add_user_to_group(idGroup, idUser) {}
/**
 * @param {} idGroup
 * @param {} idUser
 * @implements Method: POST
 * @implements Route: /group/remove-user
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function remove_user_from_group(idGroup, idUser) {}
/**
 * @param {} project_name
 * @param {} idGroup
 * @implements Method: POST
 * @implements Route: /group/project-permission
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function get_project_permission_of_group(project_name, idGroup) {}
/**
 * @param {} project_name
 * @param {} idGroup
 * @implements Method: POST
 * @implements Route: /group/update-project-permission
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function update_project_permission_for_group(project_name, idGroup) {}
/**
 * @param {} project_name
 * @implements Method: POST
 * @implements Route: /shared-project/new
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function new_shared_project(project_name) {}
/**
 * @param {} username
 * @implements Method: POST
 * @implements Route: /shared-project/list
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function list_shared_project(username) {}
/**
 * @param {String} type
 * @param {} idSharedProject
 * @param {} idGroup
 * @implements Method: POST
 * @implements Route: /shared-project/add-to-group
 * @implements Note: type: add or remove
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function add_shared_project_to_group(type, idSharedProject, idGroup) {}
/**
 * @implements Method: POST
 * @implements Route: /user/list
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function list_user() {}
/**
 * @param {} username
 * @param {} password
 * @param {} status
 * @param {number} role
 * @param {} email
 * @param {} fullname
 * @implements Method: POST
 * @implements Route: /user/new
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function new_user(username, password, status, role, email, fullname) {}
/**
 * @param {} idUser
 * @implements Method: POST
 * @implements Route: /user/info
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function info_user(idUser) {}
/**
 * @param {} username
 * @param {} password
 * @param {} status
 * @param {number} role
 * @param {} email
 * @param {} fullname
 * @implements Method: POST
 * @implements Route: /user/edit
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function edit_user(username, password, status, role, email, fullname) {}
/**
 * @param {} idUser
 * @implements Method: POST
 * @implements Route: /user/delete
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function delete_user(idUser) {}
/**
 * @param {} isUser
 * @param {} status
 * @implements Method: POST
 * @implements Route: /user/change-status
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function change_user_status(isUser, status) {}
/**
 * @implements Method: POST
 * @implements Route: /user/dropDb
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function drop_user_database() {}
/**
 * @param {} username
 * @param {} project_name
 * @implements Method: POST
 * @implements Route: /user/get-permission
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function get_user_permission(username, project_name) {}
/**
 * @param {} idUser
 * @implements Method: POST
 * @implements Route: /user/force-log-out
 * @implements Note: 
 * @example Example Response: 
{
}
 * @example Example Error Response: 
{
}
 */
function force_user_logout(idUser) {}