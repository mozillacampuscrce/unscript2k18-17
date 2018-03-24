
const fetch = require('node-fetch');

const passport = require('passport');

const config = require('../constants/config');
const services = require('../constants/services');
const endpoints = require('../constants/endpoints');
const BaseAdapter = require('./BaseAdapter');

module.exports = class TwitterAdapter extends BaseAdapter {

	constructor() {
		super();
		this.serviceType = services.TWITTER;
	}

	fetchFeed() {

		const options = {
			method: 'get',
		};

		return fetch(endpoints.TWITTER.FEED('useraidy', 'accesstokan'), options)
			.then(res => res.json());
	}

	normalize(data) {
		return data;
	}

	authenticate(req, res, next) {
		return passport.authenticate('twitter', { 
			scope : [ 'public_profile', 'email' ],
		})(req, res, next);
	}

	authCallback(req, res, next) {
		return passport.authenticate('twitter', {
			successRedirect : config.loginSuccessRedirect,
			failureRedirect : config.loginFailRedirect,
			failureFlash : true,
		})(req, res, next);
	}
}
