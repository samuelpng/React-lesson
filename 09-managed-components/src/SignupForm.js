import React from 'react'

export default class SingupForm extends React.Component {
    state = {
        email: '',
        password: '',
    }

    updateFormField = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    render(){
        return(
            <React.Fragment>
                {
                    this.state.submitted
                }
                <div>
                    <label>Email:</label>
                    <input type ='text'
                    name="email" 
                    value={this.state.name}
                    onChange={this.UpdateFormField}
                    />
                </div>
                <div>
                <label>Password:</label>
                    <input type ='password'
                    name="password" 
                    value={this.state.password}
                    onChange={this.UpdateFormField}
                    />
                </div>
            </React.Fragment>
        )
    }
}