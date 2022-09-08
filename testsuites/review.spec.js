import {render, fireEvent, screen} from '@testing-library/react';
import Reviews from '../client/src/components/Reviews';
import '@testing-library/jest-dom';


const mockedSetId = jest.fn();


describe("REVIEWS", () => {
  it('should render title for REVIEWS section', async () => {
    render(<Reviews id={"71700"} handleClick={mockedSetId} />);
    const titleElement = await screen.findByText(/Ratings & Reviews/i);
    expect(titleElement).toBeInTheDocument();
  });
  it('should render title for REVIEWS section', async () => {
    render(<Reviews id={"71700"} handleClick={mockedSetId} />);
    const titleElement = await screen.findByText(/MORE REVIEWS/i);
    expect(titleElement).toBeInTheDocument();
  });
});