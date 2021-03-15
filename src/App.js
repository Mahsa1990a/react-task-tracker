// import Header from './components/Header';

// function App() {

//   return (

//     //all should be insde dev
//     <div className="container">
//       <Header />
//     </div>
//   );
// }

//for class based components:

import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  render() {
    return (<h1>Hello from class</h1>)
  }
}

export default App;
