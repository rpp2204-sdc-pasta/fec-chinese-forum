import React from 'react';
import axios from 'axios';
import Reviews_list from './reviews/Reviews_list.jsx'
import Morebutton from './reviews/Morebutton.jsx'
import Ratingbreakdown from './reviews/Ratingbreakdown.jsx'
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
      avgRating: '',
      percent:'',
      breakdownScore: {},
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
          stored_relevant: response.data.reviews.results,
        });
        return response
      } else if(num === null && sortBy ==='helpful'){
        this.setState({
          stored_helpful: response.data.reviews.results,
        });
      } else if(num === null && sortBy ==='newest'){
        this.setState({
          stored_newest: response.data.reviews.results,
        });
      }
    })
    .then((response)=>{
      if(sortBy === 'relevant')
      this.setState({
        length: response.data.reviews.results.length,
        currentLoad: response.data.reviews.results,
        product: response.data.reviews.results.slice(0,2),
        avgRating: response.data.avg,
        percent: response.data.percent,
        breakdownScore: response.data.breakdownScore
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

    return(
      <div className='containerAll' style={style_1}>
        <div className='left'>{`Ratings & Reviews`}
          <div >
            <br></br>
            <Ratingbreakdown avgRating={this.state.avgRating} percent={this.state.percent} breakdownScore={this.state.breakdownScore}/>
          </div>
        </div>
        <div className='right' style={style_review_box} >
          <Sorted length={this.state.length} selectFilter={this.selectFilter} product_id={this.props.id} resetCount={this.resetCount}/>
          <div style={style_body_reviews}>
            <div style={scolled}>
              {this.state.product.map((item=>(<div key={item.review_id}><Reviews_list product={item} /></div>)))}
              <br></br>
            </div>
          </div>
          <div>
            <Morebutton length={this.state.length} count={this.state.count} handleMore={this.handleMore}/>
            <button style={button_style} type='submit'> ADD A REVIEW +   </button>
          </div>
        </div>
      </div>
  )}
}







export default Reviews;