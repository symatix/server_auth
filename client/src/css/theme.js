import { createMuiTheme } from 'material-ui/styles';
import {
	grey300,
	white,
	darkBlack,
	fullBlack,
	red
} from 'material-ui/colors';
import { fade } from 'material-ui/styles/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const theme = createMuiTheme({
	spacing: spacing,
	fontFamily: 'Roboto, sans-serif',
	palette: {
		primary: red,
		primary1Color: '#461308',
		primary2Color: '#72200d',
		primary3Color: '#a02d13',
		accent1Color: '#e4401b',
		accent2Color: '#ea6648',
		accent3Color: '#ef8c76',
		textColor: darkBlack,
		alternateTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		disabledColor: fade('#461308', 0.3),
		pickerHeaderColor: '#461308',
		clockCircleColor: fade('#461308', 0.07),
		shadowColor: fullBlack,
	},
});

export default theme;
