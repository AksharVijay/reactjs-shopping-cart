import React, {Component} from 'react';
import util from '../util';
export default class Cart extends Component{
    render(){
        const { cartItems } = this.props;
        return(
            <div className="alert alert-info">
                {
                    cartItems.length === 0
                    ? "Cart is empty":
                    <div>You have {cartItems.length} items in the cart. <hr/></div>
                }
                {
                    cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <p><b>{item.name}</b></p>
                                    {item.count} X {util.formatCurrency(item.price)}
                                    <br/>
                                    <button style={{ float : 'right'}} className="btn btn-danger" onClick={(e) => this.props.handleRemoveFromCart(e, item)}>Remove</button>
                                </li>)}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}