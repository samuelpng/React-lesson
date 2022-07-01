import React from 'react'
import Expenses from './Expenses'
import EditExpense from './EditExpense'
import DeleteExpense from './DeleteExpense'
import NewExpense from './NewExpense'

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
        modifiedExpenseCost: 0,
        newExpenseDescription: '',
        newExpenseCost: ''
    }

    addNewExpense = () => {
        let newExpense = {
            _id: Math.floor(Math.random() * 100000 + 1),
            description: this.state.newExpenseDescription,
            cost: parseFloat(this.state.newExpenseCost) * 100
        }

        let cloned = this.state.expenses.slice();
        cloned.push(newExpense)
        this.setState({
            expenses: cloned
        })
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

    updateExpense = () => {
        const modifiedExpense = {
            ...this.state.expenseBeingEdited,
            description: this.state.modifiedExpenseDescription,
            cost: this.state.modifiedExpenseCost * 100
        }
        let index = this.state.expenses.findIndex(e => e._id === modifiedExpense._id)
        let cloned = this.state.expenses.slice()
        cloned.splice(index, 1, modifiedExpense)
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

    cancelDelete = () => {
        this.setState({
            expenseBeingDeleted: null
        })
    }

    processDelete = (expense) => {
        let index = this.state.expenses.findIndex(e => e._id === expense._id)
        const cloned = [
            ...this.state.expenses.slice(0, index),
            ...this.state.expenses.slice(index + 1)
        ];

        this.setState({
            expenses: cloned
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
                                _id={expense.id}
                                modifiedExpenseDescription={this.state.modifiedExpenseDescription}
                                modifiedExpenseCost={this.state.modifiedExpenseCost}
                                updateFormField={this.updateFormField}
                                updateExpense={this.updateExpense}
                            />
                        )
                    } else if (this.state.expenseBeingDeleted !== null && this.state.expenseBeingDeleted._id === expense._id) {
                        return (
                            <DeleteExpense
                                expense={expense}
                                description={expense.description}
                                processDelete={() => {
                                    this.processDelete(expense)
                                }}
                                cancelDelete={() => {
                                    this.cancelDelete(expense)
                                }}
                            />
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
                <NewExpense
                    newExpenseDescription={this.newExpenseDescription}
                    newExpenseCost={this.newExpenseCost}
                    updateFormField={this.updateFormField}
                    addNewExpense={this.addNewExpense}
                />
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

    // deleteExpense=(expense)=>{
    //     return(
    //         <React.Fragment>
    //             <div className="card">
    //                 <div className="card-body">
    //                 <div className="card-title">
    //                     <h4>Are you sure you wan to delete {expense.description}</h4>
    //                     <button className="btn btn-danger btn-sm"
    //                     onClick={this.processDelete}
    //                     >Yes</button>
    //                     <button
    //                     className="btn btn-success btn-sm ms-1"
    //                     onClick ={()=>{
    //                         this.CancelDelete(expense)}}
    //                     >No</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </React.Fragment>
    //     )
    // }

    // <div className="mt-5">
    //             <label>Add New Expense</label><br/>
    //             <label>Name:</label>
    //             <input type="text"
    //             name="newExpenseDescription"
    //             value={this.newExpenseDescription}
    //             className="form-control"
    //             onChange={this.updateFormField}
    //             />
    //             <label>Cost:</label>
    //             <input type="text"
    //             name="newExpenseCost"
    //             value={this.newExpenseCost}
    //             className="form-control"
    //             onChange={this.updateFormField}
    //             />
    //             </div>
    //             <button className="btn btn-warning btn-sm mt-3"
    //             onClick={this.addNewExpense}>Add Item</button>