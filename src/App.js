import React, {useState} from 'react';
import {TaskRow} from './components/TaskRow'
import {TaskBanner} from './components/TaskBanner'
import { TaskCreator } from "./components/TaskCreator";


const App = (props) => {

  const [userName, setUserName] = useState('armando')
  const [taskItems, setTaskItems] = useState([
    {key: 0, nombre: 'Tarea 1', done: false},
    {key: 1, nombre: 'Tarea 2', done: true},
    {key: 2, nombre: 'Tarea 3', done: false},
    {key: 3, nombre: 'Tarea 4', done: true},
  ])

  const toggleTask = task => setTaskItems(taskItems.map(t => (t.key === task.key ? {...t, done: !t.done} : t)))

  const pintarTasks = () => taskItems.map(task => (
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
        {pintarTasks()}
      </tbody>
    </table>
    <TaskCreator callback={createNewTask}/>
    </div>
  );
}

export default App;
