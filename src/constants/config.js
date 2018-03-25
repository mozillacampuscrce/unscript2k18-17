
const baseDomain = process.env.DOMAIN;

const apiBaseUrl = '/api';

module.exports = {
	apiBaseUrl,

	loginFailRedirect: '/',
	loginSuccessRedirect: '/',

	facebookCallback: `${baseDomain}${apiBaseUrl}/auth/fb/callback`,
	twitterCallback: `${baseDomain}${apiBaseUrl}/auth/tw/callback`,
};
