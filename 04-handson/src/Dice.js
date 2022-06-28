import React from 'react';

export default class Dice extends React.Component{
    state={
        'number': this.props.InitialNumber
    }

    newNumber=()=>{
        this.setState({
            'number': Math.floor(6*Math.random())+1
        })
    }

    bgColor=()=>{
        if (this.state.number === 1){
            return 'red'
        }else if (this.state.number ===6){
            return 'green'
        }
    }

    render() {
        return(
            <div 
            onClick = {this.newNumber}
            style={{
                'border': "3px solid orange",
                'width': "50px",
                'height': '50px',
                'padding': '2px',
                'textAlign': 'center',
                'backgroundColor': this.bgColor()
            }}>
                {this.state.number}
            </div>
        )
    }
} 