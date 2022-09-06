
import {render, fireEvent, screen} from '@testing-library/react';
import ProductOverview from '../Client/src/components/ProductOverview.jsx';
import '@testing-library/jest-dom';

const mockedSetId = jest.fn();
// add test suite here

describe("Example tests", function(){

  // Individual tests can be run using the "it" or "test" methods, they are aliased and are equivalent
  it("1 should be 1", function(){
    /* This test suite is written in Jest. There are many more methods other than "toBe"
    Go to: https://jestjs.io/docs/en/expect
    to find more options if "toBe" doesn't fit your use case.
    */
    expect(1).toBe(1);
  });

});



describe("overview", () => {
  it('should render Overview-main', async () => {
    let {container} = render(<ProductOverview id={"71700"} handleClick={mockedSetId} />);
    const boxes = await container.getElementsByClassName('Overview-addToCartTools');
    expect(boxes[0]).toHaveClass('Overview-addToCartTools');
  });
  // it('should render title for related products section', async () => {
  //   render(<RelatedProducts id={"71700"} handleClick={mockedSetId} />);
  //   const titleElement = await screen.findByText(/your outfit/i);
  //   expect(titleElement).toBeInTheDocument();
  // });
});