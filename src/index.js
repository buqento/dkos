import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


// import Item1 from '../../images/item1.jpg'
// import Item2 from '../../images/item2.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'
// import Item5 from '../../images/item5.jpg'
// import Item6 from '../../images/item6.jpg'

// Create theme
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
	loginStatus: false,
	filter: "",
	lat: -3.693139,
	lng: 128.183085,

	items: [
		{ id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet", price: 110, img: "Item1" },
		{ id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: "Item2" },
		{ id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: "Item3" },
		{ id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: "Item4" },
		{ id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: "Item5" },
		{ id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: "Item6" }
	],
	addedItems: [],
	total: 0,
	totalPriceAllItem: 0,
	selectedAll: true
}

//Reducer
const rootReducer = (state = globalState, action) => {
	switch (action.type) {
		case "FILTER_LOCATION": {
			return {
				...state,
				filter: action.filter
			}
		}

		case "ADD_TO_CART": {
			let addedItem = state.items.find(item => item.id === parseInt(action.id, 10))
			let existedItem = state.addedItems.find(item => item.id === parseInt(action.id, 10));
			if (existedItem) {
				addedItem.quantity += 1
				return {
					...state,
					total: state.total + addedItem.price
				}
			} else {
				addedItem.quantity = 1
				addedItem.selected = true
				let newTotal = state.total + addedItem.price
				return {
					...state,
					addedItems: [...state.addedItems, addedItem],
					total: newTotal
				}
			}
		}

		case "REMOVE_ITEM": {
			let itemToRemove = state.items.find(item => item.id === parseInt(action.id, 10))
			let newItems = state.addedItems.filter(item => item.id !== parseInt(action.id, 10))
			let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
			return {
				...state,
				addedItems: newItems,
				total: newTotal
			}
		}

		case "CHECK_ALL_ITEM": {
			state.selectedAll = !state.selectedAll
			for (let index = 0; index < state.addedItems.length; index++) {
				state.addedItems[index].selected = !state.addedItems[index].selected
			}
			if (!state.selectedAll) {
				state.totalPriceAllItem = 0
				return {
					...state,
					total: state.totalPriceAllItem
				}
			} else {
				for (let index = 0; index < state.addedItems.length; index++) {
					state.addedItems[index].selected = true;
					let totalPriceItem = state.addedItems[index].price * state.addedItems[index].quantity
					state.totalPriceAllItem += totalPriceItem
				}
				return {
					...state,
					total: state.totalPriceAllItem
				}
			}
		}

		case "CHECK_ITEM": {
			let itemToRemove = state.items.find(item => item.id === parseInt(action.id, 10))
			let addedItem = state.items.find(item => item.id === parseInt(action.id, 10))
			addedItem.selected = !addedItem.selected
			if (addedItem.selected) {
				let newTotal = state.total + (addedItem.price * addedItem.quantity)
				return {
					...state,
					total: newTotal
				}
			} else {
				let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
				return {
					...state,
					total: newTotal
				}
			}
		}

		case "INCREMENT_ITEM": {
			let addedItem = state.items.find(item => item.id === parseInt(action.id, 10))
			if (addedItem.selected) {
				addedItem.quantity += 1
				let newTotal = state.total + addedItem.price
				return {
					...state,
					total: newTotal
				}
			} else {
				return {
					...state
				}
			}
		}

		case "DECREMENT_ITEM": {
			let addedItem = state.items.find(item => item.id === parseInt(action.id, 10))
			if (addedItem.selected) {
				if (addedItem.quantity === 1) {
					let new_items = state.addedItems.filter(item => item.id !== parseInt(action.id, 10))
					let newTotal = state.total - addedItem.price
					return {
						...state,
						addedItems: new_items,
						total: newTotal
					}
				}
				else {
					addedItem.quantity -= 1
					let newTotal = state.total - addedItem.price
					return {
						...state,
						total: newTotal
					}
				}
			}else{
				return {
					...state
				}
			}
		}

		case "ADD_LOCATION": {
			return {
				...state,
				lat: action.loc.lat,
				lng: action.loc.lng
			}
		}
		case "LOGIN_STATUS": {
			return {
				...state,
				loginStatus: !state.loginStatus
			}
		}
		default: {
			return {
				...state
			}
		}
	}
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
// serviceWorker.register();
