import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, increseAmount } from './CounterSlice';

const CounterView = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	return (
		<div>
			<h3>Count:{count}</h3>
			<button onClick={() => dispatch(increment())}>INCREMENT</button>  <button onClick={() => dispatch(decrement())}>DECREMENT</button>  <button onClick={() => dispatch(reset())} >RESET</button> <button onClick={() => dispatch(increseAmount(5))} >INCRESEBY</button>
		</div>
	);
};

export default CounterView;