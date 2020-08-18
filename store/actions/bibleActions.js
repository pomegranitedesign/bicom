import axios from 'axios'
import {
	FETCH_BIBLES_REQUEST,
	FETCH_BIBLE_FAILURE,
	FETCH_BIBLE_SUCCESS,
	SELECT_BIBLE_REQUEST,
	SELECT_BIBLE_SUCCESS,
	SELECT_BIBLE_FAILURE
} from './bibleTypes'

export const fetchBibles = () => async (dispatch) => {
	dispatch({ type: FETCH_BIBLES_REQUEST })

	const response = await axios.get('http://localhost:4000/api/bibles')
	const bibles = response.data.bibles.data
	const bible = bibles[0]
	const bibleID = bible.id

	// Get books for the current bible
	const booksResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/books`
	)
	const books = booksResponse.data.books.data
	const currentBook = books[0]
	const bookID = currentBook.id

	// Get chapters for the currentBook
	const chaptersResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/books/${bookID}/chapters`
	)
	const chapters = chaptersResponse.data.data
	const currentChapter = chapters[1]
	const chapterID = currentChapter.id

	// Get data for the current chapter
	const currentChapterDataResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/chapters/${chapterID}`
	)
	const currentChapterData = currentChapterDataResponse.data.data

	const currentBible = {
		bible,
		books,
		currentBook,
		chapters,
		currentChapter: currentChapterData
	}
	if (response.status === 200)
		return dispatch({
			type: FETCH_BIBLE_SUCCESS,
			bibles,
			currentBible
		})
	else if (response.status !== 200)
		return dispatch({
			type: FETCH_BIBLE_FAILURE,
			error: { message: 'Something went wrong...' }
		})
}

export const selectBible = (selectedBible) => async (dispatch) => {
	dispatch({ type: SELECT_BIBLE_REQUEST })

	const bibleID = selectedBible.id

	// Get books for the current bible
	const booksResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/books`
	)
	const books = booksResponse.data.books.data
	const currentBook = books[0]
	const bookID = currentBook.id

	// Get chapters for the currentBook
	const chaptersResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/books/${bookID}/chapters`
	)
	const chapters = chaptersResponse.data.data
	const currentChapter = chapters[0]
	const chapterID = currentChapter.id

	// Get data for the current chapter
	const currentChapterDataResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/chapters/${chapterID}`
	)
	const currentChapterData = currentChapterDataResponse.data.data

	const currentBible = {
		books,
		currentBook,
		chapters,
		currentChapter: currentChapterData
	}
	dispatch({ type: SELECT_BIBLE_SUCCESS, currentBible })
}
