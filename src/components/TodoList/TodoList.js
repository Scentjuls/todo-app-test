import React from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"

function TodoList({
    todos, setTodos
}) {

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
        setTodos(updatedTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    const deleteTodo = (todoId, e) => {
        e.stopPropagation();
        let newArray = [...todos];
        const newTodos = newArray.filter((element) => element.id !== todoId);
        setTodos(newTodos);
    }

    const clearTasks = () => {
        setTodos([]);
    }

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo, index) => (
                            <div
                                className="todo-task"
                                onClick={(e) => updateTask(todo.id,e)}
                                key={index}
                                data-testid="task-container"
                            >
                                <p className={`todo-item ${todo.completed && "todo-item-active"}`}>{todo.task}</p>
                                <button className="delete-btn" onClick={(e) => deleteTodo(todo.id, e)}>Delete</button>
                            </div>
                        ))
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
