import React from 'react';

function Todos({todos, addTodo, todo}) {
    console.log(todos,"I got rendered")
    return (
        <div>
            <button onClick={()=>addTodo(todo)}>Add New Todo</button>
        </div>
    );
}

export default React.memo(Todos);