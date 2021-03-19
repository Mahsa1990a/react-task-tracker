import Task from './Task';

//WE WANT tasks TO BE A PART OF COMPONENT, so we use useState

const Tasks = ({ tasks, onDelete, onToggle }) => {
  
  return (
    <>
      {tasks.map((task, index) => (
      <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
