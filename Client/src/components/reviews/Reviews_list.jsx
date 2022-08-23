import React from 'react';
import Photo from './Photo.jsx'
const axios = require('axios');
// const StarRating = require('./components/StarRating.jsx')

// const Photo = (props)=>(
//       <img src={props.photo.url}
//       height= '60'
//       width='10%'
//       alt={props.photo.id}/>
//   )

class Reviews_list extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      helpClicked: false,
      helpfulCount: this.props.product.helpfulness,
      showMore: false

    }
    this.markHelpful=this.markHelpful.bind(this)
    this.handleShowmore=this.handleShowmore.bind(this)
  }

  markHelpful(e){
    e.preventDefault()
    let options = {
      method:'put',
      url: `/reviews/${e.target.className}`,
      // params: {review_id: e.target.className}
    }
    axios(options)
    .then((response)=>{
      this.setState({
        helpfulCount: this.state.helpfulCount +1,
        helpClicked: true
      })
    })
  }

  handleShowmore(e){
    e.preventDefault();
    this.setState({
      showMore: true
    })

  }



  render(){
    let d = new Date(`${this.props.product.date}`)
    let date = `${d.toLocaleString('default', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()}`
    let Irecommond = <p>✓ I recommond this product</p>
    let lessReview = <p>summary : {this.props.product.body.substring(0,250)}</p>;
    let moreReview = <p>summary : {this.props.product.body}</p>
    const style = {
     display: 'none',
     position: 'fixed',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
     background: 'rgba(90,90,90, 0.5)',
     zIndex: 9999,
    }
    return(
        <div className={this.props.product.review_id} >
          <p>Reviewer name : {this.props.product.reviewer_name}</p>
          <p>rating : {this.props.product.rating}</p>
          <p style={{fontWeight:'bold'}}> {this.props.product.summary.substring(0,60)}</p>
          {this.props.product.photos.length > 0? this.props.product.photos.map((photo)=>(<picture key={photo.id}><Photo photo={photo}/></picture>)) : null}
          <p>date : {date} </p>
          {this.state.showMore? moreReview: lessReview}
          {this.props.product.body.length>= 250 && !this.state.showMore? <button type='submit' onClick={this.handleShowmore}>Show more</button>: null}
          {this.props.product.recommend? Irecommond: null}
          {this.props.product.response? <p>Response from seller: {this.props.product.response}</p> : null}
          <p>Was this review helpful?</p>
          <button disabled={this.state.helpClicked? true: false} type='submit' className={this.props.product.review_id} onClick={this.markHelpful}> Yes ({this.state.helpfulCount})</button>
        </div>
    )
  }
}



export default Reviews_list;