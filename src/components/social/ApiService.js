
const services = require('../../constants/services');

const adapters = {
	'FACEBOOK': require('../../adapters/FacebookAdapter'),
	// 'TWITTER': require('../../adapters/FacebookAdapter'),
	// 'INSTAGRAM': require('../../adapters/FacebookAdapter'),
};

module.exports = class ApiService {

	constructor(serviceType) {
		this.adapter = adapters[serviceType];
	}

	fetchFeed() {
		return this.adapter.fetch()
			.then(data => this.adapter.normalize(data));
	}
}
