import { FaTimes } from 'react-icons/fa' //fa:font awsome , FaTimes: icon zarbdar

const Task = ( { task }) => {
  return (
    <div className='task'>
      <h3>
        {task.text} <FaTimes />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
