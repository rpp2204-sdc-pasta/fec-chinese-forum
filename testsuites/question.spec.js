import {render, fireEvent, screen} from '@testing-library/react';
import QnA from '../client/src/components/QnA';
import QnASearch from '../client/src/components/QnASearch';
import QnAAnslist from '../client/src/components/QnAAnslist';
import QnAList from '../client/src/components/QnAQSList';
import QSModal from '../client/src/components/QnAQSModal';
import '@testing-library/jest-dom';

const mockedSetId = jest.fn();


describe("QnA", () => {
  it('should render title for QnA section', async () => {
    render(<QnA id={"71700"} handleClick={mockedSetId} />);
    const titleElement = await screen.findByText(/QUESTIONS & ANSWERS/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should have a submit button', async () => {
    render(<QSModal/>);
    const submit = await screen.getByRole('button', {
      name: /submit/i
    });
    expect(submit).toBeInTheDocument();
  });

  it('should have a search bar', async () => {
    render(<QnASearch></QnASearch>);
    const close = await screen.getByRole('button', {
      class: /searchClose/i
    });
    expect(close).toBeInTheDocument();
  })

  it('Should list Ans List ', async () => {
    render(<QnAAnslist></QnAAnslist>);
    const ansList = await screen.getByRole('button', {
      class: /buttonLink/i
    });
    expect(ansList).toBeInTheDocument();
  })
  it('should have a search bar', async () => {
    render(<QnAList></QnAList>);
    const opts = await screen.getByRole('div', {
      class: /QSOpts/i
    });
    expect(opts).toBeInTheDocument();
  })

});
