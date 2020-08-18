import { combineReducers } from 'redux'
import bibleReducer from './bibleReducer'
import userReducer from './userReducer'

export default combineReducers({
	bible: bibleReducer,
	user: userReducer
})
