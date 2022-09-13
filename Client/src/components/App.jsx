import { useState } from 'react';
import css from '../styles/style.css';
import { OverviewWithTracker, RelatedWithTracker, QnAWithTracker, ReviewsWithTracker } from './ClickTracker.jsx';
import {useRef} from 'react';

let App = (props) => {
  const queryParams = new URLSearchParams(window.location.search);
  const product_id = queryParams.get("product_id") || '71700';
  let [id, setID] = useState(product_id);
  let [prodName, setName] = useState('');
  let [renderOutfit, setRenderOutfit] = useState(false);

  const reviewsRef = useRef();
  const handleScrollToReview = () => {
    reviewsRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <h2>
        Chiness Forum
      </h2>
      <OverviewWithTracker id={id} handleScrollToReview={handleScrollToReview} getName={setName} setRenderOutfit={setRenderOutfit} />
      <RelatedWithTracker id={id} handleClick={setID} renderOutfit={renderOutfit} setRenderOutfit={setRenderOutfit} />
      <QnAWithTracker id={id} prodName={prodName}/>
      <div ref={reviewsRef}>
        <ReviewsWithTracker  id={id} />
      </div>
    </>
  );
}

export default App;
