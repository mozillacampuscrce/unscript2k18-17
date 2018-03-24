
const services = require('../../constants/services');

const adapters = {
	'FACEBOOK': require('../../adapters/FacebookAdapter'),
	'TWITTER': require('../../adapters/TwitterAdapter'),
	'INSTAGRAM': require('../../adapters/FacebookAdapter'),
};

module.exports = class ApiService {

	constructor(serviceType) {
		const AdapterClass = adapters[serviceType];
		console.log(serviceType);

		if(AdapterClass) {
			this.adapter = new AdapterClass();
		} else {
			throw new Error('Fuck You');
		}
	}

	fetchFeed() {
		return this.adapter.fetchFeed()
			.then(data => this.adapter.normalize(data));
	}

	authenticate(...args) { return this.adapter.authenticate(...args); }
	authCallback(...args) { return this.adapter.authCallback(...args); }
}
