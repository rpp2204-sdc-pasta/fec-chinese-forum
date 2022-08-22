import ProductOverview from './ProductOverview.jsx';
import QnA from './QnA.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import Reviews from './Reviews.jsx';


let App = (props) => {
  let [id, setID] = useState('71700');
  return (
    <>
      <div>
        some title and nev bar maybe?
      </div>
      <ProductOverview id={id} handleClick={setID}/>
      <RelatedProducts id={id} handleClick={setID}/>
      <QnA id={id} handleClick={setID}/>
      <Reviews id={id} handleClick={setID}/>
    </>
  );
}

export default App;