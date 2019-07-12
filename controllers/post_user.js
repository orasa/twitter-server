
const db_user = require('../models/user')
const bcrypt = requre('bcrypt')

module.exports = (req, res) => {

	bcrypt.hash(reg.body.password, 10 (err, encrypted) => {

	})
if (err) {
	res.send('Err', err)
} else {
	req.body.password = encrypted
	db_user.create(req.body).then((data)=> {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
