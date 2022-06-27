import React from 'react';
//class is a template for an object
//extends means inheir
export default  class NumberBox extends React.Component {
    state={
        'count': 10
    }
    //render() function must have
    //whatever JSX return from render function is its output
    render() {
        return(
            <div style={
                {
                    "border": "1px solid black",
                    "padding": "10px",
                    "width": "20px"
                }
            }>{this.state.count}</div>
        )
    }
}
