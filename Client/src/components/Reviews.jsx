import React from 'react';
import axios from 'axios';
import Reviews_list from './reviews/Reviews_list.jsx'


class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product: [],
      count: 2,
      length: '',
    }
    this.handleMore=this.handleMore.bind(this)
    this.getProductcount=this.getProductcount.bind(this)
    this.getReviews=this.getReviews.bind(this)
  }


  componentDidMount(){
    this.getProductcount()
    this.getReviews(this.state.count)
  }

  getProductcount(){
    let options ={
      method: 'GET',
      url: '/product'
    }
    axios(options)
    .then((response)=>{
      this.setState({
        // product: response.data.results,
        length: response.data.results.length
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  getReviews(num){
    axios.post('/reviews',
     {count: num})
    .then((response)=>{
      this.setState({
        product: response.data.results,
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  handleMore(e){
    e.preventDefault()
    console.log('clicked')
    axios.post('/reviews',
    {count: this.state.count + 2})
   .then((response)=>{
    console.log(response.data.results)
     this.setState({
       product: response.data.results,
       count: this.state.count + 2
     })
     console.log(this.state.count)
   })
   .catch((err)=>{
     console.log(err)
   })


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
        {this.state.product.map((item=>(<Reviews_list product={item} />)))}
        <br></br>
        {morebutton}
        <button type='submit'> ADD A REVIEW +   </button>
      </div>
  )}
}







export default Reviews;