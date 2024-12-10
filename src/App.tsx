import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Store';

interface State {
  count: number;
}

function App() {
  const count = useSelector((state: State) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
 