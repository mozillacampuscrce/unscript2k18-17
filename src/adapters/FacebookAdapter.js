
const fetch = require('node-fetch');

const passport = require('passport');

const config = require('../constants/config');
const services = require('../constants/services');
const endpoints = require('../constants/endpoints');
const BaseAdapter = require('./BaseAdapter');

module.exports = class FacebookAdapter extends BaseAdapter {

	constructor() {
		super();
		this.serviceType = services.FACEBOOK;
	}

	fetchFeed(userId, accessToken) {

		const options = {
			method: 'get',
		};

		return fetch(endpoints.FACEBOOK.FEED('1859015324190927', 'EAAFFEVYbN9MBAGta0Nw5rUAVt2SlYqGXtKrS0lpLFy0Qvw52VoZCBzqwAZBzo8ojOpS1RkJuPZAe73kBSq0SGSUOBfVjnei83FaqGq7QsoQOLEsepRfZCYq1c2QrVW2w31ZCSnxkXYqucdEkup5njkzdUJdPvP4ZCVBMmEeHPFzgZDZD'), options)
			.then(res => res.json());
	}

	normalize(data) {
		return data;
	}

	authenticate(req, res, next) {
		return this.getAuthMiddleware('facebook')(req, res, next);
	}

	authCallback(req, res, next) {
		return this.getCallbackMiddleware('facebook')(req, res, next);
	}
}
