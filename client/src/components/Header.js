import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderAuth() {
		if (this.props.auth) {
			return <a href="/api/signout">Sign Out</a>;
		} else {
			return <a href="/signin">Sign In</a>
		}
	}
	render() {
		return (
			<div>
                {this.renderAuth()}
            </div>
		)
	}
}

function mapStateToProps({ auth }) {
	return { auth }
}
export default connect(mapStateToProps)(Header);
