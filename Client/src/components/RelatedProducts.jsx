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
    this.mainItemFeatures = props.features;
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
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <>
        <h3>RELATED PRODUCTS</h3>
        <ul className="related-products">
          {this.state.products.map(product => <Card item={product} handleClick={props.handleClick}/>)}
        </ul>
        <h3>YOUR OUTFIT</h3>
        <ul className="outfit-list">
          {/* <Card item={} /> */}
          {this.state.outfits.map(outfit => <Card item={outfit}/>)}
        </ul>
      </>
    )
  }
}

export default RelatedProducts;