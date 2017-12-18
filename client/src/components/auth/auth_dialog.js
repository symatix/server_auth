import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

class AuthDialog extends React.Component {
	render() {
		const { ...other } = this.props;

		return (
			<Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" {...other}>
			<DialogTitle id="simple-dialog-title">Sign in with</DialogTitle>
			<div>
				<List>
					<a href="/auth/facebook">
						<ListItem button primary onClick={() => this.props.onClose()}>
							<ListItemText primary="Facebook" />
						</ListItem>
					</a>
				</List>
				<List>
					<a href="/auth/google">
						<ListItem button onClick={() => this.props.onClose()}>
							<ListItemText primary="Google" />
						</ListItem>
					</a>
				</List>
			</div>
		</Dialog>
		);
	}
}

export default AuthDialog;









/*
import React, { Component } from 'react';

class SignIn extends Component {
	render() {
		return (
			<div>

				<a href="/auth/google">google</a>
            </div>
		)
	}
}
export default SignIn
*/
