const passport = require('passport');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send('Thou shan\'t disturb The All Mighty Server.')
	});
	// facebook oauth
	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: ['email']
	}));
	app.get(
		'/auth/facebook/callback',
		passport.authenticate('facebook'),
		(req, res) => {
			res.redirect('/signout')
		}
	);
	// google oauth
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['email']
	}));
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/signout')
		}
	);

	// general server API
	app.get('/api/signout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	});

}
