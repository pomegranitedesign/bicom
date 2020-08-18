const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config('./.env')

const app = express()
const port = process.env.PORT || 4000

// Middleware
app.use(cors())

const bibles = []

/**
 * 
 * @bicom-api
 * GET all bibles (versions)
 * public
 * 
 */
app.get('/api/bibles', async (req, res) => {
	const response = await axios.get(`${process.env.BASE_URL}/bibles`, {
		headers: { 'api-key': process.env.BIBLE_API_KEY }
	})
	res.json({ bibles: response.data })
})

/**
 * 
 * @bicom-api
 * GET a single Bible's books using bibleID
 * public
 * 
 */
app.get('/api/bibles/:bibleID/books', async (req, res) => {
	const { bibleID } = req.params
	const response = await axios.get(
		`${process.env.BASE_URL}/bibles/${bibleID}/books`,
		{ headers: { 'api-key': process.env.BIBLE_API_KEY } }
	)
	const books = response.data
	res.json({ books })
})

/**
 * 
 * @bicom-api
 * GET a single Bible's book using bookID
 * public
 * 
 */
app.get('/api/bibles/:bibleID/books/:bookID', async (req, res) => {
	const { bibleID, bookID } = req.params
	const response = await axios.get(
		`${process.env.BASE_URL}/bibles/${bibleID}/books/${bookID}`,
		{ headers: { 'api-key': process.env.BIBLE_API_KEY } }
	)
	const book = response.data
	console.log(book)
})

/**
 * 
 * @bicom-api
 * GET a single Bible's book chapters 
 * public
 * 
 */
app.get('/api/bibles/:bibleID/books/:bookID/chapters', async (req, res) => {
	const { bibleID, bookID } = req.params
	const response = await axios.get(
		`${process.env.BASE_URL}/bibles/${bibleID}/books/${bookID}/chapters?`,
		{ headers: { 'api-key': process.env.BIBLE_API_KEY } }
	)
	const chapters = response.data
	res.json(chapters)
})

/**
 * 
 * @bicom-api
 * GET a single chapter's verses 
 * public
 * 
 */
app.get('/api/bibles/:bibleID/chapters/:chapterID', async (req, res) => {
	const { bibleID, chapterID } = req.params
	const response = await axios.get(
		`${process.env
			.BASE_URL}/bibles/${bibleID}/chapters/${chapterID}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
		{ headers: { 'api-key': process.env.BIBLE_API_KEY } }
	)
	const data = response.data
	res.json(data)
})

/**
 * 
 * @bicom-api
 * GET a single verse
 * public
 * 
 */
app.get('/api/bibles/:bibleID/verses/:verseID', async (req, res) => {
	const { bibleID, verseID } = req.params
	const response = await axios.get(
		`${process.env.BASE_URL}/bibles/${bibleID}/verses/${verseID}`,
		{ headers: { 'api-key': process.env.BIBLE_API_KEY } }
	)
	const text = response.data
	res.json(text)
})

app.listen(port, () => console.log(`Server is running on port: ${port}`))
