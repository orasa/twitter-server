const db = require('../db')

//model is a fuction from moogoose
const db_channel = db.model('channels', {
	name: String,
}

)
module.exports = db_channel
