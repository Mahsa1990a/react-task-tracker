// const tasks = [
//   {
//     id: 1,
//     text: "AAA",
//     day: "Feb 6th @1:30pm",
//     reminder: true 
//   },
//   {
//     id: 2,
//     text: "BBB",
//     day: "Dec 7th @2:30pm",
//     reminder: true 
//   },
//   {
//     id: 3,
//     text: "CCC",
//     day: "Jan 8th @3:30pm",
//     reminder: false 
//   }
// ];

//WE WANT tasks TO BE A PART OF COMPONENT, so we use useState

import { useState } from 'react';

const Tasks = () => {

  //using useState:
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
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
