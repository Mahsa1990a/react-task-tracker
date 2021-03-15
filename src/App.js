function App() {

  const name = 'Mahsa';

  //conditional:
  const x = true;

  return (

    //all should be insde dev
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      {/* Ternary operator: */}
      <h3>Hello {x ? 'Yes' : 'No'}</h3>
    </div>
  );
}

export default App;
