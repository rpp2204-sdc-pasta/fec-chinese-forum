import React from 'react';
import Starinform from './Starinform.jsx'


const CharStarBreakdown =(props)=>{
  let result = [];
  for(let item in props.characteristics){
    result.push(
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', gap: '10px 20px', alignItems: 'baseline'}} >
            <div >
            {item}
            </div>
            <div style={{height: '3vw'}}>
            <Starinform onChange={props.onChange}/>
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