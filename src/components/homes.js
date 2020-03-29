import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Homes extends Component {

    constructor(props){
        super(props)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handleAddToCart(event) {this.props.addToCart(event.target.dataset.id)}

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <span className="card-title">{item.title} - <b>{item.price}</b></span>
                    </div>
                    <div className="card-content">
                        <button data-id={item.id} to="cart" onClick={this.handleAddToCart}>Add</button>
                    </div>
                    <hr />
                </div>
            )
        })
        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <Link to="cart">Cart</Link>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch({ type: "ADD_TO_CART", id: id })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homes)