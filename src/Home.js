import React from 'react';
import Product from './Product.js';
import Calendar from './utils/Calendar.js';



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
  
  
  render() {
   
       return  <Calendar></Calendar>;
  
   
   
  }
}


export default Home;

