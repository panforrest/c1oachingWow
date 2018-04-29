"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
	currentLocation: { lat: 40.72, lng: -73.98 }
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var updated = Object.assign({}, state);
	switch (action.type) {

		case constants.LOCATION_CHANGED:
			console.log("LOCATION_CHANGED: " + JSON.stringify(action.data));
			updated.currentLocation = action.data;
			return updated;

		// case constants.CURRENT_USER_RECEIVED:
		// 	newState['currentUser'] = action.data
		// 	return newState

		// case constants.USERS_RECEIVED:
		// 	newState['all'] = action.data
		// 	return newState

		// case constants.USER_CREATED:
		// 	let array = (newState.all) ? Object.assign([], newState.all) : []
		// 	array.unshift(action.data)
		// 	newState['all'] = array
		// 	return newState

		default:
			return updated;
	}
};