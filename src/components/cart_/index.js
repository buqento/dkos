import React, { Component } from 'react';
import CartItem from './cart-item';

class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
        this.removeItem = this.removeItem.bind(this)
    }

    componentDidMount(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        this.setState({products: cart})
        // console.log(cart)
        // if (!cart) return; 
    }

    removeItem(product){
        const { products } = this.state;
        let itemx = products.filter((item) => item.id !== product.id);
        let cart = JSON.parse(localStorage.getItem('cart'));
        let item = product.id - 1;
        delete cart[item];
        // delete cart[product.id.toString()];
        localStorage.setItem('cart', JSON.stringify(cart));

        // let total = this.state.total - (product.qty * product.price) 

        this.setState({products: itemx});
    }

    render(){
        let data = JSON.parse(localStorage.getItem('cart'))
        return(
            <div className="container">
                {
                    data.map((product, index) => 
                        <CartItem product={product} remove={this.removeItem} key={index}  />
                    ) 
                }
            </div>
        )
    }
}

export default Cart;