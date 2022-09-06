import ProductOverview from './ProductOverview.jsx';
// import QnA from './QnA.jsx';
// import RelatedProducts from './RelatedProducts.jsx';
// import Reviews from './Reviews.jsx';
import { useState } from 'react';
import css from '../styles/style.css';


let App = (props) => {
  let [id, setID] = useState('71703');
  return (
    <>
      <div>
        some title and nev bar maybe?
      </div>
      <ProductOverview id={id}/>
      <RelatedProducts id={id} handleClick={setID} />
      <QnA id={id} />
      <Reviews id={id} />
    </>
  );
}

export default App;
