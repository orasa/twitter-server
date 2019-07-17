
const db_hashtag = require('../models/hashtags')

module.exports = (req, res) => {
	console.log('Hello');

	db_hashtag.find({}).sort('date').populate('hashtag').then((data)=> {
		console.log('data From hashtag',	data)
	 	res.send(data)
	}).catch((err) => {
		res.send(err)
	 })
}


	
