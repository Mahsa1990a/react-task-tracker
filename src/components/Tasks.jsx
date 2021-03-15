
//WE WANT tasks TO BE A PART OF COMPONENT, so we use useState

const Tasks = ({ tasks }) => {
  
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
