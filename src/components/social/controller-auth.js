
const config = require('../../constants/config');
const services = require('../../constants/services');

const ApiService = require('./ApiService');

const { getServiceName } = require('../../libs/helper-services');

module.exports = (app) => {

	app.get(`${config.apiBaseUrl}/auth/:service`, (req, res, next) => {

		const service = getServiceName(req.params.service);

		if(service) {
			const api = new ApiService(service);
			return api.authenticate(req, res, next);
		}
	});

	app.get(`${config.apiBaseUrl}/auth/:service/callback`, (req, res, next) => {

		const service = getServiceName(req.params.service);

		if(service) {
			const api = new ApiService(service);
			return api.authCallback(req, res, next);
		}
	});

	// route for logging out
    app.get(`${config.apiBaseUrl}/auth/logout`, function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
