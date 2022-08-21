import React from 'react';
const axios = require('axios');
// const StarRating = require('./components/StarRating.jsx')

const Photo = (props)=>(
      <img src={props.photo.url}
      height= '60'
      width='10%'

      alt={props.photo.id}/>
  )

class Reviews_list extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      helpClicked: false,
      helpfulCount: this.props.product.helpfulness

    }
    this.markHelpful=this.markHelpful.bind(this)
  }

  // handleClick(e){
  //   console.log(e.target.className)
  // }

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
  render(){
    let d = new Date(`${this.props.product.date}`)
    let date = `${d.toLocaleString('default', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()}`
    let Irecommond = <p>✓ I recommond this product</p>
    return(
        <div className={this.props.product.review_id} >
          <p>Reviewer name : {this.props.product.reviewer_name}</p>
          <p>rating : {this.props.product.rating}</p>
          <p style={{fontWeight:'bold'}}> {this.props.product.summary.substring(0,60)}</p>
          {this.props.product.photos.length > 0? this.props.product.photos.map((photo)=>(<picture key={photo.id}><Photo photo={photo}/></picture>)) : null}
          <p>date : {date} </p>
          <p>summary : {this.props.product.body.substring(0,250)}</p>
          {this.props.product.body.length>= 250? <button type='submit'>Show more</button>: null}
          {this.props.product.recommend? Irecommond: null}
          {this.props.product.response? <p>Response from seller: {this.props.product.response}</p> : null}
          <p>Was this review helpful?</p>
          <button disabled={this.state.helpClicked? true: false} type='submit' className={this.props.product.review_id} onClick={this.markHelpful}> Yes ({this.state.helpfulCount})</button>
        </div>
    )
  }
}



export default Reviews_list;