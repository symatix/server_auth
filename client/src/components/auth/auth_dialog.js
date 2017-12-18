import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

class AuthDialog extends React.Component {
	render() {
		const { onClose, ...other } = this.props;

		return (
			<Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" {...other}>
			<DialogTitle id="simple-dialog-title">Sign in with</DialogTitle>
			<div>
				<List>
					<a href="/auth/facebook">
						<ListItem button>
							<ListItemText primary="Facebook" />
						</ListItem>
					</a>
				</List>
				<List>
					<a href="/auth/google">
						<ListItem button>
							<ListItemText primary="Google" />
						</ListItem>
					</a>
				</List>
				<Button onClick={onClose} color="primary" style={{'width':'100%'}}>
					Cancle
				</Button>
			</div>
		</Dialog>
		);
	}
}

export default AuthDialog;
