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
      compareFeatures: {},
      relatedIndex: 0,
      outfitIndex: -1,
      relatedPre: true,
      relatedNext: true,
      outfitPre: true,
      outfitNext: true
    };
    this.getRelated = this.getRelated.bind(this);
    this.getOutfit = this.getOutfit.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.relatedPre = this.relatedPre.bind(this);
    this.relatedNext = this.relatedNext.bind(this);
    this.outfitPre = this.outfitPre.bind(this);
    this.outfitNext = this.outfitNext.bind(this);
    this.checkRelated = this.checkRelated.bind(this);
    this.checkOutfit = this.checkOutfit.bind(this);
  }

  componentDidMount() {
    this.getRelated();
    this.getOutfit();
    this.checkRelated();
    this.checkOutfit();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.getRelated();
    }
    if (this.state.outfitIndex !== prevState.outfitIndex) {
      this.checkOutfit();
    }
    if (this.state.relatedIndex !== prevState.relatedIndex) {
      this.checkRelated();
    }
    if (this.state.products !== prevState.products) {
      this.checkRelated();
    }
    if (this.state.outfits !== prevState.outfits) {
      this.checkOutfit();
    }
  }

  getRelated() {
    let options = {
      method: 'GET',
      url: '/related/' + this.props.id
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

  checkRelated() {
    if (this.state.relatedIndex > 0) {
      this.setState({relatedPre: true});
    } else {
      this.setState({relatedPre: false});
    }
    if (this.state.relatedIndex + 4 < this.state.products.length) {
      this.setState({relatedNext: true});
    } else {
      this.setState({relatedNext: false});
    }
    console.log("related checked");
  }

  checkOutfit() {
    if (this.state.outfitIndex > 0) {
      this.setState({outfitPre: true});
    } else {
      this.setState({outfitPre: false});
    }
    if (this.state.outfitIndex + 4 < this.state.outfits.length) {
      this.setState({outfitNext: true});
    } else {
      this.setState({outfitNext: false});
    }
    console.log("outfit checked");
  }

  relatedPre() {
    this.setState({relatedIndex: this.state.relatedIndex - 1});
  }

  relatedNext() {
    this.setState({relatedIndex: this.state.relatedIndex + 1});
  }

  outfitPre() {
    this.setState({outfitIndex: this.state.outfitIndex - 1});
  }

  outfitNext() {
    this.setState({outfitIndex: this.state.outfitIndex + 1});
  }

  closeOverlay() {
    this.setState({compare: false});
  }

  render() {
    return (
      <>
        <h3 className="section-title">RELATED PRODUCTS</h3>
        <section className="related">
          <div className="button">
            {this.state.relatedPre && <button className="pre-button" onClick={this.relatedPre} >&#10132;</button>}
            {this.state.relatedNext && <button className="next-button" onClick={this.relatedNext} >&#10132;</button>}
          </div>
          <div className="related-products" style={{transform: `translateX(-${this.state.relatedIndex * 25}%)`}} >
            {this.state.products.map((product, index) => <Card item={product} key={index}
              handleCompare={() => { this.handleCompare(index); }}
              handleClick={() => {this.props.handleClick(product.id)}} />)}
          </div>
        </section>
        <h3 className="section-title">YOUR OUTFIT</h3>
        <section className="outfit">
          <div>
            {this.state.outfitPre && <button className="pre-button" onClick={this.outfitPre} >&#10132;</button>}
            {this.state.outfitNext && <button className="next-button" onClick={this.outfitNext} >&#10132;</button>}
          </div>
          <div className="outfit-list" style={{transform: `translateX(-${(this.state.outfitIndex + 1) * 25}%)`}}>
            <div className="card" onClick={this.handleAdd} >
              <div className="add-outfit-sign">&#43;</div>
              <div className="add-outfit-word">Add to Outfit</div>
            </div>
            {this.state.outfits.map((outfit, index) => <Outfit item={outfit} key={index}
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