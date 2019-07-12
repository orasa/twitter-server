const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	console.log(req.body)

	db_user.findOne({email: req.body.email}).then((user) => {

		console.log('user', user)
	}).catch((err) => {
		 		res.status(300).send(err)
		 	})
	 }

// module.exports = (req, res) => {
// 	console.log(req.body)
//
// 	db_user.findOne({email: req.body.email}).then((user) => {
// 		if (user) {
// 			console.log(user)
//
// 			  bcrypt.compare(req.body.password, user.password, (err, match) => {
// 				if (match) {
//
// 					let token = jwt.sign(user.toObject(), process.env.SECRET)
// 					console.log('TEST Token',token);
//
// 					res.status(200).json({
// 						message: 'You are logged in',
// 						token: token
//
// 					})
// 					console.log('TEST LOG req.headers', req.headers);
//
// 				} else {
// 					res.send('Sorry, invalid password')
// 				}
// 			})
// 		} else {
// 			res.send('Sorry, email not found')
// 		}
// 	}).catch((err) => {
// 		res.status(300).send(err)
// 	})
//
// }
