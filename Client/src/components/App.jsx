import ProductOverview from './ProductOverview.jsx';
import QnA from './QnA.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import Reviews from './Reviews.jsx';


let App = (props) => (
  <>
    <div>
      some title and nev bar maybe?
    </div>
    <ProductOverview />
    <RelatedProducts id={props.id}/>
    <QnA />
    <Reviews />
  </>
)

export default App;