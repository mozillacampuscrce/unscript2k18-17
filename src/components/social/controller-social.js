
const config = require('../../constants/config');
const services = require('../../constants/services');

const ApiService = require('./ApiService');

module.exports = (app) => {

	app.get(`${config.apiBaseUrl}/social/feed`, (req, res) => {

		const requestedServices = (req.query.services + '').split(',');

		let apiList = [
			'FACEBOOK',
			'TWITTER',
			'INSTAGRAM',
		];

		// If the services to fetch is specified, filter out the others
		if(req.query.services) {
			apiList = apiList
				.filter(name => requestedServices.includes(services[name]));
		}

		console.log(requestedServices, apiList);

		const apiPromiseList = apiList
			.map(serviceName => new ApiService(serviceName))
			.map(api => api.fetchFeed());

		Promise.all(apiPromiseList)
			.then(results => results.map(apiResult => apiResult))
			.then(data => res.json({
				status: 200,
				data,
			}))
			.catch(e => res.json(e));
	});
};
