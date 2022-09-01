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
        some title and nev bar maybe?
      </div>
      <ProductOverview id={id}/>
      <RelatedProducts id={id} handleClick={setID} mainItem={{"name": 'some random name', "features": [{feature: "fake", value: true}]}} />
      <QnA id={id} handleClick={setID}/>
      <Reviews id={id} handleClick={setID}/>
    </>
  );
}

export default App;
