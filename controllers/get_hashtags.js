
const db_channel = require('../models/hashtags')

module.exports = (req, res) => {
	console.log('Hello');

	db_channel.find({}).then((data)=> {
		console.log('data From channel',	data)
	 	res.send(data)
	}).catch((err) => {
		res.send(err)
	 })
}


	//sort
	// db_channel.find({}).sort('date').populate('channel').then((data)=> {
	// 	res.send(data)
	// }).catch((err) => {
	// 	res.send(err)
	// })
