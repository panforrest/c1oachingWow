import constants from '../constants'

var initialState = {
	currentLocation: {lat:40.72,lng:-73.98}
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)
	switch (action.type) {

		case constants.ITEM_ADDED:
		    console.log('LOCATION_CHANGED: '+JSON.stringify(action.data))
		    updated['currentLocation'] = action.data
		    return updated

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
			return updated
	}
}