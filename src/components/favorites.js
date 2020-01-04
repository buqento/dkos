import React from 'react';
import Axios from 'axios';

export default class Favorites extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			rooms: []
		}
	}

	componentDidMount(){
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/roomz`)
            .then(response => {
                this.setState({ rooms: response.data })
                console.log(this.state.rooms)
            }).catch(error => {
                console.warn(error)
            })
	}

    handleFavorites = () => {
    	const user = JSON.parse(localStorage.getItem('user'))
        const favorites = this.state.rooms[0].favorites
        favorites.push(parseInt(user.profile.id))
        console.log(favorites)
        const data = {favorites: favorites}
        return fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/roomz/1`,{
        	        method:'PUT',
        	        body: JSON.stringify(data),
        	        headers: {
        	        	'Content-Type': 'application/json'
        	        }
                }).then(res => {
                	return res
                }).catch(err => {
                	console.log(err)
                })
    }

	render(){
		return(<>
			<button onClick={this.handleFavorites}>Fav</button>
			</>)
	}
}