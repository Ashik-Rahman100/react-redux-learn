import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex ">
        <button className="bg-blue-500" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button
          className="bg-blue-900 mx-12"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          IncrementByAmount
        </button>
        <div className="mx-12">{count}</div>
        <button className="bg-red-500" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
