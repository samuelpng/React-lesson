import React from 'react'

export default function Product(props){
    return(
        <div className="card-body">
      <h3 className="card-tile">{props.product.name}</h3>
      <ul>
        <li>Cost: {props.product.cost}</li>
        <li>Stock: {props.product.stock}</li>
      </ul>
    </div>
    )
}