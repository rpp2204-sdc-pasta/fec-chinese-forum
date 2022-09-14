import {render, fireEvent, screen, cleanup} from '@testing-library/react';
import Reviews from '../client/src/components/Reviews';
import reviews from '../server/reviews.js'
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import '@testing-library/jest-dom';


const mockedSetId = jest.fn();

const meta = {
  "product_id": "71697",
  "ratings": {
      "1": "5",
      "2": "16",
      "3": "27",
      "4": "20",
      "5": "57"
  },
  "recommended": {
      "false": "23",
      "true": "102"
  },
  "characteristics": {
      "Fit": {
          "id": 240582,
          "value": "3.5000000000000000"
      },
      "Length": {
          "id": 240583,
          "value": "3.3947368421052632"
      },
      "Comfort": {
          "id": 240584,
          "value": "3.6140350877192982"
      },
      "Quality": {
          "id": 240585,
          "value": "3.7699115044247788"
      }
  }
}

const reviewsData = {
  "product": "71700",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 1254289,
          "rating": 2,
          "summary": "These pants are ok!",
          "recommend": false,
          "response": "",
          "body": "A little tight on the waist.",
          "date": "2019-01-05T00:00:00.000Z",
          "reviewer_name": "bigbrother",
          "helpfulness": 43,
          "photos": [
              {
                  "id": 2414654,
                  "url": "https://images.unsplash.com/photo-1560829675-11dec1d78930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "id": 2414655,
                  "url": "https://images.unsplash.com/photo-1549812474-c3cbd9a42eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "id": 2414656,
                  "url": "https://images.unsplash.com/photo-1559709319-3ae960cda614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              }
          ]
      },
      {
          "review_id": 1276218,
          "rating": 5,
          "summary": "Bulbasaur!!",
          "recommend": true,
          "response": null,
          "body": "Bulbasaur!",
          "date": "2022-08-26T00:00:00.000Z",
          "reviewer_name": "MuscleBulbasaur",
          "helpfulness": 17,
          "photos": []
      },
      {
          "review_id": 1275995,
          "rating": 3,
          "summary": "Quality is ok! ",
          "recommend": true,
          "response": null,
          "body": "The quality is ok but the size runs a little small!",
          "date": "2022-07-25T00:00:00.000Z",
          "reviewer_name": "palatinoTest",
          "helpfulness": 12,
          "photos": []
      },
      {
          "review_id": 1276578,
          "rating": 5,
          "summary": "Well does it work?",
          "recommend": true,
          "response": null,
          "body": "Maybe? Hopefuly? PLEASE??",
          "date": "2022-09-08T00:00:00.000Z",
          "reviewer_name": "MuscleBulbasaur",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1276632,
          "rating": 5,
          "summary": "Cool",
          "recommend": true,
          "response": null,
          "body": "Bob",
          "date": "2022-09-08T00:00:00.000Z",
          "reviewer_name": "Bob",
          "helpfulness": 0,
          "photos": []
      }
  ]
}

const reviewsResponse = rest.get('/reviews', (req, res, ctx) =>{
  // let response = reviews.getProductcount(req.body.sort, req.body.productId)
    return res(ctx.json(
      {data:{reviews: reviewsData}}
    )
  )
})

// const reviewsResponse = rest.get('/reviews:id', (req, res, ctx) =>{
//   return res(ctx.json(helpful))
// })
// const reviewsResponse = rest.get('/submit', (req, res, ctx) =>{
//   return res(ctx.json(helpful))
// })

// const metaResponse = rest.get('/reviews/meta', (req,res,ctx) => {
//   let response = reviews.getMeta(req.query.product_id)
//     return res((response))
// })

// const handlers = []

const server = new setupServer(reviewsResponse);


beforeAll(() => server.listen( {onUnhandledRequest: "bypass"}));
afterEach(()=> server.resetHandlers());
afterAll(()=>server.close());

describe("ratings and reviews", () => {
  // it('should render img', async () => {
  //   render(<Reviews id={"71700"} handleClick={mockedSetId} />);
  //   const img = screen.getByRole('img')
  //   expect(img).toBeInTheDocument();
  // });

  it('should render star 5', async () => {
    render(<Reviews id={"71700"} handleClick={mockedSetId} />);
    const star5 = await screen.getByText(/5 stars/i)
    const star4 = await screen.getByText(/4 stars/i)
    expect(star5).toBeInTheDocument();
    expect(star4).toBeInTheDocument();
  });

  it('should render list for characteristics', async () => {
    render(<Reviews id={"71700"} handleClick={mockedSetId} />);
    const characteristics = await screen.findByText('Helpful');
    expect(characteristics).toBeInTheDocument();
  });

  it('should render title for reviews section', async () => {
    render(<Reviews id={"71700"} handleClick={mockedSetId} />);
    const titleElement = await screen.findByText(/Ratings & Reviews/i);
    expect(titleElement).toBeInTheDocument();
  });
  it('should render title for reviews section', async () => {
    render(<Reviews id={"71700"} handleClick={mockedSetId} />);
    const titleElement = await screen.findByText(/MORE REVIEWS/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render add review button', async () => {
    render(<Reviews id={'71700'} handleClick={mockedSetId} />);
    const buttonElement = await screen.getByRole('button', {
      name: /add a review \+/i});
      expect(buttonElement).toBeInTheDocument
  })

  it('shoud render Upload button', async () => {
    const {container} = render(<Reviews id={'71700'} handleClick={mockedSetId} />);
    const fileElement = await container.querySelector('#sandbox > input[type="file"]')
    expect(fileElement).toBeInTheDocument
  })

  it('should render add review button', async () => {
    render(<Reviews id={'71700'} handleClick={mockedSetId} />);
    const buttonElement = await screen.getByText('report')
      expect(buttonElement).toBeInTheDocument
  })

  // it('should render star description', async () => {
  //   render(<Reviews id={'71700'} handleClick={mockedSetId} />);
  //   const poor = await screen.getByText(/poor/i);
  //   const good = await screen.getByText(/good/i);
  //   const perfect = await screen.getByText(/perfect/i)
  //   expect(poor).toBeInTheDocument
  //   expect(good).toBeInTheDocument
  //   expect(perfect).toBeInTheDocument
  // })

  // it('fetches and displays data', async () =>{
  //   const url=
  //   const {} = rrender(<Reviews id={'71700'} handleClick={mockedSetId} />);

  // })

});