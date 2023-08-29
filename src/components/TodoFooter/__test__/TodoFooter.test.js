import { render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from 'react-router-dom';


const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter
                numberOfIncompleteTasks={numberOfIncompleteTasks}
            />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
    it('should render the correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
        const paragrapghElement = screen.getByText(/5 tasks left/i);
        expect(paragrapghElement).toBeInTheDocument();
    });

    it('should render "task" when the number of incomplete tasks is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragrapghElement = screen.getByText(/1 task left/i);
        expect(paragrapghElement).toBeInTheDocument();
    });
});

// it('should be truthy', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paragrapghElement = screen.getByText(/1 task left/i);
//   expect(paragrapghElement).toBeTruthy();
// });

// it('should be visible', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paragrapghElement = screen.getByText(/1 task left/i);
//   expect(paragrapghElement).toBeVisible();
// });

// it('should contain a "p" tag', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paragrapghElement = screen.getByText(/1 task left/i);
//   expect(paragrapghElement).toContainHTML("p");
// });

// it('should have text content', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paragrapghElement = screen.getByTestId("numberOfIncompleteTasks");
//   expect(paragrapghElement).toHaveTextContent("1 task left");
// });

// it('should have text content available', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paragrapghElement = screen.getByTestId("numberOfIncompleteTasks");
//   expect(paragrapghElement.textContent).toBe("1 task left");
// });