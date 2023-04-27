const mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: {
		type : String,
		required : true
	},
	email: {
		type : String,
		required : true
	},
	gender : String,
	status : String
});

const UserDb = mongoose.model("userdb", schema);

module.exports = UserDb;