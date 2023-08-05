import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './app/redexmul/File1';
import { increment1, decrement1 } from './app/redexmul/File2';
import { incrementvalue, decrementvalue } from './app/redexmul/File3';
import { incrementnum as incrementnum4 } from './app/redexmul/File2'; // To avoid action name conflict
import { incrementnum as incrementnum1 } from './app/redexmul/File1'; // To avoid action name conflict
import { incrementnum as incrementnum5 } from './app/redexmul/File3'; // To avoid action name conflict

function App() {
  const [plus, setPlus] = useState('');
  const count = useSelector((state) => state.counter.value);
  const count1 = useSelector((state) => state.counter1.value);
  const count3 = useSelector((state) => state.count3.value);
  const plus1 = useSelector((state) => state.plus1.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="form-section">
        <div className="form-element">
          <button onClick={() => dispatch(increment())}>Increment (1)</button>
          <input type="text" value={count} readOnly />
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>

        <div className="form-element">
          <button onClick={() => dispatch(increment1())}>Increment (2)</button>
          <input type="text" value={count1} readOnly />
          <button onClick={() => dispatch(decrement1())}>Decrement</button>
        </div>

        <div className="form-element">
          <button onClick={() => dispatch(incrementvalue())}>Increment (3)</button>
          <input type="text" value={count3} readOnly />
          <button onClick={() => dispatch(decrementvalue())}>Decrement</button>
        </div>

        <div className="form-element">
          <input className='box' type="text" onChange={(e) => setPlus(e.target.value)} value={plus} /> <br />
          <button className='btn1' onClick={() => dispatch(incrementnum1(parseInt(plus)))}>Add (Plus1)</button>
          <button className='btn1' onClick={() => dispatch(incrementnum4(parseInt(plus)))}>Add (plus2)</button>
          <button className='btn1' onClick={() => dispatch(incrementnum5(parseInt(plus)))}>Add (plus2)</button>
        </div>
      </div>
    </>
  );
}

export default App;
