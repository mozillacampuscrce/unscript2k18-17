module.exports = {
	FACEBOOK: {

		TAGGED: (userId, accessToken) =>
			`https://graph.facebook.com/${userId}/tagged?include_read=1&access_token=${accessToken}`,

		FEED: (userId, accessToken) =>
			`https://graph.facebook.com/${userId}/feed?include_read=1&access_token=${accessToken}`,

		FEED: (userId, accessToken) =>
			`https://graph.facebook.com/${userId}/tagged?include_read=1&access_token=${accessToken}`,

		USER: (fieldset = 'posts') =>
			`https://graph.facebook.com/v2.5/me?fields=${fieldset}`
	},
	TWITTER: {

		FEED: (userId, accessToken) =>
			`https://graph.facebook.com/${userId}/notifications?include_read=1&access_token=${accessToken}`,

		USER: (fieldset = 'first_name,last_name,email') =>
			`https://graph.facebook.com/v2.5/me?fields=${fieldset}`
	},
	GPLUS: {

		// USER: (userId, accessToken) =>
		// 	``
	},
};