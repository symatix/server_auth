import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from '../actions';

import Header from './Header';
import Landing from './Landing';

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
					</div>
				</BrowserRouter>
            </div>
		);
	}
}

export default connect(null, { fetchUser })(App);
