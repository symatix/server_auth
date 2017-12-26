import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import InputField from './InputField';
import Notification from './notification';
import { sendEmail } from '../actions';

class Form extends Component {
	constructor(props) {
		super();
		this.state = { notification: false }
	}
	handleForm(formProps) {
		const mail = {
			from: `${formProps.name} <${formProps.email}>`,
			to: 'd.kraljeta@gmail.com',
			subject: formProps.subject,
			text: `${formProps.name} <${formProps.email}> \n(internal gmail auth prevents changing "from" field without customization)\n\n${formProps.message}`
		}
		this.props.sendEmail(mail, this.emailSuccess.bind(this));
	}
	emailSuccess(sent) {
		if (!sent) {
			this.setState({
				notification: true,
				message: "Error sending e-mail! Please try again."
			})
			return false;
		}
		this.setState({
			notification: true,
			message: "Thank you for contacting us!"
		})
	}

	render() {
		const { handleSubmit } = this.props;
		console.log(this.props)
		return (
			<Paper className="paper-form" rounded="false">
                <form onSubmit={handleSubmit(this.handleForm.bind(this))}>
					<Field
	                    component={InputField}
	                    type="text"
	                    label="Name"
	                    name="name"
	                    placeholder="Please enter your name"
						validate={validateField}
	                />
					<Field
	                    component={InputField}
	                    type="email"
	                    label="Email"
	                    name="email"
	                    placeholder="Please enter your e-mail"
						validate={email}
	                />
					<Field
	                    component={InputField}
	                    type="text"
	                    label="Subject"
	                    name="subject"
	                    placeholder="Please enter message subject"
						validate={validateField}
	                />
					<Field
	                    component={InputField}
	                    type="text"
	                    label="Message"
	                    name="message"
	                    placeholder="Please enter message"
						multiline={true}
						rows={4}
						validate={validateField}
	                />

					<Button raised className="btn-form" type="submit" color="primary">Send</Button>
				</form>
                <Button className="btn-form" color="primary" onClick={() => this.props.history.push('/')}>Cancel</Button>
				<Notification open={this.state.notification} message={this.state.message} />
            </Paper>
		)
	}
}
const validateField = value => !value ? "This field is required" : undefined;
const email = value =>
	!value ?
	"This field is required" :
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
	'Invalid email address' :
	undefined


const afterSubmit = (result, dispatch) => dispatch(reset('contact'));

const ContactForm = reduxForm({
	form: 'contact',
	onSubmitSuccess: afterSubmit,
})(Form);

export default withRouter(connect(null, { sendEmail })(ContactForm))
