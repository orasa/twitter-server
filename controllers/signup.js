
const db_user = require('../models/user')
const bcrypt = require('bcrypt')


module.exports = (req, res) => {

	db_user.create(req.body).then((data)=> {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}


	// const users = db_user.find({})
	// console.log('users', users);




// 	bcrypt.hash(req.body.password, 10, (err, encrypted) => {
// 		if (err) {
// 			res.send('Err', err)
// 		} else {
// 			req.body.password = encrypted
// 			db_user.create(req.body).then((data)=> {
// 				res.send(data)
// 			}).catch((err) => {
// 				res.send(err)
// 			})
// 		}
//
// 	})
//
// }
