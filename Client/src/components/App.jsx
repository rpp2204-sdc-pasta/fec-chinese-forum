// import ProductOverview from './ProductOverview.jsx';
// import QnA from './QnA.jsx';
// import RelatedProducts from './RelatedProducts.jsx';
// import Reviews from './Reviews.jsx';
import { useState } from 'react';
import css from '../styles/style.css';
import { OverviewWithTracker, RelatedWithTracker, QnAWithTracker, ReviewsWithTracker } from './ClickTracker.jsx';


let App = (props) => {
  const queryParams = new URLSearchParams(window.location.search);
  const product_id = queryParams.get("product_id") || '71700';
  console.log(product_id);
  let [id, setID] = useState(product_id);
  return (
    <>
      <div>
        some title and nev bar maybe?
      </div>
      {/* <ProductOverview id={id}/>
      <RelatedProducts id={id} handleClick={setID} />
      <QnA id={id} />
      <Reviews id={id} /> */}
      <OverviewWithTracker id={id} />
      <RelatedWithTracker id={id} handleClick={setID} />
      <QnAWithTracker id={id} />
      <ReviewsWithTracker id={id} />
    </>
  );
}

export default App;
