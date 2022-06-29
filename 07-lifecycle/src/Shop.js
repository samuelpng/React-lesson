import React from 'react'
import axios from 'axios'

export default class Shop extends React.Component{
    state = {
        products: [],
        loaded: false
    }

    async componentDidMount(){
        //using axios, json file has to be in public folder
        let response = await axios.get('./products.json')
        this.setState({
            products: response.data,
            loaded: true
        })
    }

    render(){
        return(
            <React.Fragment>
                <ul>
                    <h1>Our Shop</h1>
                    {
                    this.state.loaded ? 
                    <ul>
                    {this.state.products.map(p=> <li>{p.name} - {p.cost/100}</li>)}
                    </ul>
                    :
                    <p>Loading please wait</p>
                    }
                </ul>
            </React.Fragment>
        )
    }
}