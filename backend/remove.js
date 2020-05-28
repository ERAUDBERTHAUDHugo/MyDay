//Library
const mongoose = require("mongoose");
const connectDb = require("./connectDb"); // Database connection module
const DailyWeather = require("./models/DailyWeather"); // Models


// Remove all documents that match conditions from the collection.


module.exports = function(model, dbName, filter={}){ // filter doc https://mongoosejs.com/docs/api/model.html#model_Model.remove

	connectDb("mongodb://localhost:27017/"+dbName) // Connect to database

	model.deleteMany(filter, (err)=>{ 
	    if(err) throw err // error handling
	    console.log("Removed")
	    mongoose.disconnect();
	});
}