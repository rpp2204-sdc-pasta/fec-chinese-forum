// import ProductOverview from './ProductOverview.jsx';
// import QnA from './QnA.jsx';
// import RelatedProducts from './RelatedProducts.jsx';
// import Reviews from './Reviews.jsx';
import { useState } from 'react';
import css from '../styles/style.css';
import { OverviewWithTracker, RelatedWithTracker, QnAWithTracker, ReviewsWithTracker } from './ClickTracker.jsx';
import {useRef} from 'react';

let App = (props) => {
  let [id, setID] = useState('71701');
  const reviewsRef = useRef();
  const handleScrollToReview = () => {
    reviewsRef.current.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      <div>
        some title and nev bar maybe?
      </div>
      {/* <ProductOverview id={id}/>
      <RelatedProducts id={id} handleClick={setID} />
      <QnA id={id} />
      <Reviews id={id} /> */}
      <OverviewWithTracker id={id} handleScrollToReview={handleScrollToReview}/>
      <RelatedWithTracker id={id} handleClick={setID} />
      <QnAWithTracker id={id} />
      <div ref={reviewsRef}>
        <ReviewsWithTracker  id={id} />
      </div>
    </>
  );
}

export default App;
