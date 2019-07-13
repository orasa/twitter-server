
const db_message = require('../models/message')

module.exports = (req, res) => {
	console.log('messses', res);
	//populate will join collection messages and hashtags from db

	db_message.find({}).populate({
		path: 'hashtag',
		select: 'name'

	}).then((data) => {

		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
