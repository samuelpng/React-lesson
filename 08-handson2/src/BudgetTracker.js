import React from 'react'
import Expenses from './Expenses'
import EditExpense from './EditExpense'

export default class BudgetTracker extends React.Component {
    state = {
        expenses: [
            {
                _id: 1,
                description: 'Textbook',
                cost: 5000
            },
            {
                _id: 2,
                description: 'Phone',
                cost: 20000
            },
            {
                _id: 3,
                description: 'Pen',
                cost: 300
            }
        ],
        expenseBeingEdited: null,
        expenseBeingDeleted: null,
        modifiedExpenseDescription: '',
        modifiedExpenseCost: 0
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    beginEdit = (expense) => {
        this.setState({
            expenseBeingEdited: expense,
            modifiedExpenseDescription: expense.description,
            modifiedExpenseCost: expense.cost / 100
        })
    }



    updateExpense=()=>{
        const modifiedExpense = {
            ...this.state.expenseBeingEdited,
            description: this.state.modifiedExpenseDescription,
            cost: this.state.modifiedExpenseCost * 100
        }
        let index = this.state.expenses.findIndex(e=> e._id === modifiedExpense._id)
        let cloned = this.state.expenses.slice()
        cloned.splice(index,1,modifiedExpense)
        this.setState({
            expenses: cloned,
            expenseBeingEdited: null
        })
    }

    beginDelete = (expense) => {
        this.setState({
            expenseBeingDeleted: expense
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1>Budget Tracker</h1>
                {this.state.expenses.map(expense => {
                    if (this.state.expenseBeingEdited !== null && this.state.expenseBeingEdited._id === expense._id) {
                        return (
                            <EditExpense
                                _id = {expense.id}
                                modifiedExpenseDescription={this.state.modifiedExpenseDescription}
                                modifiedExpenseCost={this.state.modifiedExpenseCost}
                                updateFormField={this.updateFormField}
                                updateExpense={this.updateExpense}
                            />
                        )
                    } else if (this.state.expenseBeingDeleted !== null && this.state.expenseBeingDeleted._id === expense._id) {
                        return (
                            <h1> I'm being Deleted</h1>
                        )
                    } else {
                        return (
                            <Expenses
                                _id={expense._id}
                                description={expense.description}
                                cost={expense.cost}
                                expense={expense}
                                beginEdit={() => {
                                    this.beginEdit(expense)
                                }}
                                beginDelete={() => {
                                    this.beginDelete(expense)
                                }}
                            />
                        )
                    }
                }
                )}
            </React.Fragment >
        )
    }
}



    // displayExpenses = (e) => {
    //     return (
    //         <React.Fragment key={e._id}>
    //             <div className="card">
    //                 <div className="card-body">
    //                     <div className="card-title">
    //                         <h4>Item: {e.description}</h4>
    //                     </div>
    //                     <div ClassName="card-text">
    //                         <h5>Cost: {e.cost / 100}</h5>
    //                     </div>
    //                     <button className="btn btn-success btn-sm"
    //                     onClick={()=>{
    //                         this.setState({
    //                             expenseBeingEdited : e ,
    //                             modifiedExpenseName: e.description,
    //                             modifiedExpenseCost: e.cost / 100
    //                         })
    //                     }}
    //                     >
    //                         Update
    //                     </button>
    //                     <button className="btn btn-danger btn-sm ms-1"
    //                     onClick={()=>{
    //                         this.setState({
    //                             expenseBeingDeleted: e
    //                         })
    //                     }}>
    //                         Delete
    //                     </button>
    //                 </div>
    //             </div>
    //         </React.Fragment>
    //     )
    // }

        // displayEditExpense=(expense)=>{
    //    return(
    //    <React.Fragment>
    //         <div className="card">
    //             <div className="card-body">
    //                 <div className="card-title">
    //                     <input type="text"
    //                     name="modifiedExpenseName"
    //                     value={this.state.modifiedExpenseName}
    //                     onChange={this.updateFormField}/>
    //                     <input type="text"
    //                     name="modifiedExpenseEmail"
    //                     value={this.state.modifiedExpenseEmail}
    //                     onChange={this.updateFormField}/>
    //                 </div>
    //             </div>
    //         </div>
    //     </React.Fragment>
    //    )
    // }

        // updateExpense=()=>{
    //    const cloned = this.state.expenses.slice();
    //     let changedExpense = {...this.state.expenseBeingEdited};
    //     changedExpense.description = this.state.modifiedExpenseDescription;
    //     changedExpense.cost = this.state.modifiedExpenseCost * 100
    //     let index = this.state.expenses.findIndex(e => e._id = changedExpense._id)
    //     cloned[index] = changedExpense;
    //     this.setState({
    //         expenses: cloned,
    //         expenseBeingEdited: null
    //     })
    //    }