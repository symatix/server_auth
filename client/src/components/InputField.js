import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing.unit,
		width: "100%"
	}
});

class InputField extends Component {
	render() {
		const { meta } = this.props
		const { classes } = this.props;
		return (
			<div>
                <FormControl className={classes.formControl} error={meta.touched && !meta.valid ? true : false} >
                    <InputLabel>{this.props.label}</InputLabel>
                    <Input
                        {...this.props.input}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        multiline={this.props.multiline}
                        rows={this.props.rows}
                        className={classes.textField}
                        error={meta.touched && meta.error ? meta.error: ''}
                    />
                    <FormHelperText>{meta.touched && meta.error}</FormHelperText>
                </FormControl>
            </div>
		);
	}
}

InputField.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputField);
