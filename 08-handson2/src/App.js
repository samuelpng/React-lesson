import React from 'react'
import BudgetTracker from './BudgetTracker'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App(){
  return(
    <React.Fragment>
      <div className = "container">
      <BudgetTracker/>
      </div>
    </React.Fragment>
  )
}