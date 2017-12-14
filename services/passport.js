const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user)
		})
})

passport.use(
	new FacebookStrategy({
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true,
			profileFields: ['email']
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ email: profile.emails[0].value })
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({ email: profile.emails[0].value }).save()
			done(null, user)
		}
	)
)
passport.use(
	new GoogleStrategy({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ email: profile.emails[0].value })

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({ email: profile.emails[0].value }).save()
			done(null, user)
		}
	)
);
