import React from 'react'

export default class ContactUs extends React.Component {
    state = {
        name: '',
        enquiries: '',
        country: '',
        contact: []
    }

    updateName=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    updateEnquiries=(event)=>{
        this.setState({
            enquiries: event.target.value
        })
    }
    updateCountry=(event)=>{
        this.setState({
            country: event.target.value
        })
    }

    // updateContact=(event)=>{
    //     let currentValues = this.state[event.target.name]
    //     let modifiedValues

    //     if(!currentValues.includes(event.target.value)){
    //         modifiedValues = [...currentValues, event.target.value];
    //     }else{
    //         modifiedValues = currentValues.filter((element)=>{
    //             return element !== event.target.value
    //         })
    //     }
    //     this.setState({
    //         [event.target.name]: modifiedValues
    //     })
    // }

    updateContact=(event)=>{

        if (this.state.fruits.include(event.target.value)){
            //how to remove from an array
            //1. Clone the array
            let cloned = this.state.contact.slice();
            //2. Remove from the clone
            let indexToRemove = -1;
            for (let i=0; i < this.state.contact.length; i++){
                if (this.state.contact[i] === event.target.value){
                    indexToRemove [i];
                    break;
                }
            }
            //3. replace the cloned array
            this.setState({
                contact : cloned
            })
        }else{

        //1. Clone the original array
        let cloned = this.state.contact.slice();
        //2. Update the cloned array
        cloned.push(event.target.value)
        //3. Set the cloned array back into the state
        this.setState({
            contact : cloned
        })
        }
    }

    // updateContact=(event)=>{
    //     //1. Clone the original array
    //     //2. Update the cloned array
    //     let cloned = [...this.state.contact, event.target.value]
    //     //3. Set the cloned array back into the state
    //     this.setState({
    //         fruits : cloned
    //     })
    // }

    clickSubmit=()=>{
            alert(` 
        Full Name: ${this.state.name}
        Enquiry Type: ${this.state.enquiries}
        Country: ${this.state.country}
        Preferred Contact Method: ${this.state.contact}`)
    }

    // updateFormField = (event) => {
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }
    render() {
        return(
            <div>
                <div>
                    <h1>Contact Us</h1>
                    <label>Full Name:</label>
                    <input type="text"
                    // className='form-control'
                    value = {this.state.name}
                    onChange={this.updateName}
                    ></input>
                </div>
                <div>
                    <label>Enquiries:</label>

                    <input type ="radio"
                    className='form-check-input'
                    name="enquiries" value="support"
                    onChange={this.updateEnquiries}
                    checked ={this.state.enquiries==="support"}
                    ></input>
                    <label className="form-check-label">Support</label>

                    <input type ="radio"
                    className='form-check-input'
                    name="enquiries" value="sales"
                    onChange={this.updateEnquiries}
                    checked ={this.state.enquiries==="sales"}
                    ></input>
                    <label className="form-check-label">Sales</label>

                    <input type ="radio"
                    className='form-check-input'
                    name="enquiries" value="marketing"
                    onChange={this.updateEnquiries}
                    checked ={this.state.enquiries==="marketing"}
                    ></input>
                    <label className="form-check-label">Marketing</label>
                </div>
                <div>
                <label>Country:</label>
                    <select name="country" value = {this.state.country}
                    // className="dropdown"
                    onChange={this.updateCountry}>
                        <option value="singapore" checked={this.state.country==="singapore"}>Singapore</option>
                        <option value="malaysia" checked={this.state.country==="malaysia"}>Malaysia</option>
                        <option value="thailand" checked={this.state.country==="thailand"}>Thailand</option>
                    </select>
                    <div>
                    <label>Preferred Contact Method:</label>
                    <input type="checkbox" name="contact" value="email" checked={this.state.contact.includes('email')} onChange={this.updateContact}/>Email
                    <input type="checkbox" name="contact" value="phone" checked={this.state.contact.includes('phone')} onChange={this.updateContact}/>Phone Number
                    <input type="checkbox" name="contact" value="slowmail" checked={this.state.contact.includes('slowmail')} onChange={this.updateContact}/>Slow Mail
                </div>
                </div>
                <button onClick={this.clickSubmit}>Submit</button>
            </div>
        )
    }
}