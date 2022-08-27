import React, {useState} from "react";
import axios from 'axios';

function QSModal (props) {


  let question, name, email;


  const submitQS = (e) => {
    e.preventDefault();
    axios({
      method:'post',
      url: "http://localhost:3000/qs/",
      data: {
        body: question,
        name: name,
        email: email,
        product_id: props.productId
      }
    }).then((result)=>{
      console.log(result);
      props.show();
    }).catch(err => {
      console.log(err);
    })
  }

    return (
    <div>
      <form>
        <input placeholder="Name" onChange={(e) => {name = e.target.value}} placeholder="Name"></input><br/>
        <input placeholder="Email" onChange={(e) => {email = e.target.value}} placeholder="Email"></input><br/>
        <input placeholder="Enter Question" onChange={(e) => {question = e.target.value}} size="30"></input><br/>
        <button type="submit" value="Submit" onClick = {submitQS}>Submit</button>
        <button onClick={props.show}>X</button>

      </form>
    </div>
    )
}

export default QSModal