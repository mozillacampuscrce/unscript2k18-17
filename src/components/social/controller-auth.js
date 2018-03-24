
const config = require('../../constants/config');
const services = require('../../constants/services');

const ApiService = require('./ApiService');

module.exports = (app) => {

	app.get(`${config.apiBaseUrl}/auth/:service`, (req, res) => {

		const service = Object.keys(services)
			.filter(serviceName => services[serviceName] === req.params.service)[0];

		if(service) {
			const api = new ApiService(service);

			api.authenticate({})
				.then(result => res.end(result));
		}
	});
};
