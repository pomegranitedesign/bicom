import {
	FETCH_BIBLES_REQUEST,
	FETCH_BIBLE_FAILURE,
	FETCH_BIBLE_SUCCESS,
	SELECT_BIBLE_REQUEST,
	SELECT_BIBLE_SUCCESS
} from '../actions/bibleTypes'

const initialState = {
	bibles: [],
	currentBible: null,
	isFetching: false,
	hasError: false,
	error: {}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_BIBLE_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentBible: action.currentBible
			}

		case SELECT_BIBLE_REQUEST:
			return { ...state, isFetching: true }

		case FETCH_BIBLE_FAILURE:
			return {
				...state,
				isFetching: false,
				hasError: true,
				error: action.error
			}

		case FETCH_BIBLE_SUCCESS:
			return {
				...state,
				bibles: action.bibles,
				currentBible: action.currentBible,
				isFetching: false
			}

		case FETCH_BIBLES_REQUEST:
			return { ...state, isFetching: true }

		default:
			return state
	}
}
