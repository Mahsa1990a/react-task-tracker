//will help your code more robust
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1>Hiiii {props.title}</h1>
    </header>
  )
}

//or we don't need to pass it to Header in App, instead we do:
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired, //we can change the type be string, number, ...
}

export default Header;
