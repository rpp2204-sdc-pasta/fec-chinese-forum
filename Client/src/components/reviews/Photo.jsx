import React from 'react';
import {useState} from 'react'
import '/Users/zefengshen/Documents/hack reactor/chinese_forum/Client/src/styles/style.css'
// import '..../src/styles/style.css';


const Photo = (props)=>{
//   const container ={
//     display: 'none',
//     position: 'fixed',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     background: 'rgba(90,90,90, 0.5)',
//     zIndex: 9999,
//   }
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     border: '5px solid #fff',
//     width: '750px',
//     borderRadius: '5px',
//     objectFit: 'cover',
// }
  const [modal, setModal] =useState(true);

  const toggleModal= () =>{
    console.log('modal')
    setModal (!modal)
  }


    return(
      <div>
        <img onClick={toggleModal} src={props.photo.url}
          height= '60'
          width='10%'
          alt={props.photo.id}/>
        <div className='modal' id='modal'>
          <div className='modal-header'>
          <img onClick={toggleModal} src={props.photo.url}
          alt={props.photo.id}/>
          </div>
        </div>
        <div id='overlay'></div>
      </div>
    )
      // return(
      // <div>
      //   <img onClick={toggleModal} src={props.photo.url}
      //   height= '50'
      //   width='5%'
      //   alt={props.photo.id}/>
      //   {modal && (
      //     <dialog className='modalbackground'
      //     style={style}
      //     onClick={toggleModal} >
      //       <img className='image'
      //       src={props.photo.url}
      //       onClick={toggleModal}
      //       alt={props.phot.id}
      //       />
      //     </dialog>
      //   )}
      // </div>

    // )
}



export default Photo
