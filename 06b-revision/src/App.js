import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'

export default class App extends React.Component {
  //mock data
  state= {
    products:[
      {
        _id: 1,
        sku: "1102-Z",
        name: "Brazil Thawed Chicken Breast",
        cost: 100,
        stock: 10
      },
      {
        _id: 2,
        sku: "1103-Z",
        name: "Green Onion",
        cost: 150,
        stock: 7
      }
    ]
  }

// renderProducts() {
//   let productJSX = [];
//   for (let p of this.state.products){
//     productJSX.push(<Product product={p}/>)
//     }
//     return productJSX;
//   }

  render(){
    return(
      <React.Fragment>
        <h1>Our Shop</h1>
        {/* {this.renderProducts()} */}
        {this.state.products.map(p=>
          <Product key={p._id} product={p}/>
          )}
      </React.Fragment>
    )
  }

}