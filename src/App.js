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
  }
  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data=>
      this.setState({
        products:data,filteredProducts:data
      }));

  }
  render(){
  return (
    <div className="App">
      <h2>Shopping Cart Application</h2>
      <hr/>
      <div className="row">
        <div className="col-lg-8">
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
        </div>
        <div className="col-lg-4">
          <Cart  cartItems={this.state.cartItems} />

        </div>

      </div>

    </div>
  );
}
}

export default App;
