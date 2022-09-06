import React from 'react';
import Starinform from './Starinform.jsx'
import CharStarBreakdown from './CharStarBreakdown.jsx'
import Uploadimage from './Uploadimage.jsx'
import axios from 'axios';
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
  width: '45%',
  height: '80%',
  top: '50%',
  left:'50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: '#FFF',
  padding: '5px',
  zInder: 1000,
  overflowY: 'scroll'
}

const overlay = {
  position:'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor: 'rgba(0,0,0, .7)',
  zIndex: 1000,
}



const Addreview = (props)=>{
  const initialValues = {
    product_id: Number(props.id),
    rating: 0,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos:[],
    characteristics: {},
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
     if(values.summary.length < 60 || values.summary.length === 0) {
      errors.summary = 'Headline is too short'
     }
     if(values.body.length > 1000) {
      errors.body = 'Summary cannot be over 1000 characters'
     }
     if(values.body.length < 50 || values.body.length === 0) {
      errors.body = 'Summary cannot be less than 50 characters'
     }
     if(values.name.length > 60) {
      errors.name= 'Nickename cannot be exceed more than 60 characters'
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

  const submitReview = () =>{
    e.preventDefault(e);
    if(Object.keys(formErrors).length === 0){
      let options ={
        method: 'post',
        url: '/submit',
        data: formValues
      }
      return axios(options)
      .catch((err)=>{
        console.log(err)
      })
      toggleModal()
    }
  }

  return(
    <>
      <button style={style} onClick={toggleModal} type='submit' > ADD A REVIEW +   </button>
        <div className='create'>
            {isOpen && <div style={overlay}>
                <div style={another_style}>
                  <form onSubmit={handleSubmit}>
                  <div className='overall-rating-star'>
                    <div style={{marginTop:'20px', fontSize:'Large', fontWeight:'bold', marginBottom:'10px'}}> Overall Rating</div>
                    <div className='starinform'> <Starinform onChange={value => setFormValues({...formValues, rating: value})}/> </div>
                  </div>
                    <CharStarBreakdown onChange={value => value} characteristics={props.characteristics} />
                    <label style={{display: 'flex', flexDirection:'row', justifyContent:'end', alignItems:'center', fontWeight:'bold', marginBottom:'10px'}}>Do you recommend this product?
                        <input type="checkbox" name='recommend' onChange={(e)=>setFormValues({...formValues, recommend:e.target.checked})}/>
                    </label>
                    <label style={{fontWeight: 'bold',fontSize: 'large',marginBottom: '0'}}>
                      Add a headline: <textarea value={formValues.summary} onChange={handleChange} placeholder='Example: Best purchase ever!' maxLength={60} type='text' name='summary'  required />
                    </label>
                    <p className='error'>{formErrors.summary}</p>
                    <label style={{fontWeight: 'bold',fontSize: 'large'}}>
                      Add a written summary <textarea style={{marginBottom: '0'}} value={formValues.body} onChange={handleChange} placeholder='Why did you like the product or not' name='body' type='text' required/>
                    </label>
                    {formValues.body.length <=60 ?
                      <span style={{fontSize: '70%', color: 'red'}}>Minimum required characters left: {60 -formValues.body.length} </span>
                        : <span style={{fontSize: '70%'}}>Minimum reached</span>}
                    <p className='error'>{formErrors.body}</p>
                    <Uploadimage onChange={value => setFormValues({...formValues, photos: value})}/>
                    <label style={{fontWeight: 'bold',fontSize: 'large'}}>
                      Nickname: <input value={formValues.name}  onChange={handleChange} maxLength={60} type='text' name='name' placeholder='Example: jackson11!' required/>
                    </label>
                    <p className='error'>{formErrors.name}</p>
                    <label style={{fontWeight: 'bold',fontSize: 'large', marginBottom:'0'}}>
                      Email: <input style={{marginBottom: '0'}}  value={formValues.email} onChange={handleChange} maxLength={60} type='email' name='email' placeholder='Example: jackson11@email.com' required/>
                    </label>
                    <span style={{fontSize: '60%'}}>For authentication reasons, you will not be emailed</span>
                    <p className='error'>{formErrors.email}</p>
                    <button style={{textAlign:'center'}} onClick={submitReview}>Sumbit Review </button>
                  </form>
                  <button onClick={toggleModal} type='submit'>CLOSE</button>
                </div>
            </div>}
        </div>
    </>

  )




}

export default Addreview