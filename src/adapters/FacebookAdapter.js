
const fetch = require('node-fetch');

const services = require('../constants/services');
const endpoints = require('../constants/endpoints');
const BaseAdapter = require('./BaseAdapter');

module.exports = class FacebookAdapter extends BaseAdapter {

	constructor() {
		this.serviceType = services.FACEBOOK;
	}

	fetch() {

		const options = {
			method: 'get',
		};

		return fetch(endpoints.FACEBOOK.FEED, options)
			.then(res => res.json());
	}

	normalize(data) {
		return data;
	}
}
