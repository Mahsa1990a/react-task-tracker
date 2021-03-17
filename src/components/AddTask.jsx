//Each input is gonna have it's own piece of state(component level state not App level state)
import { useState } from 'react';

const AddTask = () => {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    //it's gonna be a form so change div to form:
    <form className='add-form'>

      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task'/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time'/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox'/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
      
    </form>
  )
}

export default AddTask
