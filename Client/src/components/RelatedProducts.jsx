import Card from './Card.jsx';
import Outfit from './Outfit.jsx';
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
    this.getOutfit = this.getOutfit.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.mainItemFeatures = props.features;
  }

  componentDidMount() {
    this.getRelated();
    this.getOutfit();
  }

  getRelated() {
    let options = {
      method: 'GET',
      url: `/related/${this.state.currentID}`
    };
    axios(options)
      .then(response => {
        // console.log(response.data);
        this.setState({ products: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOutfit() {
    let options = {
      method: 'GET',
      url: '/outfit'
    };
    axios(options)
      .then(response => {
        console.log(response.data);
        this.setState({ outfits: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleCompare() {

  }

  handleDelete(id) {
    let options = {
      method: 'DELETE',
      url: '/outfit',
      data: {
        id: id
      }
    };
    axios(options)
      .then(() => {
        this.getOutfit();
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleAdd() {
    let options = {
      method: 'post',
      url: '/outfit',
      data: {
        id: id
      }
    };
    axios(options)
      .then(() => {
        this.getOutfit();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h3>RELATED PRODUCTS</h3>
        <ul className="related-products">
          {this.state.products.map(product => <Card item={product} handleClick={this.handleCompare} />)}
        </ul>
        <h3>YOUR OUTFIT</h3>
        <ul className="outfit-list">
          <li className="card" onClick={this.handleAdd} >
            <div className="add-outfit">
              <img src="../resource/addButton.jpg" alt="add to outfit"/>
            </div>
          </li>
          {this.state.outfits.map(outfit => <Outfit item={outfit} handleClick={this.handleDelete} />)}
        </ul>
      </>
    )
  }
}

export default RelatedProducts;