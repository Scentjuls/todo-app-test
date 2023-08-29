import { render, screen } from '@testing-library/react';
import Header from "../Header";

describe("Header", () => {
    it('should render same text passed into title prop', () => {
        render(<Header title="My header"/>);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });
});

// it('should get the heading by role', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it('Get the exact heading text using the role', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByRole("heading", {name: "My header"});
//   expect(headingElement).toBeInTheDocument();
// });

// it('Get by title', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it('Get the exact heading by using test id', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });


// // when using the find by it has to be asynchronous
// it('Find text using find by', async () => {
//   render(<Header title="My header"/>);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it('Query text using query by', () => {
//   render(<Header title="My header"/>);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it('Get all the roles and it should be 2', () => {
//   render(<Header title="My header"/>);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);

// });