import Card from './Card.jsx';
import React from 'React';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      outfits: []
    }

  }

  render() {
    return (
      <ul>
        {this.state.products.map(product => <Card product={product}/>)}
      </ul>
    )
  }
}

export default RelatedProducts;