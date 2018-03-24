
const fetch = require('node-fetch');

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
		return this.getAuthMiddleware('twitter')(req, res, next);
	}

	authCallback(req, res, next) {
		return this.getCallbackMiddleWare('twitter')(req, res, next);
	}
}
