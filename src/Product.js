import React from 'react';



class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "" 
       
    };

  }

 
  
  render() {
    return   [ (<h1>Product {this.props.name}</h1>)   ] ;
  }
}


export default Product;

