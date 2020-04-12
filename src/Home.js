import React from 'react';
import Product from './Product.js';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Home" ,
       products:[ "Sony A5" , "Nikon D70","Canon C3"]
    };
  }

   
  
  render() {
  const ex2 = this.state.products.map(
      (product) => <Product name={product} ></Product>
  );
   
  return ex2;
  }
}


export default Home;

