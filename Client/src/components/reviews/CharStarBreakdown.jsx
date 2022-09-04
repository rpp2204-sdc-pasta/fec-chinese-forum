import React from 'react';
import Starinform from './Starinform.jsx'


const CharStarBreakdown =(props)=>{
  let result = [];
  for(let item in props.characteristics){

    result.push(
        <div style={{marginBottom: '21px',display:'flex', flexDirection:'row', justifyContent:'flex-start', gap: '1vw', alignItems: 'center'}}>
            <div>
            {item}
            </div>
            <div style={{height: '2vw'}}>
            <Starinform />
            </div>
        </div>
         )
    }


  return (
    <div className='charstarbreakdown'>
      {result.map(item=> item)}
    </div>
  )
}



export default CharStarBreakdown;