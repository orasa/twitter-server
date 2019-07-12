const mongoose = require ('mongoose')



//Deploying to Heroku
mongoose.connect('mongodb://localhost:27017/twitter', {useNewUrlParser: true}, (err) => {
	if (err) {
	    console.log('Err', err)
	}else {
		console.log('*_* From db.JS / mongoose.connect, Connected to MongoDB')
	}
}


)
//
// //connect db to mongoose specify version useNewUrlParser
// mongoose.connect('mongodb://localhost:27017/slack', {useNewUrlParser: true}, (err) => {
// 		if (err) {
// 	    console.log('Err', err)
// 		}else {
// 		console.log('Connected to MongoDB')
// 	}
// 	}
// )

module.exports = mongoose
