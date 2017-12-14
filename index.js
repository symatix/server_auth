const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/user')
require('./services/passport')

// set up db
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoUri, { useMongoClient: true });

// set up server
const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKeyOne, keys.cookieKeyTwo]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

if (process.env.NODE_ENV === 'production') {
	//serve production assets if requested
	app.use(express.static('client/build'))

	// catch 'em all, if no file in client/build, serve index.html
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("[SERVER] port => " + PORT)
