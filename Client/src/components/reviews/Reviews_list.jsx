import React from 'react';
import Photo from './Photo.jsx'
const axios = require('axios');
import Report from './Report.jsx'
import StarRating from '../StarRating.jsx'
// const StarRating = require('./components/StarRating.jsx')

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

    const image_style ={
      display: 'flex'
    }

    const date_style ={
      float: 'right'
    }

    const helpful_style ={
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
    const filter=[this.props.one,
                  this.props.two,
                  this.props.three,
                  this.props.four,
                  this.props.five]

    for(let i= 0; i< 5; i++){
      if(this.props.product.rating === i+1 ){
        return (
          filter[i] &&
          <div id={this.props.product.rating} className={this.props.product.review_id} >
          <div className={this.props.product.reviewer_name}>
            <div className='starDate'>
              <span><StarRating rating={this.props.product.rating}/></span>
              <span style={date_style}>{this.props.product.reviewer_name}, {date} </span>
            </div>
            <p style={{fontWeight:'bold'}}> {this.props.product.summary.substring(0,60)}</p>
            <div style={image_style}>
              {this.props.product.photos.length > 0? this.props.product.photos.map((photo)=>(<picture key={photo.id}><Photo photo={photo}/></picture>)) : null}
            </div>
            {this.state.showMore? moreReview: lessReview}
            {this.props.product.body.length>= 250 && !this.state.showMore? <p><button type='submit' onClick={this.handleShowmore}>Show more</button></p>: null}
            {this.props.product.recommend? Irecommond: null}
            {this.props.product.response? <p className='sellerRes'>Response from seller: {this.props.product.response}</p> : null}
            <div>
              Helpful?
              <button style={helpful_style} disabled={this.state.helpClicked? true: false} type='submit' className={this.props.product.review_id} onClick={this.markHelpful}> Yes ({this.state.helpfulCount})</button>
              |
              <Report id={this.props.product.review_id} clickedReport={this.props.clickedReport}/>
            </div>
          </div>
        </div>
        )
      }
    }
  }
}



export default Reviews_list;