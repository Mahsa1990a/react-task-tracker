//will help your code more robust
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>Hiiii {title}</h1>
      {/* color, text, onClick are props */}
      <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}
      />
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

//instead of inline style we use this(css in jsx):
// const headingStyle = {
//   color: 'blue', 
//   backgroundColor: 'black'
// }

export default Header;
