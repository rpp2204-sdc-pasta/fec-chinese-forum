import React from 'react';
import {useState} from 'react'

const imagestyle = {
  objectFit: 'cover',
  border: '0.5px solid #ddd',
  borderRadius: '50%',
  height: '30px',
  width: '30px',
  position: 'relative',
  zInder: 1
}
const another_style ={
  position:'fixed',
  marginLetf: 'auto',
  marginRight: 'auto',
  height: 'auto',
  width: 'auto',
  maxWidth: '800px',
  maxHeight: '800px',
  top: '50%',
  left:'50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: '#FFF',
  padding: '5px',
  zInder: 1000
}

const overlay = {
  position:'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor: 'rgba(0,0,0, .7)',
  zIndex: 1000
}

const Photo = (props)=>{

  const [isOpen, setIsOpen] =useState(false);
  const [reSize, setReSize] = useState(false)
  const toggleModal= () =>{
    setIsOpen (!isOpen)
  }

  if(props.photo.url.includes('unsplash')){
    // let resize = props.photo.url.slice(0, props.photo.url.lastIndexOf('w=')) + 'w=10'
    let resize = (props.photo.url.slice(0, props.photo.url.lastIndexOf('q=')) + 'q=10')
  }

  if(reSize){
    return (
      <>
      <div className={props.photo.id}>
         <img  style={imagestyle} onClick={toggleModal} src={resize} alt={props.photo.id}></img>
         {isOpen && <div style={overlay}><img  style={another_style} onClick={toggleModal} src={resize} alt={props.photo.id}></img></div>}
      </div>
    </>
    )
  } else{
    return(
    <>
      <div className={props.photo.id}>
         <img  style={imagestyle} onClick={toggleModal} src={props.photo.url} alt={props.photo.id}></img>
         {isOpen && <div style={overlay}><img  style={another_style} onClick={toggleModal} src={props.photo.url} alt={props.photo.id}></img></div>}
      </div>
    </>
    )

  }

  // return(
  //   <>
  //     <div className={props.photo.id}>
  //        <img  style={imagestyle} onClick={toggleModal} src={props.photo.url} alt={props.photo.id}></img>
  //        {isOpen && <div style={overlay}><img  style={another_style} onClick={toggleModal} src={props.photo.url} alt={props.photo.id}></img></div>}
  //     </div>
  //   </>
  //   )
}



export default Photo
