//in order to load tasks when page load we need use hook: useEffect to deal with side effect
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  //to press Add button show form and hidden it
  const [showAddTask, setShowAddTask] = useState(false)

  //as default it is same taske arr
  const [tasks, setTasks] = useState([]); //we deleted obj and moved it to db.json to fetch data from there

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks:
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    // console.log("data", data);
    return data;
  }

  //Add Task
  const addTask = (task) => {
    // console.log(task) instaed of console.log we wanna add it into our state so:
    const id = Math.floor(Math.random() * 10000) + 1; //gives us random number
    //newTask will be an obj with id and everything from task in line 33
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]); //so now we can add new task
  }

  //Delete Task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => { //we want with double click toggle the reminder From false to True and wiseversa
    // console.log(id);
    //map through tasks and if task.id === id true => ...task means copy all of the task and reminder: !task.reminder means change the reminder
    //if it's false change to to True and wiseversa and false => just return task
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder } : task));
  }

  return (

    //all should be insde dev
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* if showAddTask is true the show AddTask component : */}
      { showAddTask && <AddTask onAdd={addTask} /> }
      
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;


// Class based Components:

// import React, { Component } from 'react';
// import Header from './components/Header';

// class App extends Component {
//   render() {
//     return (<h1>Hello from class</h1>)
//   }
// }

// export default App;
