import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Tabs, { Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
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
			<AppBar position="fixed">
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="#ffffff"
					centered
					>
					<Tab label="Constelations" onClick={()=> this.props.history.push('/')}/>
					<Tab label="Family" onClick={()=> this.props.history.push('/family')}/>
					<Tab label="Business" onClick={()=> this.props.history.push('/business')}/>
					<Tab label="About Us" onClick={()=> this.props.history.push('/about')}/>
					<Tab label="Contact" onClick={()=> this.props.history.push('/contact')}/>
					<Tab label="Calendar" onClick={()=> this.props.history.push('/calendar')} />
					{this.renderAuth()}
				</Tabs>
			</AppBar>
				<AuthDialog
					open={this.state.authDialog}
					onClose={this.handleAuthDialog.bind(this)}
				/>
			</div>

		);
	}
}


function mapStateToProps({ auth }) {
	return { auth }
}

export default withRouter(connect(mapStateToProps, { signOut })(Header));
