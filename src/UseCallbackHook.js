import React,{useState,useCallback} from 'react';
import Todos from './Todos';

function UseCallbackHook(props) {
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)

    const addTodo = useCallback(
        (todo) => setTodos((t) => [...t, todo]),
      [todos]
    )

    const todo = "Todo List"
    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} todo={todo}/>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Increement</button>
        </div>
    );
}

export default UseCallbackHook;