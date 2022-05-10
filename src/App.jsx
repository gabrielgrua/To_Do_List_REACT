import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'teste 1',
      completed: false
    },
    {
      id: 2,
      title: 'teste 2',
      completed: true
    },
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }
    fetchTasks()
  }, [])

  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function handleTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, completed: !task.completed}        
      } 
      
      return task
    })

    setTasks(newTasks)
  }

  function handleTaskAddition(taskTitle) {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    }]

    setTasks(newTasks)
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route path='/' exact render={() => 
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
        }/>
        <Route path='/:taskTitle' component={TaskDetails}/>
      </div>       
    </Router>
  )
}

export default App