import React from 'react';



const Ratingbreakdown = (props)=>{

  return (
    <span>
        <div className='containerBreakdown'>
          {props.avgRating}
        </div>
        <div className='starReview'>
          {props.percent}% of reviews recommend this product
          <div className='star'>5 stars</div>
          <div className='star'>4 stars</div>
          <div className='star'>3 stars</div>
          <div className='star'>2 stars</div>
          <div className='star'>1 stars</div>

        </div>
    </span>

  )
}

export default Ratingbreakdown