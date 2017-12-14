import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from '../actions';

import Header from './Header';
import Landing from './Landing';
import SignIn from './auth/SignIn';
import SignOut from './SignOut';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser()
	}

	render() {
		return (
			<div className="App">
                <BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/signin" component={SignIn} />
						<Route exact path="/signout" component={SignOut} />
					</div>
				</BrowserRouter>
            </div>
		);
	}
}

export default connect(null, { fetchUser })(App);
