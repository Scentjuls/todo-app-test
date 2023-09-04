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

    const clearSearch = () => {
        setSearch("");
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
          {
              search && (
                  <button className="clear" onClick={clearSearch}>X</button>
              )
          }
          <button className="btn" onClick={searchHandle}>search</button>
    </div>
  )
}


// import React, { useEffect, useReducer } from 'react';
// import "./SearchTodo.css";

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "color":
//             return { ...state, color:  !state.color }
//         case "search":
//             return { ...state, search: action.payload }
//         default:
//             throw new Error();
//     }
// }

// export const SearchTodo = (props) => {
//     const { todos, setTodos, onSetTodos } = props;

//     const [state, dispatch] = useReducer(reducer, {color: false, search: ""})
//     // const [search, setSearch] = useState("");
//     // const [color, setColor] = useState(false);

//     useEffect(() => {
//         if (!state.search) {
//             setTodos(todos);
//             console.log("hwere", todos)
//             localStorage.setItem("tasks", JSON.stringify(todos));
//         }
//     },[todos, setTodos, state.search])

//     const searchHandle = () => {
//         if (!state.search) {
//             return
//         }
//         const todosReplica = [...todos];
//         const newArray = todosReplica.filter(todo => todo.task === state.search);
//         console.log("new", newArray)
//         localStorage.setItem("search", JSON.stringify(newArray));
//         onSetTodos(true);
//     }

//   return (
//       <div className="search-container" style={{backgroundColor: state.color ? "#FFF952" : "#FFF"}}>
//           <input
//               type="text"
//               className="search"
//               placeholder="search for a task..."
//               value={state.search}
//               onChange={(e) => dispatch({type: "search"})}
//           />
//           <button className="btn" onClick={searchHandle}>search</button>
//           <button className="btn" onClick={(() => dispatch({type: "color"}))}>Color</button>
//     </div>
//   )
// }
