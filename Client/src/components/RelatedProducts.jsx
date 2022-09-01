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
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  componentDidMount() {
    this.getRelated();
    this.getOutfit();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getRelated();
    }
  }

  getRelated() {
    let options = {
      method: 'GET',
      url: '/related/' + this.props.id
    };
    axios(options)
      .then(response => {
        console.log(response.data);
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
    let currentName = this.props.mainItem.name;
    let compareName = this.state.products[index].name;
    this.state.products[index].features.forEach(feature => {
      if (!compareData[feature.feature]) {
        compareData[feature.feature] = {}
      }
      compareData[feature.feature]["compare"] = feature.value;
    });

    this.props.mainItem.features.forEach(feature => {
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

  handleDelete(index) {
    let options = {
      method: 'DELETE',
      url: '/outfit',
      data: {
        id: this.state.outfits[index].id
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
        id: this.props.mainItem.id,
        category: this.props.mainItem.category,
        name: this.props.mainItem.category,
        original_price: this.props.mainItem.original_price,
        sale_price: this.props.mainItem.sale_price,
        img_url: this.props.mainItem.img_url,
        overallRating: this.props.mainItem.overallRating
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

  closeOverlay() {
    this.setState({compare: false});
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
              handleCompare={() => { this.handleCompare(index); }}
              handleClick={() => {this.props.handleClick(product.id)}} />)}
          </div>
        </section>
        <h3 className="section-title">YOUR OUTFIT</h3>
        <section className="outfit">
          <button className="pre-button">&#10132;</button>
          <button className="next-button">&#10132;</button>
          <div className="outfit-list">
            <div className="card" onClick={this.handleAdd} >
              <div className="add-outfit-sign">&#43;</div>
              <div className="add-outfit-word">Add to Outfit</div>
            </div>
            {this.state.outfits.map((outfit, index) => <Outfit item={outfit} key={outfit.id}
            handleDelete={() => { this.handleDelete(index); }} />)}
          </div>
        </section>
        {this.state.compare && <div id="compare-overlay" onClick={this.closeOverlay}>
          <Compare data={this.state.compareFeatures} /></div>}
      </>
    )
  }
}

export default RelatedProducts;