import PropTypes from 'prop-types'


// const Button = (props) => { OR:
const Button = ({color, text, onClick}) => { //color, text, onClick are props

  // const onClick = (event) => {
  // }
  return (
    <div>
      <button
      onClick={onClick}
      // style={{ backgroundColor: props.color }} OR:
      style={{ backgroundColor: color }}
      // className='btn'>{props.text}</button> OR:
      className='btn'>{text}</button>
    </div>
  )
}

// Button.defaultProps = {
//   color: 'steelBlue',
//   text: 'Add',
// }

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
