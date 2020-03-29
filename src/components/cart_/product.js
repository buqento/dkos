import React, { Component } from 'react';

const Item = (props) => {
    return(
        <div>
            <p>{props.name+' '+props.price}</p>
            <button onClick={props.add}>Tambah</button>
        </div>
    )
}

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product) {
        let data = localStorage.getItem('cart');
        data = data ? JSON.parse(data) : [];
        data.push(product);
        localStorage.setItem('cart', JSON.stringify(data));
    }

    render(){
        const products = [
            {
                id: 1,
                name: 'beras',
                price: 5000
            },
            {
                id: 2,
                name: 'gula',
                price: 7000
            },
            {
                id: 3,
                name: 'terigu',
                price: 6500
            }
        ]
        return(
            <div className="container">
                {
                    products.map((product, index) => 
                    <div key={index}>
                        <Item 
                        name={product.name} 
                        price={product.price}
                        add={()=>{this.addToCart(product)}} />
                    </div>
                    ) 
                }
            </div>
        )
    }
}

export default Product;