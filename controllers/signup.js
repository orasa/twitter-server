
const db_user = require('../models/user')
const bcrypt = require('bcrypt')


module.exports = (req, res) => {

	bcrypt.hash(req.body.password, 10, (err, encrypted) => {
		if (err) {
			res.status(300).send('Err', err)
		} else {
			req.body.password = encrypted
			console.log('After encryped req.body', req.body)
			db_user.create(req.body).then((data)=> {
				res.send(data)
			}).catch((err) => {
				res.send(err)
			})
		}
	})
}
