

module.exports = class BaseAdapter {

	// serviceType = null;

	fetch() { return Promise.reject('Fuck off'); }
	normalize(data) { return data; }
	authenticate() {}
	authCallback() {}
}
