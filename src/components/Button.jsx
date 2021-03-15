const Button = (props) => {
  return (
    <div>
      <button 
      style={{ backgroundColor: props.color }}
      className='btn'>{props.text}</button>
    </div>
  )
}

// Button.defaultProps = {
//   color: 'green',
//   text: 'Hello'
// }

export default Button
