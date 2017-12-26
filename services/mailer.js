var nodemailer = require('nodemailer');
var keys = require('../config/keys.js');

var mailer = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: keys.gmailU,
		pass: keys.gmailP
	}
});

module.exports = mailer;
