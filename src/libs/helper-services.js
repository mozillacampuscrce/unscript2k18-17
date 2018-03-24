
const services = require('../constants/services');

module.exports = {

	getServiceShorthand: serviceName =>
		services[serviceName],

	getServiceName: serviceShorthand =>
		Object.keys(services)
			.filter(serviceName =>
				services[serviceName] === serviceShorthand)[0],
};
