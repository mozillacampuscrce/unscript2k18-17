
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

const { FACEBOOK, TWITTER } = require('../../constants/passport-config');
module.exports = () => {

	passport.use(new FacebookStrategy({
		clientID        : FACEBOOK.appId,
		clientSecret    : FACEBOOK.appSecret,
		callbackURL     : FACEBOOK.callback,
	}, function(token, refreshToken, profile, done) {
		console.log(token, refreshToken, profile);
		process.nextTick(function() {
			return done(null, {
				userId: profile.id,
				accessToken: token,
			});
		});
	}));


	passport.use(new TwitterStrategy({
		consumerKey: TWITTER.appId,
		consumerSecret: TWITTER.appSecret,
		callbackURL: TWITTER.callback,
	}, function(token, refreshToken, profile, done) {
		console.log(token, refreshToken, profile);
		done(null, profile);
	}));
};
