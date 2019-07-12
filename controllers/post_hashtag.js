
const db_hashtag = require('../models/hashtags')

module.exports = (req, res) => {

	db_hashtag.create(req.body).then((data)=> {
		res.send(data)
		console.log(res.send);
	}).catch((err) => {
		res.send(err)
	})
}
