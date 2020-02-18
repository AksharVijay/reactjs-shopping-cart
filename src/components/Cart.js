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
            </div>
        )
    }
}