import React, {Component} from 'react';
import util from '../util';
export default class Products extends Component{
    render(){
        const productItems = this.props.products.map(product =>(
            <div className ="col-md-4">
                <div className="card">
                    <div className="card-body">
        <h5>{product.name}</h5>
        <p>{util.formatCurrency(product.price)}</p>
        <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to Cart</button>
                    </div>
                </div>
            </div>

        ))
        return (
            <div className="row">
            {productItems}
            </div>
        )
    }
}