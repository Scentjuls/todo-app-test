import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo";
import { BrowserRouter } from 'react-router-dom';


const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/add a new task.../i);
    const buttonElement = screen.getByRole("button", { name: /add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
}

describe("Todo", () => {
    it('should render text inputted in input', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"])
        const divElement = screen.getByText(/Go grocery shopping/i);
        expect(divElement).toBeInTheDocument();
    });

    it('should render all text inputted in input', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping", "clean the car", "pet the dog"])
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3);
    });

    it('task should not have completed class name when initially rendered', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"])
        const divElement = screen.getByText(/Go grocery shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('task should have the completed class name when clicked on', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"])
        const divElement = screen.getByText(/Go grocery shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });

    it('should delete task when delete button is clicked', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"]);
        const divElement = screen.getByText(/Go grocery shopping/i);
        const buttonElement = screen.getByRole("button", {name: /delete/i});
        fireEvent.click(buttonElement);
        expect(divElement).not.toBeInTheDocument();
    });

     it("should render correct amount of tasks when clear button is clicked", () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping", "clean the car", "pet the dog"]);
        const divElements = screen.getAllByTestId("task-container");
        const buttonElement = screen.getByRole("button", { name: /clear tasks/i });
         fireEvent.click(buttonElement);
         divElements.forEach(container => {
             expect(container).not.toBeInTheDocument();
         })
    });
});