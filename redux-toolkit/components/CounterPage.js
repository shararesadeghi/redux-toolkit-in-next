"use client";
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { selectCounter,increment, decrement, increamentByAmount } from './../redux/features/counter/counterSlice';

const CounterPage = () => {

    const [value,setValue] = useState(2);

    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);
    return (
        <div>
            <h3>Counter is:{counter}</h3>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input type="number" value={value} onChange={e=>setValue(e.target.value)}/>
            <button onClick={()=>dispatch(increamentByAmount(+value))}>Increment By Amount</button>
            
        </div>
    );
};

export default CounterPage;