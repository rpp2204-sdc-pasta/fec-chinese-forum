import {render, fireEvent, screen} from '@testing-library/react';
import RelatedProducts from '../client/src/components/RelatedProducts';
import '@testing-library/jest-dom';

const mockedSetId = jest.fn();

describe("related products", () => {
  it('should render title for related products section', async () => {
    render(<RelatedProducts id={"71700"} handleClick={mockedSetId} />);
    const titleElement = await screen.findByText(/related products/i);
    expect(titleElement).toBeInTheDocument();
  });
  it('should render title for related products section', async () => {
    render(<RelatedProducts id={"71700"} handleClick={mockedSetId} />);
    const titleElement = await screen.findByText(/your outfit/i);
    expect(titleElement).toBeInTheDocument();
  });
});

// describe("outfits", () => {

// });