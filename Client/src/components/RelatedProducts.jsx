import Card from './relatedProducts/Card.jsx';
import Outfit from './relatedProducts/Outfit.jsx';
import Compare from './relatedProducts/Compare.jsx'
import React from 'react';
import axios from 'axios';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      outfits: [],
      compare: false,
      compareFeatures: {}
    };
    this.getRelated = this.getRelated.bind(this);
    this.getOutfit = this.getOutfit.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.currentID = props.id;
    this.mainItem = props.mainItem;
    this.handleClick = props.handleClick;
  }

  componentDidMount() {
    this.getRelated();
    this.getOutfit();
  }

  getRelated() {
    let options = {
      method: 'GET',
      url: '/related/' + this.currentID
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
        // console.log(response.data);
        this.setState({ outfits: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleCompare(index) {
    let compareData = {};
    let currentName = this.mainItem.name;
    let compareName = this.state.products[index].name;
    this.state.products[index].features.forEach(feature => {
      if (!compareData[feature.feature]) {
        compareData[feature.feature] = {}
      }
      compareData[feature.feature]["compare"] = feature.value;
    });

    this.mainItem.features.forEach(feature => {
      if (!compareData[feature.feature]) {
        compareData[feature.feature] = {}
      }
      compareData[feature.feature]["current"] = feature.value;
    });
    compareData["name"] = {
      "compare": compareName,
      "current": currentName
    }
    // console.log(compareData);
    this.setState({
      compare: true,
      compareFeatures: compareData
    });
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
        id: this.state.id
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
        <h3 className="section-title">RELATED PRODUCTS</h3>
        <section className="related">
          <button className="pre-button">&#10132;</button>
          <button className="next-button">&#10132;</button>
          <div className="related-products">
            {this.state.products.map((product, index) => <Card item={product} key={index}
              handleCompare={() => { this.handleCompare(index); }} handleClick={this.handleClick}/>)}
          </div>
        </section>
        <h3 className="section-title">YOUR OUTFIT</h3>
        <section className="outfit">
          <button className="pre-button">&#10132;</button>
          <button className="next-button">&#10132;</button>
          <div className="outfit-list">
            <div className="card" onClick={this.handleAdd} >
              <div className="add-outfit">
                <img src="../resource/addButton.jpg" alt="add to outfit"/>
              </div>
            </div>
            {this.state.outfits.map(outfit => <Outfit item={outfit} key={outfit.id}
            handleDelete={this.handleDelete} handleAdd={this.handleAdd} />)}
          </div>
        </section>
        {this.state.compare && <Compare data={this.state.compareFeatures} />}
        <div id="compare-overlay" ></div>
      </>
    )
  }
}

export default RelatedProducts;