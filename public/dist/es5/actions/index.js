"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var _utils = require("../utils");

var TurboClient = _utils.TurboClient;
var HTTPAsync = _utils.HTTPAsync;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

module.exports = {

	addItem: function (item) {
		// return {
		// 	type: 'ITEM_ADDED',
		// 	data: item
		// }
		return function (dispatch) {
			return dispatch(HTTPAsync.post("/api/item", item, constants.ITEM_ADDED));
		};
	},


	fetchItems: function (params) {
		return function (dispatch) {
			return dispatch(HTTPAsync.get("/api/item", params, constants.ITEMS_RECEIVED));
		};
	},

	locationChanged: function (location) {
		return {
			type: constants.LOCATION_CHANGED,
			data: location
		};
	},

	signup: function (params) {
		return function (dispatch) {
			return dispatch(HTTPAsync.post("/auth/register", params, constants.CURRENT_USER_RECEIVED));
		};
	},

	login: function (params) {
		return function (dispatch) {
			return dispatch(HTTPAsync.post("/auth/login", params, constants.CURRENT_USER_RECEIVED));
		};
	},

	//    currentuserReceived: (user) => {
	// 	return {
	// 		type: 'CURRENT_USER_RECEIVED',
	// 		data: location
	// 	}
	// }

	currentUser: function () {
		console.log("GET CURRENT USER");
		return function (dispatch) {
			return dispatch(HTTPAsync.get("/auth/currentuser", null, constants.CURRENT_USER_RECEIVED));
		};
	}

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },

	// // Unlike addUser, register() also maintains a session for login state. After calling
	// // TurboClient.createUser(), the new user is logged in as well:
	// register: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
	// 	}
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }

};