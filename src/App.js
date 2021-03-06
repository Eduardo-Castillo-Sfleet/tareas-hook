import React, { useState, useEffect } from 'react';
import {TaskRow} from './components/TaskRow'
import {TaskBanner} from './components/TaskBanner'
import { TaskCreator } from "./components/TaskCreator";
import { TaskDone } from "./components/TaskDone";

const App = (props) => {

  const [userName, setUserName] = useState('armando')
  const [taskItems, setTaskItems] = useState([
    {key: 0, nombre: 'Tarea 1', done: false},
    {key: 1, nombre: 'Tarea 2', done: true},
    {key: 2, nombre: 'Tarea 3', done: false},
    {key: 3, nombre: 'Tarea 4', done: true},
  ])
  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if(data != null){
      setTaskItems(JSON.parse(data))
    } else {
      setUserName('Armando')
      setTaskItems([
        {key: 0, nombre: 'Tarea 1 L', done: false},
        {key: 1, nombre: 'Tarea 2 L', done: true},
        {key: 2, nombre: 'Tarea 3 L', done: false},
        {key: 3, nombre: 'Tarea 4 L', done: true},
      ])
      setShowCompleted(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const toggleTask = task => setTaskItems(taskItems.map(t => (t.key === task.key ? {...t, done: !t.done} : t)))

  const pintarTasks = (doneValue) => taskItems.filter(task => task.done === doneValue).map(task => (
      <TaskRow task={task} key={task.key} toggleTask={toggleTask}></TaskRow>
  ))

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.nombre === taskName)){
      setTaskItems([...taskItems, {
        key: taskItems.length,
        nombre: taskName,
        done: false
      }])
    }
  }

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
     <table>
      <thead>
        <tr>
          <th>Descripcion</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {pintarTasks(false)}
      </tbody>
    </table>
    <TaskDone callback={checked => setShowCompleted(checked)}/>

    {showCompleted && (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {pintarTasks(true)}
        </tbody>
      </table>
    )}

    <TaskCreator callback={createNewTask}/>
    </div>
  );
}

export default App;
