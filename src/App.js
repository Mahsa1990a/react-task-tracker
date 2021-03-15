import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  return (

    //all should be insde dev
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;


// Class based Components:

// import React, { Component } from 'react';
// import Header from './components/Header';

// class App extends Component {
//   render() {
//     return (<h1>Hello from class</h1>)
//   }
// }

// export default App;
