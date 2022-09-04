import React from 'react';
import Starinform from './Starinform.jsx'
import CharStarBreakdown from './CharStarBreakdown.jsx'
import {useState, useEffect} from 'react';


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
  // height: '700px',
  width: '600px',
  maxWidth: '2000px',
  maxHeight: '1900px',
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
  const initialValues = {
    title: '',
    summary: '',
    nickname: '',
    email: '',
    photo:[],
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [charaCount, setCharaCount] = useState(0);

  const [isOpen, setIsOpen] =useState(false);

  const toggleModal= () =>{
    setIsOpen (!isOpen)
  }

  const handleChange = (e)=> {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  const validate = (values) =>{
    const errors = {};
     if(values.title.length < 60) {
      errors.title = 'Headline is too short'
     }
     if(values.summary.length > 1000) {
      errors.title = 'Summary cannot be over 1000 characters'
     }
     if(values.summary.length < 50) {
      errors.summary = 'Summary cannot be less than 50 characters'
     }
     if(values.nickname.length > 60) {
      errors.nickename= 'Nickename cannot be exceed more than 60 characters'
     }
     if(values.email.length > 60 ) {
      errors.email = 'Email cannot be exceed more than 60 characters'
     }
     return errors;
  }
    const countDown = ()=>{
      let currentCount = formValues.summary;
      return 60-currentCount
    }

  return(
    <>
      <button style={style} onClick={toggleModal} type='submit' > ADD A REVIEW +   </button>
        <div className='create'>
            {isOpen && <div style={overlay}>
                <div style={another_style}>
                  {Object.keys(formErrors).length === 0 && isSubmit ? <div>Review Submitted Successfully</div> : null}
                  <form onSubmit={handleSubmit}>
                  <div className='overall-rating-star'>
                    <div style={{marginTop:'20px', fontSize:'Large', fontWeight:'bold', marginBottom:'30px'}}> Overall Rating</div>
                    <div className='starinform'> <Starinform /> </div>
                  </div>
                    <CharStarBreakdown characteristics={props.characteristics}/>
                    <label style={{fontWeight: 'bold',fontSize: 'large'}}>
                      Add a headline: <textarea value={formValues.title} onChange={handleChange} placeholder='Example: Best purchase ever!' maxLength={60} type='text' name='title'  required />
                    </label>
                    <p className='error'>{formErrors.title}</p>
                    <label style={{fontWeight: 'bold',fontSize: 'large'}}>
                      Add a written summary <textarea value={formValues.summary} onChange={handleChange} placeholder='Why did you like the product or not' name='summary' type='text' required/>
                    </label>
                    {formValues.summary.length <=60 ? <span>Minimum required characters left: {60 -formValues.summary.length} </span> : <span>Minimum reached</span>}
                    <p className='error'>{formErrors.summary}</p>
                    <div>Upload a photo</div>
                    <label style={{fontWeight: 'bold',fontSize: 'large'}}>
                      Nickname: <input value={formValues.nickename}  onChange={handleChange} maxLength={60} type='text' name='Fname' placeholder='Example: jackson11!' required/>
                    </label>
                    <p className='error'>{formErrors.nickname}</p>
                    <label style={{fontWeight: 'bold',fontSize: 'large', marginBottom:'0'}}>
                      Email: <input value={formValues.email} onChange={handleChange} maxLength={60} type='email' name='email' placeholder='Example: jackson11@email.com' required/>
                    </label>
                    <span style={{fontSize: 'small'}}>For authentication reasons, you will not be emailed</span>
                    <p className='error'>{formErrors.email}</p>
                    <button>Sumbit Review </button>
                  </form>
                  <button onClick={toggleModal} type='submit'>CLOSE</button>
                </div>
            </div>}
        </div>
    </>

  )




}

export default Addreview