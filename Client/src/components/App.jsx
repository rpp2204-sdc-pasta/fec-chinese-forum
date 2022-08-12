import { lazy } from 'react';
const ProductOverview = lazy(() => import('./ProductOverview.jsx'));
const QnA = lazy(() => import('./QnA.jsx'));
const RelatedProducts = lazy(() => import('./RelatedProducts.jsx'));
const Reviews = lazy(() => import('./Reviews.jsx'));


let App = (props) => (
  <h1>Hello World!</h1>
)

export default App;