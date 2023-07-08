import React,{useReducer} from 'react';
import Increement from './Increement';
import {initialState, reducer} from './useStateImplementation'

function Counter(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div style={{textAlign:"center"}}>
            <h1>{state.count}</h1>
            <Increement increaseCount={()=>dispatch({type:"increement"})}/>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            
        </div>
    );
}

export default Counter;