import React from 'react'
import ContactForm from './ContactForm'

export default function Enquiry(props) {
    
    return (
        <React.Fragment>
            <input type="radio"
                name="enquiry"
                value= {props.enquiry.value}
                // onChange={this.updateEnquiry}
                checked={this.state.enquiry === `${props.enquiry.value}`}
            />
            <label>{props.enquiry.display}</label>
        </React.Fragment>
    )
}