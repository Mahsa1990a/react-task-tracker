import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

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

  //Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
  }

  return (

    //all should be insde dev
    <div className="container">
      <Header />
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
