import React, { useState, useEffect } from 'react';
import "./SearchTodo.css";

export const SearchTodo = (props) => {
    const { todos, setTodos, onSetTodos } = props;
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (!search) {
            setTodos(todos);
            console.log("hwere", todos)
            localStorage.setItem("tasks", JSON.stringify(todos));
        }
    },[search, todos, setTodos])

    const searchHandle = () => {
        if (!search) {
            return
        }
        const todosReplica = [...todos];
        const newArray = todosReplica.filter(todo => todo.task === search);
        localStorage.setItem("search", JSON.stringify(newArray));
        onSetTodos(true);
    }

  return (
      <div className="search-container">
          <input
              type="text"
              className="search"
              placeholder="search for a task..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn" onClick={searchHandle}>search</button>
    </div>
  )
}
