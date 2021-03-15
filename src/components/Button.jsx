import PropTypes from 'prop-types'


const Button = (props) => {
  return (
    <div>
      <button 
      style={{ backgroundColor: props.color }}
      className='btn'>{props.text}</button>
    </div>
  )
}


Button.defaultProps = {
  color: 'steelBlue',
  text: 'Add'
}

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button
