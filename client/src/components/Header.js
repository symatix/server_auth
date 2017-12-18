import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Tabs, { Tab } from 'material-ui/Tabs';
import AuthDialog from './auth/auth_dialog';
import { signOut } from '../actions';

class Header extends React.Component {
	state = {
		value: 0,
		authDialog: false
	};

	renderAuth() {
		if (this.props.auth) {
			return <Tab onClick={()=> this.props.signOut()} label="Sign Out" />
		} else {
			return <Tab onClick={()=>this.handleAuthDialog()} label="Sign In" />
		}
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleAuthDialog() {
		this.setState({ authDialog: !this.state.authDialog });
	};

	render() {
		return (
			<div>
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered>
					<Tab label="Constelations" />
					<Tab label="Family" />
					<Tab label="Business" />
					<Tab label="About Us" />
					<Tab label="Contact" />
					<Tab label="Calendar" />
					{this.renderAuth()}
	        	</Tabs>
				<AuthDialog
					open={this.state.authDialog}
					onClose={() => this.handleAuthDialog.bind(this)}
				/>
			</div>

		);
	}
}


function mapStateToProps({ auth }) {
	return { auth }
}

export default withRouter(connect(mapStateToProps, { signOut })(Header));
