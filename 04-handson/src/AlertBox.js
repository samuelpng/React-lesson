import React from 'react';

export default class AlertBox extends React.Component{
    state ={
        'message' : this.props.InitialMessage
    }

    pressMe=()=>{
        alert("This is me")
    }

render() {
    return (
        <div onClick = {this.pressMe} style={{
            'border': "4px solid black",
            'width': '100%',
            'height': '30px'
        }}>{this.state.message}</div>
    )
}
}