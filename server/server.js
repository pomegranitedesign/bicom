const express = require('express')
const axios = require('axios')
require('dotenv').config('./.env')

const app = express()
const port = process.env.PORT || 4000

// TODO: Remove after connecting database
const bibles = []

/**
 * 
 * @bicom-api
 * GET all bibles
 * public
 * 
 */
app.get('/api/bibles', async (req, res) => {
	const response = await axios.get(`${process.env.BASE_URL}/bibles`, {
		headers: { 'api-key': process.env.BIBLE_API_KEY }
	})

	bibles.push(response.data)
	console.log(bibles[0])
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
	const books = response.data.data
	console.log(books)
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
		`${process.env.BASE_URL}/bibles/${bibleID}/books/${bookID}/chapters`,
		{ headers: { 'api-key': process.env.BIBLE_API_KEY } }
	)
	const chapters = response.data
	console.log(chapters)
})

/**
 * 
 * @bicom-api
 * GET a single Bible's book chapter's verses 
 * public
 * 
 */
app.get('/api/bibles/:bibleID/chapters/:chapterID/verses', async (req, res) => {
	const { bibleID, chapterID } = req.params
	const response = await axios.get(
		`${process.env
			.BASE_URL}/bibles/${bibleID}/chapters/${chapterID}/verses`,
		{ headers: { 'api-key': process.env.BIBLE_API_KEY } }
	)
	const verses = response.data
	console.log(verses)
})

app.listen(port, () => console.log(`Server is running on port: ${port}`))
