import React from 'react';
import StarRating from '../StarRating.jsx'


const Ratingbreakdown = (props)=>{

  return (
    <div className='breakdownAll'>
      <div className='starflex'>
        <div className='containerBreakdown'>{props.avgRating} </div>
        <div className='starSize'> <StarRating rating= {props.avgRating} /></div>
      </div>
        <span>{props.percent}% of reviews recommend this product</span>
        <ul className='starReview'>
        <li id={5} className='starBar' onClick={props.filterReviews_Star}>
          <span className='star'>5 stars </span><div style={{'--star5-color': `${props.breakdownScore['5']}%`}} className='progress-bar five'></div>
        </li >
        <li  id={4} className='starBar' onClick={props.filterReviews_Star}>
         <span className='star'>4 stars </span><div style={{'--star4-color': `${props.breakdownScore['4']}%`}} className='progress-bar four'></div>
        </li>
        <li id={3} className='starBar' onClick={props.filterReviews_Star}>
          <span className='star'>3 stars </span><div style={{'--star3-color': `${props.breakdownScore['3']}%`}} className='progress-bar three'></div>
        </li>
        <li id={2}className='starBar' onClick={props.filterReviews_Star}>
          <span className='star'>2 stars </span><div style={{'--star2-color': `${props.breakdownScore['2']}%`}} className='progress-bar two'></div>
        </li>
        <li id={1}className='starBar' onClick={props.filterReviews_Star}>
         <span className='star'>1 stars </span><div style={{'--star1-color': `${props.breakdownScore['1']}%`}} className='progress-bar one'></div>
        </li>

        </ul>
    </div>

  )
}

export default Ratingbreakdown