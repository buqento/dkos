import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7694e4',
      main: '#4267b2',
      dark: '#003d82',
      contrastText: '#fff',
    },
    secondary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#000',
    },
  },
});

//Global state
const globalState = {
	order: 1,
	filter:"",
	lat:-3.693139,
	lng: 128.183085
}

//Reducer
const rootReducer = (state = globalState, action) => {

	if(action.type === "FILTER_LOCATION"){
		return{
			...state,
			filter: action.filter
		}
	}

	if(action.type === "ADD_LOCATION"){
		return{
			...state,
			lat:action.loc.lat,
			lng:action.loc.lng
		}
	}

	return state;
}

//Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
	<Provider store={storeRedux}>
		<MuiThemeProvider theme={theme}>
			<Home />
		</MuiThemeProvider>
	</Provider>, 
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
