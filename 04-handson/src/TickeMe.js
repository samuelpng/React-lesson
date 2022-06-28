import React from 'react';

export default class TickleMe extends React.Component{
    state ={
        'text': this.props.InitialText,
    }

    mouseEnter=()=>{
        this.setState({
            'text': "It tickles!"
        })
    }

    mouseLeave=()=>{
        this.setState({
            'text': this.props.InitialText
        })
    }

    render(){
        return (
            <div 
            onMouseEnter = {this.mouseEnter}
            onMouseLeave = {this.mouseLeave}
            style={{
                'border': "4px solid black",
                'width': '100%',
                'height': '30px'
            }}>
                {this.state.text}
            </div>
        )
    }
}