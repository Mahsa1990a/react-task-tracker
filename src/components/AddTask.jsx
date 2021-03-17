//Each input is gonna have it's own piece of state(component level state not App level state)
import { useState } from 'react';

const AddTask = ({ onAdd }) => {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text) {
      alert('Please Add Task');
      return;
    }

    onAdd({ text, day, reminder })

    //To clear form after submit:
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    //it's gonna be a form so change div to form:
    <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label>Task</label>
        {/* When you type in input, it's gonna fire onChange=> it's a controlled component */}
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        {/* becuase it's a checkbox we put : e.currentTarget.checked which give us T or F based box is checked or not */}
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
      
    </form>
  )
}

export default AddTask
