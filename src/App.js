const Person = (props) => {
  return (
    <>
      <h1>hello {props.name}</h1>
      <h2>there {props.there}</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person name={'hehe'} />
      <Person there="him"/>
    </div>
  );
};

export default App;
