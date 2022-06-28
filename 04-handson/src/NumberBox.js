import React from 'react';
//class is a template for an object
//extends means inheir
export default  class NumberBox extends React.Component {
    state={
        'count': this.props.initialValue
    }

    plusButton=()=>{
        this.setState({
            'count': this.state.count + 1
        })
    }

    minusButton=()=>{
        this.setState({
            'count': this.state.count - 1
        })
    }

    //render() function must have
    //whatever JSX return from render function is its output
    render() {
        return(
            <React.Fragment>
            <div style={
                {
                    "border": "2px solid black",
                    "padding": "10px",
                    "width": "50px"
                }
            }>{this.state.count}{this.state.count%2===0?' Even':""}</div>
            <button onClick = {this.plusButton}
            style={
                {
                    "border": '2px solid green'
                }
            }>+</button>
            <button onClick = {this.minusButton}
            style={
                {
                    "border": '2px solid red'
                }
            }>-</button>
            </React.Fragment>
        )
    }
}
