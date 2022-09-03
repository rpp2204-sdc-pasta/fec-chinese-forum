import React from 'react';

const Star =()=>{
  return (
      <svg height='24px' width='24px' fill='yellow'>
        ☆
        hi
      </svg>
  )
}



const Starinform = (props)=>{

  const stars=[1,2,3,4,5]
  return(

    <div className='star-container'>

      <Star />

    </div>

  )
}


export default Starinform;