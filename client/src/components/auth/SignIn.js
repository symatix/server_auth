import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
	render() {
		return (
			<div>
                <a href="/auth/facebook">facebook</a>
				<a href="/auth/google">google</a>
            </div>
		)
	}
}
export default SignIn
