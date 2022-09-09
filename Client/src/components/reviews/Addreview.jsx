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

const errcode ={

  fontSize: 'small',
  color: 'red'
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

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log('submit clicked')
    let error = validate(formValues)
    setFormErrors(error);
    if(Object.keys(error).length === 0){
      let options ={
        method: 'post',
        url: '/submit',
        data: formValues
      }
      axios(options)
      .then((response)=>{
        setIsSubmit(response.data)
        })
    }
  }

useEffect(()=>{
  if(isSubmit){
    toggleModal()
    props.reSet()
  }
},[isSubmit])


  const validate = (values) =>{
    const errors = {};
     if(values.summary.length < 1) {
      errors.summary = 'Headline is too short'
     }
     if(values.body.length > 1000) {
      errors.body = 'Summary cannot be over 1000 characters'
     }
     if(values.body.length < 60) {
      errors.body = 'Summary cannot be less than 60 characters'
     }
     if(values.name.length > 60) {
      errors.name= 'Nickename cannot be exceed more than 60 characters'
     }
     if(!values.name.length) {
      errors.name= 'Nickename cannot be empty'
     }
     if(values.email.length > 60 ) {
      errors.email = 'Email cannot be exceed more than 60 characters'
     }
     if(!values.email.length) {
      errors.email = 'Email cannot be empty'
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
                  <form onSubmit={handleSubmit}>
                  <div className='overall-rating-star'>
                    <div style={{ fontSize:'Large', fontWeight:'bold'}}> Overall Rating</div>
                    <div className='starinform'> <Starinform onChange={value => setFormValues({...formValues, rating: value})}/> </div>
                  </div>
                    <CharStarBreakdown onChange={value => value} characteristics={props.characteristics} />
                        <input type="checkbox" id='check' className='toggle' name='recommend' onChange={(e)=>setFormValues({...formValues, recommend:e.target.checked})}/>
                    <label htmlFor='check' style={{display: 'flex', flexDirection:'row', justifyContent:'start', alignItems:'center', gap:'0', fontWeight:'bold', marginBottom:'10px',marginTop:'10px'}}>Do you recommend this product?
                    </label>
                    <label style={{fontWeight: 'bold',fontSize: 'large',marginBottom: '0'}}>
                      Add a headline: <textarea value={formValues.summary} onChange={handleChange} placeholder='Example: Best purchase ever!' type='text' name='summary'  />
                    </label>
                    <p  style={errcode} className='error'>{formErrors.summary}</p>
                    <label style={{fontWeight: 'bold',fontSize: 'large'}}>
                      Add a written summary <textarea style={{marginBottom: '0'}} name='body' value={formValues.body} onChange={handleChange} placeholder='Why did you like the product or not' type='text' />
                    </label>
                    {formValues.body.length <=60 ?
                      <span style={{fontSize: '70%', color: 'red'}}>Minimum required characters left: {60 -formValues.body.length} </span>
                        : <span style={{fontSize: '70%'}}>Minimum reached</span>}
                    <p style={errcode} className='error'>{formErrors.body}</p>
                    <Uploadimage onChange={value => setFormValues({...formValues, photos: value})}/>
                    <label style={{fontWeight: 'bold',fontSize: 'large'}}>
                      Nickname: <input value={formValues.name}  onChange={handleChange} type='text' name='name' placeholder='Example: jackson11!'
                      />
                    </label>
                    <p style={errcode} className='error'>{formErrors.name}</p>
                    <label style={{fontWeight: 'bold',fontSize: 'large', marginBottom:'0'}}>
                      Email: <input style={{marginBottom: '0'}}  value={formValues.email} onChange={handleChange} type='email' name='email' placeholder='Example: jackson11@email.com' />
                    </label>
                    <span style={{fontSize: '60%'}}>For authentication reasons, you will not be emailed</span>
                    <p  style={errcode} className='error'>{formErrors.email}</p>
                    <input style={{textAlign:'center', cursor: 'pointer'}} type="submit" value="Submit" />
                  </form>
                  <button onClick={toggleModal} type='submit'>CLOSE</button>
                </div>
            </div>}
        </div>
    </>

  )




}

export default Addreview