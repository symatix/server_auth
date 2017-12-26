const mailer = require('../services/mailer')
module.exports = function (app) {
	app.post('/api/mail', function (req, res) {
		console.log(req.body);
		mailer.sendMail(req.body, function (err, info) {
			if (err) {
				console.log(err)
				res.status(422).send(err);
			} else {
				res.send(true)
			}
		})
	})
}
