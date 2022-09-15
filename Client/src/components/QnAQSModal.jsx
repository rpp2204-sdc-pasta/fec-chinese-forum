import React, {useState} from "react";
import axios from 'axios';

function QSModal (props) {


  let question, name, email;


  const submitQS = (e) => {
    e.preventDefault();
    axios({
      method:'post',
      url: "/qs",
      data: {
        body: question,
        name: name,
        email: email,
        product_id: props.productId
      }
    }).then((result)=>{
      // console.log(result);
      props.show();
    }).catch(err => {
      console.log(err);
    })
  }


    return (
    <div className = "qsModal">
      <form className = "lvl3 modalForm">
        <div className="lvl2">Ask Your Question</div>
        <div className="lvl4">About the {props.prodName}</div><br/>
        <div className="required-field">Name:</div>
        <input  placeholder="Name" onChange={(e) => {name = e.target.value}} placeholder="Example: jackson11!" required></input><br/>
        <a className="lvl4">For privacy reasons, do not use your full name or email address</a>
        <div className="required-field">Email:</div>
        <input type="email" placeholder="Alex@email.com" onChange={(e) => {email = e.target.value}} placeholder="Email" required></input><br/>
        <a className="lvl4">For authentication reasons, you will not be emailed</a><br/>
        <div className="required-field">Question:</div>
        <textarea className="required-field" placeholder="Enter Question" type = "textarea" rows={8} cols={35} onChange={(e) => {question = e.target.value}} required></textarea><br/>
        <button type="submit" value="Submit" onClick = {submitQS}>Submit</button>
        <button onClick={props.show}>X</button>
      </form>
    </div>
    )
}

export default QSModal