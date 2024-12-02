import React from 'react';
 



class Calendar extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    
    this.state = {
       
        date: today.toString() 
    };
  }
   
  
  
  render() {
   
        return <div>
            <div style={{background : 'rgba(73, 114, 133, .6)',
  width: '300px',
  border: '15px #dfebed',
  padding: '50px',
  margin: '20px'  }} >
    <p style={{color:'#dfebed'  }}> { this.state.date  }</p>

            </div>
        </div>
  
   
   
  }
}


export default Calendar;

