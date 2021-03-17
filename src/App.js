import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState( //as default it is same taske arr
    [
      {
        id: 1,
        text: "AAA",
        day: "Feb 6th @1:30pm",
        reminder: true 
      },
      {
        id: 2,
        text: "BBB",
        day: "Dec 7th @2:30pm",
        reminder: true 
      },
      {
        id: 3,
        text: "CCC",
        day: "Jan 8th @3:30pm",
        reminder: false 
      }
    ]
  );

  //Add Task
  const AddTask = (task) => {
    console.log(task)
  }

  //Delete Task
  const deleteTask = (id) => {
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
      <Header />
      <AddTask />
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
