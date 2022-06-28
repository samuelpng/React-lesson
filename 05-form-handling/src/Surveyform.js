import React from 'react'

export default class Surveyform extends React.Component {
    //SEIPO
    //state: what are the state variables of the component (ie. what are the data that component is in charge of)
    state = {
        'name': 'Jon Snow',
        'email': 'jonsnow@abc.com',
        'color': '',
        'country':'',
        'fruits': []
    }

    updateName=(event)=>{
        //event element will always refer to the element the event happens on
        //event.target.value will be the new value for the  
        this.setState({
            'name': event.target.value
        })
    }

    updateEmail=(event)=>{
        this.setState({
            'email': event.target.value
        })
    }

    updateColor=(event)=>{
        this.setState({
            'color': event.target.value
        })
    }

    updateCountry=(event)=>{
            this.setState({
                'country': event.target.value
            })
    }

    
    updateFruits=(event)=>{
        let currentValues = this.state[event.target.name];
        let modifiedValues

        if(!currentValues.includes(event.target.value)){
            modifiedValues = [...currentValues, event.target.value];
        }else{
            modifiedValues = currentValues.filter((element)=>{
                return element !== event.target.value
            })
        }
        this.setState({
            [event.target.name]: modifiedValues
        })
    }
        
    clickSubmit=()=>{
        alert(`Name: ${this.state.name}
        Email: ${this.state.email}
        Color: ${this.state.color}
        Country: ${this.state.country}
        Fruits: ${this.state.fruits}`)
    }

    render(){
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text"
                    className = "form-control"
                    value = {this.state.name}
                    onChange={this.updateName}
                    >
                    </input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.updateEmail}
                        >
                    </input>
                </div>
                <div>
                    <label>Favourite Color:</label>

                    <input type ='radio'
                    name='colors' value='red'
                    className='form-check-input'
                    onChange={this.updateColor}
                    checked={this.state.color === 'red'}
                    ></input>
                    <label className="form-check-label">Red</label>

                    <input type ='radio'
                    name='colors' value='green'
                    className='form-check-input'
                    onChange={this.updateColor}
                    checked={this.state.color === 'green'}
                    ></input>
                    <label className="form-check-label">Green</label>

                    <input type ='radio'
                    name='colors' value='blue'
                    className='form-check-input'
                    onChange={this.updateColor}
                    checked={this.state.color === 'blue'}
                    ></input>
                    <label className="form-check-label">Blue</label>
                </div>
                <div>
                    <label>Country:</label>
                    <select name="country" value = {this.state.country}
                    className="dropdown"
                    onChange={this.updateCountry}>
                        <option value="singapore" checked={this.state.country==="singapore"}>Singapore</option>
                        <option value="malaysia" checked={this.state.country==="malaysia"}>Malaysia</option>
                        <option value="indonesia" checked={this.state.country==="indonesia"}>Indonesia</option>
                    </select>
                </div>
                <div>
                    <label>Fruits:</label>
                    <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.includes('apple')} onChange={this.updateFruits}/>Apple
                    <input type="checkbox" name="fruits" value="orange" checked={this.state.fruits.includes('orange')} onChange={this.updateFruits}/>Orange
                    <input type="checkbox" name="fruits" value="pineapple" checked={this.state.fruits.includes('pineapple')} onChange={this.updateFruits}/>Pineapple
                    <input type="checkbox" name="fruits" value="durian" checked={this.state.fruits.includes('durian')} onChange={this.updateFruits}/>Durian
                </div>
                <button onClick={this.clickSubmit}>Submit</button>
            </div>
        )
    }
}