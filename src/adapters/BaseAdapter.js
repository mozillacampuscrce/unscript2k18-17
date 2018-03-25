
const passport = require('passport');

const config = require('../constants/config');

module.exports = class BaseAdapter {

	// serviceType = null;

	fetchFeed() { return Promise.reject('Fetch not implemented'); }
	normalize(data) { return data; }
	authenticate() {}
	authCallback() {}

	getAuthMiddleware(serviceKey) {
		return passport.authenticate(serviceKey, {
			scope : [ 'public_profile', 'email', 'user_posts' ],
		});
	}

	getCallbackMiddleware(serviceKey) {
		return (req, res, next) => {
			console.log(req.body);
			return passport.authenticate(serviceKey, {
			successRedirect : config.loginSuccessRedirect,
			failureRedirect : config.loginFailRedirect,
			failureFlash : true,
		})(req, res, next); };
	}
}
