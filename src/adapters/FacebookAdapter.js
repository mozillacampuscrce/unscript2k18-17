
const fetch = require('node-fetch');

const services = require('../constants/services');
const endpoints = require('../constants/endpoints');
const BaseAdapter = require('./BaseAdapter');

module.exports = class FacebookAdapter extends BaseAdapter {

	constructor() {
		super();
		this.serviceType = services.FACEBOOK;
	}

	fetchFeed() {

		const options = {
			method: 'get',
		};

		return fetch(endpoints.FACEBOOK.FEED('userid'), options)
			.then(res => res.json());
	}

	normalize(data) {
		return data;
	}

	authenticate(data) {
		return Promise.resolve({ fuck: 'you' });
	}
}
