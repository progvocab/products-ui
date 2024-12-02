import React from 'react';
import './App.css';
import Home from './Home.js';



function App() {
  /*console.log(localStorage.getItem('accessToken'));
  if (localStorage.getItem('accessToken') == null || localStorage.getItem('accessToken') == "" ) {
    if(window.location.hash != null  && window.location.hash != "" ){
      localStorage.setItem('accessToken' , window.location.hash);
    } 
  }  
  if(localStorage.getItem('accessToken') == null || localStorage.getItem('accessToken') == ""){
    window.location = 'https://apigate.auth.us-east-2.amazoncognito.com/login?client_id=5a8hvi9l4q0nid79soj3u7n71b&response_type=token&scope=apigate/dev+apigate/read&redirect_uri=http://localhost:3000/';
  }else{
    */
    return (
      <div  >
        <Home></Home>
      </div>
    );
 // }   
}

export default App;
