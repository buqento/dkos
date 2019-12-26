import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'leaflet/dist/leaflet.css';

//Global state
const globalState = {
	order: 1,
	filter:""
}

//Reducer
const rootReducer = (state = globalState, action) => {

	if(action.type === "PLUS_ORDER"){
		return {
			...state,
			order: state.order + 1
		}
	}

	if(action.type === "FILTER_LOCATION"){
		return{
			...state,
			filter: action.filter
		}
	}

	if(action.type === "FILTER_LOCATIONx"){
		return{
			...state,
			filter: action.filter
		}
	}
	return state;
}

//Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
