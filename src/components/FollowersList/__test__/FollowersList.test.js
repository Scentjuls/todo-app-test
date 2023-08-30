import { render, screen } from '@testing-library/react';
import FollowersList from "../FollowersList";
import { BrowserRouter } from 'react-router-dom';

// To make the mock axios work I had to go to node_modules/react-script/utils/createJestConfig
// on line 69 change resetMocks: false.

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    it('should render at least one card', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });
});