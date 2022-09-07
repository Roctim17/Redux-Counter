import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/state/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className=''>
            <h1>{count}</h1>
            <div className="">
                <button className='btn btn-success m-3'
                    onClick={() => dispatch(increment())}
                >+</button>
                <button
                    onClick={() => dispatch(decrement())}
                    className='btn btn-danger m-3'>-</button>
            </div>
        </div>
    );
};

export default Counter;