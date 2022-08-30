import React from 'react';

const CharBreakdown = (props)=>{
  let result = [];
  for(let item in props.characteristics){
    if(item ==='Width' || item ==='Quality' || item ==='Comfort'){
      result.push(
        <div key={props.characteristics[item]['id']} className='bar-title'>
          {item}
          <div>
            <div className='bar-box' style={{'--characteristics-bar': `${props.characteristics[item]['value']*20}%`}}>
                <div >
                  <div className='bar-one'/>
                  <div className='bar-text'>Poor</div>
                </div>
                <div>
                  <div className='bar-two'/>
                  <div className='bar-text'>Good</div>
                </div>
                <div>
                  <div className='bar-three'/>
                  <div className='bar-text'>Perfect</div>
                </div>
            </div>

          </div>

        </div>
      )
    } else{
      result.push(
        <div key={props.characteristics[item]['id']} className='bar-title'>
          {item}
        <div>
          <div className='bar-box' style={{'--characteristics-bar': `${props.characteristics[item]['value']*20}%`}}>
                <div >
                  <div className='bar-one'/>
                  <div className='bar-text'>Too Small</div>
                </div>
                <div>
                  <div className='bar-two'/>
                  <div className='bar-text'>Perfect</div>
                </div>
                <div>
                  <div className='bar-three'/>
                  <div className='bar-text'>Too Big</div>
                </div>
                </div>

            </div>
        </div>
      )
    }
  }

    return (
      <div className='charaBreakdown'>
        {result.map(item=> item)}
      </div>
    )






}


export default CharBreakdown;