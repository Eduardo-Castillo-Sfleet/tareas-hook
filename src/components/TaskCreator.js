import React, {useState} from 'react';

export const TaskCreator = props => {

    const[newTaskName, setNewTaskName] = useState('')

    const updateTaskName = (e) => setNewTaskName(e.target.value)

    const createNewTask = () => {
        props.callback(newTaskName)
        setNewTaskName('')
    }

    return (
        <div>
            <input type="text"
                value={newTaskName}
                onChange={updateTaskName}
            />
            <button onClick={createNewTask}>
                Add
            </button>
        </div>
    )
}