//hooks usestate
import './App.css';
import {useState,useEffect} from 'react';

function Example() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const App = () => {

  return (
    Example()  );
};

export default App;
