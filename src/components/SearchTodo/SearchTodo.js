import React, { useEffect, useReducer } from 'react';
import "./SearchTodo.css";

const reducer = (state, action) => {
    switch (action.type) {
        case "color":
            return { ...state, color:  !state.color }
        case "search":
            return { ...state, search: action.payload }
        default:
            throw new Error();
    }
}

export const SearchTodo = (props) => {
    const { todos, setTodos, onSetTodos } = props;

    const [state, dispatch] = useReducer(reducer, {color: false, search: ""})

    useEffect(() => {
        if (!state.search) {
            setTodos(todos);
            console.log("hwere", todos)
            localStorage.setItem("tasks", JSON.stringify(todos));
        }
    },[todos, setTodos, state.search])

    const searchHandle = () => {
        if (!state.search) {
            return
        }
        console.log("new")
        const todosReplica = [...todos];
        const newArray = todosReplica.filter(todo => todo.task === state.search);
        
        localStorage.setItem("search", JSON.stringify(newArray));
        onSetTodos(true);
    }

    const clearSearch = () => {
        dispatch({type: "search", payload: ""});
    }

  return (
      <div className="search-container" style={{backgroundColor: state.color ? "#FFF952" : "#FFF"}}>
          <input
              type="text"
              className="search"
              placeholder="search for a task..."
              value={state.search}
              onChange={(e) => dispatch({type: "search", payload: e.target.value})}
          />
          {
              state.search ? (
                  <button className="clear" onClick={clearSearch}>X</button>
              ) : (
                  <button className="btn" onClick={(() => dispatch({type: "color"}))}>Color</button>    
              )
          }
          <button className="btn" onClick={searchHandle}>search</button>
    </div>
  )
}