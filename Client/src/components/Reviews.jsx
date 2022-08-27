import React from 'react';
import axios from 'axios';
import Reviews_list from './reviews/Reviews_list.jsx'
import Sorted from './reviews/Sorted.jsx'



class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product_id: this.props.id,
      stored_relevant: [],
      stored_helpful: [],
      stored_newest:[],
      currentLoad: [],
      product: [],
      count: 2,
      length: '',
    }
    this.handleMore=this.handleMore.bind(this)
    this.getProductcount=this.getProductcount.bind(this)
    this.moreReviews=this.moreReviews.bind(this)
    this.resetCount=this.resetCount.bind(this)
    this.selectFilter=this.selectFilter.bind(this)
  }


  componentDidMount(){
    Promise.all([
      this.getProductcount(null, 'relevant', this.state.product_id),
      this.getProductcount(null, 'helpful', this.state.product_id),
      this.getProductcount(null, 'newest', this.state.product_id),
    ])
  }

  getProductcount(num=null,sortBy, product_id){
    sortBy = sortBy
    axios.post('/reviews',
    {sort: sortBy,
    productId: product_id
    })
    .then((response)=>{
      if(num === null && sortBy === 'relevant'){
        this.setState({
          stored_relevant: response.data.results,
          // product: response.data.results.slice(0,2)
        });
        return response
      } else if(num === null && sortBy ==='helpful'){
        this.setState({
          stored_helpful: response.data.results,
        });
      } else if(num === null && sortBy ==='newest'){
        this.setState({
          stored_newest: response.data.results,
        });
      }
    })
    .then((response)=>{
      if(sortBy === 'relevant')
      this.setState({
        length: response.data.results.length,
        currentLoad: response.data.results,
        product: response.data.results.slice(0,2)
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  moreReviews(num , review_count=2){
    let total = num + review_count
    this.setState({
      count: total,
      product: this.state.currentLoad.slice(0,total)
    })

  }

  handleMore(e){
    e.preventDefault()
    this.moreReviews(this.state.count)
  }

  markHelpful(e){
    e.preventDefault()
    axios.put('/helpful')
  }

  resetCount(){
    this.setState({
      count: 2
    })
  }

  selectFilter(value){
    const filter ={
      'relevant': this.state.stored_relevant,
      'helpful': this.state.stored_helpful,
      'newest': this.state.stored_newest
    }
    this.setState({
      currentLoad: filter[value],
      product: filter[value].slice(0,2)
    })
  }

  render(){

    const style_1 = {
      display:'flex',
      justifyContent: 'center',
      width: '100%',
      position:'relative',
      overflow: 'hidden'

    }
    const style_review_box = {
      height: '500px',
      width: '550px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      margin: '100px',
    }
    const style_body_reviews ={
      wordWrap: 'break-word',
      position: 'relative',
      background: 'sliver',
      flex: 2
    }
    const scolled ={
      position: 'absolute',
      left:0,
      top:0,
      right:0,
      bottom:0,
      overflowY: 'auto'
    }
    const button_style={
      cursor: 'pointer',
    }


    let morebutton
    if (this.state.length > 2 && this.state.count<= this.state.length){
      morebutton = <button disablestyle={button_style} type='submit' onClick={this.handleMore}> MORE REVIEWS</button>
    }
    return(
      <div className='containerAll' style={style_1}>
        <div>{`Ratings & Reviews`}</div>
        <div className='containerBreakdown'>breakdown</div>
        <br></br>
        <br></br>
        <div className='containerReviews' style={style_review_box} >
          <Sorted length={this.state.length} selectFilter={this.selectFilter} product_id={this.props.id} resetCount={this.resetCount}/>
          <div style={style_body_reviews}>
            <div style={scolled}>
              {this.state.product.map((item=>(<div key={item.review_id}><Reviews_list product={item} /></div>)))}
              <br></br>
            </div>
          </div>
          <div>{morebutton}
            <button style={button_style} type='submit'> ADD A REVIEW +   </button>
          </div>
        </div>
      </div>
  )}
}







export default Reviews;