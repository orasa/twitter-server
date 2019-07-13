const db = require('../db')

//model is a fuction from mongoose
const db_hashtag = db.model('hastags', {
	author: String
}

)
module.exports = db_hashtag
