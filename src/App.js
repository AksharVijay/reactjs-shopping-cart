import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import  Cart from './components/Cart';
//import { render } from '@testing-library/react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {products:[], filteredProducts:[], cartItems:[],};
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }
  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data=>
      this.setState({
        products:data,filteredProducts:data
      }));
      if(localStorage.getItem("cartItems")){
        this.setState({
          cartItems: JSON.parse(localStorage.getItem("cartItems"))
        });
      }

  }
  handleAddToCart =(e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      
      cartItems.forEach (cp => {
        if (cp.name === product.name){
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });
      if(!productAlreadyInCart){
        cartItems.push({...product, count: 1});
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems};
    });
  };
  handleRemoveFromCart = (e, item) =>{
    this.setState(state => {
      const cartItems = this.state.cartItems.filter(elm => elm.name !== item.name);
      localStorage.setItem("cartItems", cartItems);
      return{cartItems};
    });
  };
  render(){
  return (
    <div className="container">
      <h2>Shopping Cart Application</h2>
      <hr/>
      <div className="row">
        <div className="col-lg-8">
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
        </div>
        <div className="col-lg-4">
          <Cart  cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />

        </div>

      </div>

    </div>
  );
}
}

export default App;
