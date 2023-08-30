import React, { useState } from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"
import { SearchTodo } from '../SearchTodo/SearchTodo';
import { SearchResultsTodo } from '../SearchResultsTodo/SearchResultsTodo';

function TodoList({
    todos, setTodos
}) {
    const [searchedResults, setSearchedResults] = useState(false);

    const updateTask = (id, e) => {
        e.stopPropagation();
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        JSON.parse(localStorage.getItem("tasks")).forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    const deleteTodo = (todoId, e) => {
        e.stopPropagation();
        let newArray = [...todos];
        const newTodos = newArray.filter((element) => element.id !== todoId);
        setTodos(newTodos);
        localStorage.setItem("tasks", JSON.stringify(newTodos));
    }

    const clearTasks = () => {
        setTodos([]);
    }

    const handleTodoChange = (message) => {
        console.log("message", message)
        setSearchedResults(message);
    }

    return (
        <div className="todolist-container">
            <SearchTodo todos={todos} setTodos={setTodos} onSetTodos={handleTodoChange} />
            <div className="todos-container">
                <div>
                    {
                        searchedResults ? (
                            <div>
                                <SearchResultsTodo />
                            </div>
                        ): (
                            <div>
                                {
                                    JSON.parse(localStorage.getItem("tasks")).map((todo, index) => (
                                        <div
                                            className="todo-task"
                                            onClick={(e) => updateTask(todo.id,e)}
                                            key={index}
                                            data-testid="task-container"
                                        >
                                            <p className={`todo-item ${todo.completed && "todo-item-active"}`}>{todo.task}</p>
                                            <button className="btn" onClick={(e) => deleteTodo(todo.id, e)}>Delete</button>
                                        </div>
                                    ))
                                }
                            </div>  
                        )
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                    clearTasks={clearTasks}
                />
            </div>
        </div>
    )
}

export default TodoList
