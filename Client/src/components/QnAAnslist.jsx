import React from "react";
import axios from 'axios';

function QnAAnsList (props) {

  console.log(props.ans);

  const anshelpful = () => {
    //+1 on this answer's helpfulness.
    console.log("This is");
    axios({
      method:'put',
      url: "http://localhost:3000/anshelpful",
      data: {
        ansId: props.ans.id
      }
    }).then((result)=>{
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  }

  const reportAns = () => {
    //notify of reporting.
    axios({
      method:'put',
      url: "http://localhost:3000/reportAns",
      data: {
        ansId: props.ans.id
      }
    }).then((result)=>{
      console.log(result);
      this.setState({
        reported: true
      })
    }).catch(err => {
      console.log(err);
    })

  }


  return (
      <div>
        <a class="lvl3">{props.ans.body}</a><br/>
        <a class="lvl4">by {props.ans.answer_name}, {props.ans.date}  |  Helpful? <a href="#" onClick = {anshelpful}><u>Yes</u></a><a> &#40;{props.ans.helpfulness}&#41;  |  </a><a href="#" onClick = {reportAns}><u>Report</u></a></a><br/>
      </div>
  )
}

export default QnAAnsList;