import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Global state
const globalState = {
	messages: 5,
	loginStatus: false
}

//Reducer
const rootReducer = (state = globalState, action) => {
	if(action.type === "MESSAGE"){
		return {
			...state,
			messages: state.messages + 1
		}
	}

	if(action.type === "AUTH_LOGIN"){
		return {
			...state,
			loginStatus: true
		}
	}

	if(action.type === "AUTH_LOGOUT"){
		return {
			...state,
			loginStatus: false
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
