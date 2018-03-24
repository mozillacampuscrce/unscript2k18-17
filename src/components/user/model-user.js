
const mongoose = require('mongoose');

const { Account } = require('../social/model-account');

const User = new mongoose.Schema({

	accounts: [ {
		type: String,

		name: String,
		email: String,

		socialid: String,
		token: String,
	} ],

}, { collection: 'users' });

module.exports = {
	User,
};
