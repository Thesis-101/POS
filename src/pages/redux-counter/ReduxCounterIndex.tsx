import React from 'react';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/counter';

function ReduxCounterIndex() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  console.log("Count", count)
  return (
    <div className="m-3 h-full bg-white shadow-md rounded-sm">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>  
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default ReduxCounterIndex;
