import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from '../actions';

import Header from './Header';
import Landing from './Landing';
import Family from './Family';
import Business from './Business';
import About from './About';
import Contact from './Contact';
import Calendar from './Calendar';
import Footer from './Footer';

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
						<Route exact path="/family" component={Family} />
						<Route exact path="/business" component={Business} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/calendar" component={Calendar} />
						<Footer />
					</div>
				</BrowserRouter>
            </div>
		);
	}
}

export default connect(null, { fetchUser })(App);
