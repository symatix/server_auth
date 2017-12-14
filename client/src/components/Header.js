import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Tabs, { Tab } from 'material-ui/Tabs';


class Header extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {

		return (
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
            	<Tab onClick={()=>this.props.history.push('/signin')} label="Sign In" />
        </Tabs>
		);
	}
}


function mapStateToProps({ auth }) {
	return { auth }
}

export default withRouter(connect(mapStateToProps)(Header));
