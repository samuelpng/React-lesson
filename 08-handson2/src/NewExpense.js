import React from 'react'

export default function NewExpense(props) {
    return (
        <React.Fragment>
            <div className="mt-5">
                <label>Add New Expense</label><br/>
                <label>Name:</label>
                <input type="text"
                    name="newExpenseDescription"
                    value={props.newExpenseDescription}
                    className="form-control"
                    onChange={props.updateFormField}
                />
                <label>Cost:</label>
                <input type="text"
                    name="newExpenseCost"
                    value={props.newExpenseCost}
                    className="form-control"
                    onChange={props.updateFormField}
                />
            </div>
            <button className="btn btn-warning btn-sm mt-3"
                onClick={props.addNewExpense}>Add Item</button>
        </React.Fragment>
    )
}

