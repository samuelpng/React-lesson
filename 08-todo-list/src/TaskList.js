import React from 'react'

export default class TaskList extends React.Component {
    state = {
        tasks: [
            {
                _id: 1,
                description: 'Walk the dog',
                done: false
            },
            {
                _id: 2,
                description: 'Water the plants',
                done: false
            },
            {
                _id: 3,
                description: 'Pay the bills',
                done: false
            }
        ],
        newTaskName: '',
        taskBeingEdited: null, //alternatively, store the _id
        modifiedTaskName: ''
    }

    updateFormField = (event) => {
        //event.target will contain element that event happen on
        //event.target.value will contain the value of the target element
        //
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateTaskDone = (t) => {
        //clone
        let clonedTask = { ...t, done: !t.done };
        //replace an element into the middle of an array
        //1. Find the index of the modified task
        let index = this.state.tasks.findIndex(function (t) {
            if (t._id === clonedTask._id) {
                return true;
            } else {
                return false;
            }
        })
        //non-functional updating an array
        // let clonedTaskArray = this.state.tasks.slice();
        // clonedTaskArray[index] = clonedTask;
        // this.setState({
        //     tasks: clonedTaskArray
        // })
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index),
                clonedTask,
                ...this.state.tasks.slice(index + 1)
            ]
        })
    }

    addNewTask = () => {
        let newTask = {
            _id: Math.floor(Math.random() * 100000 + 1),
            description: this.state.newTaskName,
            done: false
        }
        //Step 1: Clone the Array
        let cloned = this.state.tasks.slice();
        //Step 2: Modify the cloned array
        cloned.push(newTask)
        //Step 3
        this.setState({
            tasks: cloned,
            taskBeingEdited: null
        })
    }

    displayTask = (t) => {
        return (
            <li className="mt-3">
                {t.description}
                <input type="checkbox"
                    className="form-check-input ms-3"
                    checked={t.done} onChange={() => {
                        this.updateTaskDone(t)
                    }} />
                <button className="btn btn-warning btn-sm ms-2"
                    onClick={() => {
                        this.setState({
                            taskBeingEdited: t,
                            modifiedTaskName: t.description
                        })
                    }}
                >Edit</button>
                <button className="btn btn-warning btn-sm ms-2"
                    onClick={() => {
                        this.deleteTask(t)
                    }}
                >Delete</button>
            </li>
        )
    }

    displayEditTask(t) {
        return (<li className="mt-3">
            <input type="text"
            name="modifiedTaskName"
            value={this.state.modifiedTaskName}
            onChange={this.updateFormField}/>
            <button className="btn btn-warning btn-sm ms-3" onClick={this.updateTask}>Update</button>
        </li>)
    }

    updateTask=()=>{
        const modifiedTask = {
                ...this.state.taskBeingEdited,  // copy the key/value pairs from the original task object
                description: this.state.modifiedTaskName //update the description
        }
        // 0. find the index of the task that we want to update by matching the id with the id of the modified object
        let index = this.state.tasks.findIndex(t=> t._id === modifiedTask._id)
        //1. clone the existing array
        let cloned = this.state.tasks.slice()
        //2. modify the array
        cloned.splice(index, 1, modifiedTask)
        //3. replace the original array in the state with the modified one
        this.setState({
            tasks: cloned,
            taskBeingEdited: null
        })
    }

    deleteTask=(t)=>{
        //find index of task I want to delete
        let index =  this.state.tasks.findIndex(tasks => tasks._id === t._id);
        //remove from the middle technique
        const cloned = [
            ...this.state.tasks.slice(0, index),
            ...this.state.tasks.slice(index + 1)
        ];

        this.setState({
            tasks : cloned
        })
        }
    

    render() {
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                {this.state.tasks.map(t => (
                    <React.Fragment key={t._id}>

                        {(this.state.taskBeingEdited === null || this.state.taskBeingEdited._id !== t._id) ?

                            this.displayTask(t)
                            :
                            this.displayEditTask(t)
                        }
                    </React.Fragment>
                ))}
                <h2 className="mt-3">Add New Task</h2>
                <div>
                    <label>
                        Task Name:
                    </label>
                    <input type="text"
                        name="newTaskName"
                        value={this.state.newTaskName}
                        className="form-control"
                        onChange={this.updateFormField}>
                    </input>
                    <button className="mt-1 btn btn-warning" onClick={this.addNewTask}>Add Task</button>
                </div>
            </React.Fragment>
        )
    }
}