const passport = require('passport');

module.exports = (app) => {
	// facebook oauth
	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: ['email']
	}));
	app.get(
		'/auth/facebook/callback',
		passport.authenticate('facebook'),
		(req, res) => {
			res.redirect('/')
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
			res.redirect('/')
		}
	);

	// sign out user
	app.get('/api/signout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	// used for user status check on main component render
	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	});

}
