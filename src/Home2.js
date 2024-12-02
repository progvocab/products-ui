import React from 'react';
import Product from './Product.js';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
       products:[  ]
    };
  }
  /*static getDerivedStateFromProps(nextProps, prevState) {
    // do things with nextProps.someProp and prevState.cachedSomeProp
    return {
      cachedSomeProp: nextProps.someProp,
      // ... other derived state properties
    };
  }*/
  componentDidMount() {
    fetch(`http://localhost:8082/products/list/all`
      ,{ 
      method: 'get', 
      headers: new Headers({
         'test':'test'
      }) }
    )
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          products: result.resp
        });
      })
  }
  
  render() {
  const ex2 = this.state.products.map(
      (product) => <Product name={product.productName} ></Product>
  );
   
  return ex2;
  }
}


export default Home2;

