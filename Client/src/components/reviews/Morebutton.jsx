import React from 'react';

const button_style={
  cursor: 'pointer',
}

const Morebutton =(props)=>{

  if(props.length > 2 && props.count<= props.length){
    return(
      <button style={button_style} type='submit' onClick={props.handleMore}> MORE REVIEWS</button>
      )
    } else if(props.count > props.length){
      return(
        <button disabled style={button_style} type='submit' onClick={props.handleMore}> MORE REVIEWS</button>
      )
    }

}




export default Morebutton;