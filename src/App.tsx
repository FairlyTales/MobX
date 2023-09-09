import { observer } from 'mobx-react-lite';
import './App.css';
import { counter } from './store';

const App = observer(() => {
  const handleIncrement = () => {
    counter.increment();
  };

  const handleDecrement = () => {
    counter.decrement();
  };

  return (
    <>
      <h1>Counter</h1>
      <p>Current count: {counter.count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
});

export default App;
