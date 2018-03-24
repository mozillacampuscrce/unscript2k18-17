
const config = require('./config');

const env = key => process.env[key];

module.exports = {
	FACEBOOK: {
		appId: env('FB_APP_ID'),
		appSecret: env('FB_APP_SECRET'),
		callback: config.facebookCallback,
	},
	TWITTER: {
		appId: env('TW_APP_ID'),
        appSecret: env('TW_APP_SECRET'),
        callback: config.twitterCallback,
	},
	INSTAGRAM: {

	},
};
