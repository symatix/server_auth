import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import { MuiThemeProvider } from 'material-ui/styles';
import theme from './css/theme';
import './index.css';

import App from './components/App'
import reducers from './reducers'
import axios from 'axios'
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

render(
	<Provider store={store} >
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
    </Provider>,
	document.getElementById("root")
)
