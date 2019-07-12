const db = require('../db')
const mongoose = require('mongoose')

//model is a fuction from moogoose
const db_user = db.model('user', {

	userName: {
		type: String,
		require: [true, 'userName is required']
	},
	password: {
		  type: String,
		require: [true, 'passowrd is required']

	},
	email: {
		type: String,
		require: [true, 'Email is required']

},


})

module.exports = db_user
//
