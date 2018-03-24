
// const glob = require('glob');
// TODO: Load with glob

module.exports = app => {

	require('./components/social/controller-social')(app);
	require('./components/social/controller-auth')(app);
};
