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

	if (response.status !== 200)
		return dispatch({
			type: FETCH_BIBLE_FAILURE,
			error: { message: 'Something went wrong...' }
		})
}

export const selectBible = (selected, type = '') => async (dispatch) => {
	dispatch({ type: SELECT_BIBLE_REQUEST })

	const bibleID =
		type === 'book'
			? selected.bibleId
			: type === 'chapter' ? selected.bibleId : selected.id

	const bibleResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}`
	)
	const bible = bibleResponse.data.data

	// Get books for the current bible
	const booksResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/books`
	)
	let currentBook, bookID, books
	if (type === 'book') {
		bookID = selected.id
		const bookResponse = await axios.get(
			`http://localhost:4000/api/bibles/${bibleID}/books/${bookID}`
		)
		const book = bookResponse.data.data
		currentBook = book
		books = booksResponse.data.books.data
	} else {
		books = booksResponse.data.books.data
		currentBook = books[0]
		bookID = currentBook.id
	}

	// Get chapters for the currentBook
	const chaptersResponse = await axios.get(
		`http://localhost:4000/api/bibles/${bibleID}/books/${bookID}/chapters`
	)
	let currentChapter, chapterID, chapters
	if (type === 'chapter') {
		chapterID = selected.id
		const chapterResponse = await axios.get(
			`http://localhost:4000/api/bibles/${bibleID}/chapters/${chapterID}`
		)
		const chapter = chapterResponse.data
		chapters = chaptersResponse.data.data
	} else {
		chapters = chaptersResponse.data.data
		currentChapter = chapters[0]
		chapterID = currentChapter.id
	}

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

	dispatch({ type: SELECT_BIBLE_SUCCESS, currentBible })
}
