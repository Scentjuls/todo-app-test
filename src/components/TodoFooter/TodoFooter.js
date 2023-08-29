import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks,
    clearTasks
}) {
    return (
        <div className="todo-footer">
            <p data-testid="numberOfIncompleteTasks">{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <button onClick={clearTasks} className="clear-btn">Clear Tasks</button>
            <Link to="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
