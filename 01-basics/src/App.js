import React from 'react'; //eqv: const React = require('react)
import logo from './logo.svg'
import './style.css'


//creates a react component
//App.js is the entry point to all react application by default
function App(){
  //a React component always must return JSX
  //only one parent is allowed (use React.Fragment as an invinsible div)
  return(
    <React.Fragment>
    <h1 style={
    {
      color:"green",
      backgroundColor:'yellow'
    }
      }>Hello world</h1>
    <p className="Urgent">Let there be light</p>
    <img src ={logo}/>
    <img src ={require('./joystick.png')}/>
    </React.Fragment>
  )
}

//we must export out the component
export default App; //eqv: module.exports =  App;
