import ProductOverview from './ProductOverview.jsx';
import QnA from './QnA.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import Reviews from './Reviews.jsx';
import { useState } from 'react';
import css from '../styles/style.css';


let App = (props) => {
  let [id, setID] = useState('71700');
  return (
    <>
      <div>
        <h2>Product</h2>
      </div>
      {/* <ProductOverview id={id} handleClick={setID}/>
      <RelatedProducts id={id} handleClick={setID}/> */}
      <QnA id={id} handleClick={setID}/>
      {/* <Reviews id={id} handleClick={setID}/> */}
    </>
  );
}

export default App;