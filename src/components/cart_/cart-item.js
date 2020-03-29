import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props){
        super(props);
        this.addToCart = this.handleInputChange.bind(this);
    }

    handleInputChange() {
    }

    render(){
        const { product } = this.props;
        return(
            <div className="container">
                <p>{product.name+' - '+product.price}</p>
                <button onClick={() => this.props.remove(product)}>remove</button>
            </div>
        )
    }
}

export default CartItem;