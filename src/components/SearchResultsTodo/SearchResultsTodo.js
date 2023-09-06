import React, { useEffect, useState } from 'react';

export const SearchResultsTodo = () => {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("search")));
    }, []);

  return (
      <div>
           {
                todos.map((todo, index) => (
                    <div
                        className="todo-task"
                        // onClick={(e) => updateTask(todo.id,e)}
                        key={index}
                        data-testid="task-container"
                    >
                        <p className={`todo-item ${todo.completed && "todo-item-active"}`}>{todo.task}</p>
                        <button className="btn" >Delete</button>
                    </div>
                ))
            }
    </div>
  )
}
