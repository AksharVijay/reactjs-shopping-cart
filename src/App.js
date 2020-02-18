import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { render } from '@testing-library/react';

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
      <div class="row">
        <div class="col-lg-8">
          <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
        </div>
        <div class="col-lg-4">
          <Cart />

        </div>

      </div>

    </div>
  );
}
}

export default App;
