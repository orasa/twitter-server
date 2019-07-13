// Config

const express = require('express')
// const path = require('path')
require('dotenv').config()

const app = express()
const bodyParser = require('body-parser') // allow us to
const cors = require('cors')

require('./db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//message

app.post('/api/post_message', require('./controllers/post_message'))
app.get('/api/get_messages', require('./controllers/get_messages'))

//hastags
// app.get('/api/get_hashtags', require('./controllers/get_hashtags'))
app.post('/api/post_hashtag', require('./controllers/post_hashtag'))
app.get('/api/get_hashtags', require('./controllers/get_hashtags'))

// //users controllers , post_user, signup is just form create in html
// app.get('/api/users', require('./controllers/get_users'))
// // app.post('/api/users', require('./controllers/post_users'))


app.post('/api/signup', require('./controllers/signup'))
app.post('/api/login', require('./controllers/login'))



// Static Files

// // serve every file inside 'client' folder as static
// app.use(express.static(path.join(__dirname, 'client')))
//
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/client/products.html'))
// 	console.log('__dirname', __dirname)
// })

// Run Server

app.listen(process.env.PORT, () => {
	console.log('Server listening on port 6000')
})
