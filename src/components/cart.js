import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.handleCheckAll = this.handleCheckAll.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleCheck(event) { this.props.checkItem(event.target.dataset.id) }
    handleCheckAll() { this.props.checkAllItem() }
    handleRemove(event) { this.props.removeItem(event.target.dataset.id) }
    handleIncrement(event) {this.props.incrementItem(event.target.dataset.id)}
    handleDecrement(event) { this.props.decrementItem(event.target.dataset.id) }

    render() {

        let addedItems = this.props.items.length >= 1 ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-desc">
                                <input
                                    type="checkbox"
                                    data-id={item.id}
                                    checked={item.selected}
                                    onChange={this.handleCheck}
                                />
                                <span className="title">{item.title} - {item.price}</span>
                                <p><b>Quantity: {item.quantity}</b></p>
                                <button data-id={item.id} onClick={this.handleIncrement}>+</button>
                                <button data-id={item.id} onClick={this.handleDecrement}>-</button>
                                <button data-id={item.id} onClick={this.handleRemove}>Remove</button>
                            </div>
                            <hr />
                        </li>
                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <Link to="homes">Home</Link>
                    <h5>Total: {this.props.total}</h5>
                    <input
                        type="checkbox"
                        checked={this.props.selectedAll}
                        onChange={this.handleCheckAll}
                    />
                    <ul className="collection">
                        {addedItems}
                    </ul>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total,
        selectedAll: state.selectedAll
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch({ type: "REMOVE_ITEM", id: id }) },
        incrementItem: (id) => { dispatch({ type: "INCREMENT_ITEM", id: id }) },
        decrementItem: (id) => { dispatch({ type: "DECREMENT_ITEM", id: id }) },
        checkItem: (id) => { dispatch({ type: "CHECK_ITEM", id: id }) },
        checkAllItem: () => { dispatch({ type: "CHECK_ALL_ITEM" }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)