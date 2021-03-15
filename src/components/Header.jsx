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

export default Header;
