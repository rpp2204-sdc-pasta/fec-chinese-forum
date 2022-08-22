import React from 'react';
import {useState} from 'react'


const Photo = (props)=>{
  const style = {display: none,
  position: fixed,
  zIndex: 1,
  paddingTop: 100px,
  left: 0,
  top: 0,
  width: 100%,
  height: 100%,
  overFlow: auto,
  backgroundColor: rgb(0,0,0),
  backgroundColor: rgba(0,0,0,0.9),
}
  const [modal, setModal] =useState(true);

  const toggleModal= () =>{
    console.log('modal')
    setModal (!modal)
  }

  if (modal){
    return(
        <img onClick={toggleModal} src={props.photo.url}
        height= '60'
        width='10%'
        alt={props.photo.id}/>

    )
  } else {
    return (
      <img onClick={toggleModal} src={props.photo.url} className='modalbackground'
      style={style}
      alt={props.photo.id}/>
    )
  }

}



export default Photo
