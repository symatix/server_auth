import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const Notification = (props) => {
	return (
		<Snackbar
            open={props.open}
            message={props.message ? props.message : ''}
            autoHideDuration={4000}
        />
	);
}
export default Notification;
