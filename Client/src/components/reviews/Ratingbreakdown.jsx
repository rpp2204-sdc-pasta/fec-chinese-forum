import React from 'react';



const Ratingbreakdown = (props)=>{

  return (
    <div className='breakdownAll'>
        <div className='containerBreakdown'>
          {props.avgRating}
        </div>
        <div>{props.percent}% of reviews recommend this product</div>
        <ul className='starReview'>
        <li className='starBar'>
          <span className='star'>5 stars </span><button style={{'--star5-color': `${props.breakdownScore['5']}%`}} className='progress-bar five'></button>
        </li >
        <li className='starBar'>
         <span className='star'>4 stars </span><button style={{'--star4-color': `${props.breakdownScore['4']}%`}} className='progress-bar four'></button>
        </li>
        <li className='starBar'>
          <span className='star'>3 stars </span><button style={{'--star3-color': `${props.breakdownScore['3']}%`}} className='progress-bar three'></button>
        </li>
        <li className='starBar'>
          <span className='star'>2 stars </span><button style={{'--star2-color': `${props.breakdownScore['2']}%`}} className='progress-bar two'></button>
        </li>
        <li className='starBar'>
         <span className='star'>1 stars </span><button style={{'--star1-color': `${props.breakdownScore['1']}%`}} className='progress-bar one'></button>
        </li>

        </ul>
    </div>

  )
}

export default Ratingbreakdown