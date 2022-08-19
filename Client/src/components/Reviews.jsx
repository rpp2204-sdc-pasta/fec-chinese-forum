import React from 'react';
import axios from 'axios';
import Reviews_list from './reviews/Reviews_list.jsx'


class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product_id: '71700',
      product: [],
      helpful: false,
      count: 2,
      length: '',
    }
    this.handleMore=this.handleMore.bind(this)
    this.getProductcount=this.getProductcount.bind(this)
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
          product: response.data.results.slice(0,2),
          length: response.data.results.length
        })
      } else {
        this.setState({
          count: num+2,
          product: response.data.results.slice(0,num)
        })
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  handleMore(e){
    e.preventDefault()
    this.getProductcount(this.state.count+2, null, this.state.product_id)
  }

  markHelpful(){
    axios.put()

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