import React from 'react';
import axios from 'axios';
import Reviews_list from './reviews/Reviews_list.jsx'


class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product_id: '71700'||this.props.id,
      stored_reviews: [],
      product: [],
      // helpful: false,
      count: 2,
      length: '',
    }
    this.handleMore=this.handleMore.bind(this)
    this.getProductcount=this.getProductcount.bind(this)
    this.moreReviews=this.moreReviews.bind(this)

    // this.getReviews=this.getReviews.bind(this)
  }


  componentDidMount(){
    this.getProductcount(null, null, this.state.product_id)
  }

  getProductcount(num=null,sortBy=null, product_id){
    sortBy = sortBy || 'relevant'
    axios.post('/reviews',
    {sort: sortBy,
    productId: product_id
    })
    .then((response)=>{
      if(num === null){
        this.setState({
          stored_reviews: response.data.results,
          length: response.data.results.length,
          product: response.data.results.slice(0,2)
        });
        // this.setState({
        //   product: this.state.stored_reviews.slice(0,2)
        // })
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  moreReviews(num , review_count=2){
    let total = num + review_count
    this.setState({
      count: total,
      product: this.state.stored_reviews.slice(0,total)
    })
  }

  handleMore(e){
    e.preventDefault()
    this.moreReviews(this.state.count)
  }

  handleClick(e){
    console.log(e.target.name)
  }
  markHelpful(e){
    e.preventDefault()
    axios.put('/helpful')

  }


  render(){
    let morebutton
    if (this.state.length > 2 && this.state.length > 0 && this.state.count<= this.state.length){
      morebutton = <button type='submit' onClick={this.handleMore}> MORE REVIEWS</button>
    }
    return(
      <div>
        <h1>{`Ratings & Reviews`}</h1>
        <div id='reviews-scrollable'></div>
        <h2>{this.state.length} reviews, sorted by relevance</h2>
        {this.state.product.map((item=>(<div key={item.review_id}><Reviews_list product={item} /></div>)))}
        <br></br>
        {morebutton}
        <button type='submit'> ADD A REVIEW +   </button>
      </div>
  )}
}







export default Reviews;