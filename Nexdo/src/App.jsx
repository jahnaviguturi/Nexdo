import React, { useEffect, useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newTask  = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='app-container'>
      <h1>Nexdo</h1>
      <p className='tagline'><i>Turn Tasks Into Progress.</i></p>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask} />
      <Progresstracker tasks={tasks}/>

      {tasks.length > 0 && (<button className='clear-btn'
      onClick={clearTasks}>Clear All Tasks</button>)}
    </div>
  )
}
