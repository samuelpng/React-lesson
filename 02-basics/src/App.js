import React from 'react';

// function sayGoodbye(){
//   g = "<p>Goodbye World</p>"
//   return g
// }

// function BowlingImg(){

// }
//first arg of a component function is all its props in an object
function Alert(props){
  console.log(props)
  
  return <div>Danger Danger Will Robinson {props.message}</div> 
}

function DisplayMessage(props){
  return (
    <div>{props.whatever_message}</div>
  )
}

function BorderedImage(props) {
  return (
      <img src={require('./' + props.img_src)} alt={props.img_desc} width="100px" style ={
      {"border": "4px solid red"}
      }
      />
  )
}

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
