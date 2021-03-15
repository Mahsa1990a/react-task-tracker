const tasks = [
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
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (<h3>{task.text}</h3>))}
    </>
  )
}

export default Tasks
