import React from 'react';
import {useState} from 'react';


const style = {
  objectFit: 'cover',
  position: 'relative',
  zInder: 1,
  cursor:'pointer',
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
  zInder: 1000,
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


const Addreview = (props)=>{

  const [isOpen, setIsOpen] =useState(false);

  const toggleModal= () =>{
    setIsOpen (!isOpen)
  }

  const summary = {
    width: '300px',
    height:'300px',
  }

  return(
    <>
      <button style={style} onClick={toggleModal} type='submit'> ADD A REVIEW +   </button>
        {isOpen && <div style={overlay}>
            <div style={another_style}>
              <form>
                <label>
                  First Name: <input type='text' name='Fname'/>
                </label>
                <label>
                  Last Name: <input type='text' name='Lname'/>
                </label>
                <label>
                  Add a Headline: <input type='text' name='summary' style={summary}/>
                </label>
                <label>
                  Add a written summary
                </label>

              </form>
              <button onClick={toggleModal} type='submit'>CLOSE</button>

            </div>


        </div>}
    </>



  )




}

export default Addreview