
const passport = require('passport');

const config = require('../constants/config');

module.exports = class BaseAdapter {

	// serviceType = null;

	fetch() { return Promise.reject('Fuck off'); }
	normalize(data) { return data; }
	authenticate() {}
	authCallback() {}

	getAuthMiddleware(serviceKey) {
		return passport.authenticate('twitter', { 
			scope : [ 'public_profile', 'email' ],
		});
	}

	getCallbackMiddleware(serviceKey) {
		return passport.authenticate(serviceKey, {
			successRedirect : config.loginSuccessRedirect,
			failureRedirect : config.loginFailRedirect,
			failureFlash : true,
		});
	}
}
