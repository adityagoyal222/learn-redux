import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.counter);

  return (
    <div className="App">
      <h1>Counter {counter}</h1> 
      { isLogged ? <h3>Valuable information I shouldn't see </h3> : '' }
      
    </div>
  );
}

export default App;
