import Card from './Card.jsx';
import React from 'react';
import axios from 'axios';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentID: '71700',
      products: [],
      outfits: []
    };
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  getRelated() {
    let options = {
      method: 'GET',
      url: `/related/${this.state.currentID}`
    }
    axios(options)
      .then(response => {
        // console.log(response.data);
        this.setState({ products: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getOutfit() {
    let options = {
      method: 'GET',
      url: '/outfit'
    }
    axios(options)
      .then(response => {
        console.log(response.data);
      })
  }

  render() {
    return (
      <>
        <h3>RELATED PRODUCTS</h3>
        <ul>
          {this.state.products.map(product => <Card item={product}/>)}
        </ul>
        <h3>YOUR OUTFIT</h3>
        <ul>
          {/* <Card item={} /> */}
          {this.state.outfits.map(outfit => <Card item={outfit}/>)}
        </ul>
      </>
    )
  }
}

export default RelatedProducts;