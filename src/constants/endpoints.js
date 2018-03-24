module.exports = {
	FACEBOOK: {

		FEED: (userId, accessToken) =>
			`https://graph.facebook.com/${userId}/notifications?include_read=1&access_token=${accessToken}`,

		USER: (fieldset = 'first_name,last_name,email') =>
			`https://graph.facebook.com/v2.5/me?fields=${fieldset}`
	},
	TWITTER: {

		FEED: (userId, accessToken) =>
			`https://graph.facebook.com/${userId}/notifications?include_read=1&access_token=${accessToken}`,

		USER: (fieldset = 'first_name,last_name,email') =>
			`https://graph.facebook.com/v2.5/me?fields=${fieldset}`
	},
};