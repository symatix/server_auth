const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define user model
const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
})
// On Save Hook, encrypt password
// before saving a model, run this
userSchema.pre('save', function (next) {
	const user = this;

	// generate a salt then run callbakc
	bcrypt.genSalt(10, function (err, salt) {
		if (err) { return next(err) }

		// hash the password using the salt
		bcrypt.hash(user.password, salt, null, function (err, hash) {
			if (err) { return next(err); }

			// overwrite plain text password with encrypted password
			user.password = hash;
			next();
		})
	})
})

// Create a method for local validation
userSchema.methods.comparePassword = function (candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) { return callback(err); }
		callback(null, isMatch);
	})
}
// Create the model class
mongoose.model('users', userSchema);
