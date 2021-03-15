import Task from './Task';

//WE WANT tasks TO BE A PART OF COMPONENT, so we use useState

const Tasks = ({ tasks, onDelete }) => {
  
  return (
    <>
      {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Tasks
