import React from 'react';
import BorderedImage from './BorderedImage'
import Alert from './Alert'
import DisplayMessage from './DisplayMessage';
// function sayGoodbye(){
//   g = "<p>Goodbye World</p>"
//   return g
// }

// function BowlingImg(){

// }
//first arg of a component function is all its props in an object





function SumOfTwo(props){
  return (
    <p>{props.intOne} + {props.intTwo} = {props.intOne + props.intTwo}</p>
    )
}

export default function App(props){
  return(
    <React.Fragment>
    <h1>Hello world</h1>
    {/* We can call a function between the {}
      The result of the function can be rendered out
    */}
    {/* {sayHello()} */}
    {/* {sayGoodbye()} */}
    <Alert message="hello world"/>
    <Alert message="Fuel Low"/>
    <DisplayMessage whatever_message="Hello there"/>
    <BorderedImage img_src='bowling.png' img_desc="logo"/>
    <SumOfTwo intOne={5} intTwo={6} />
    </React.Fragment>
  )
}

