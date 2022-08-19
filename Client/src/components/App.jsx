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
      <ProductOverview />
      <RelatedProducts id={id} handleClick={setID}/>
      <QnA />
      <Reviews />
    </>
  );
}

export default App;
