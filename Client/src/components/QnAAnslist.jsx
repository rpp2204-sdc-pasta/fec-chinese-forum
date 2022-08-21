import React from "React"
import axios from 'axios';

function QnAAnsList (props) {


  const anshelpful = () => {
    //+1 on this answer's helpfulness.
  }

  const reportAns = () => {
    //notify of reporting.
  }


  return (
      <div>
        <a class="lvl3">{props.ans.answer}</a><br/>
        <a class="lvl4">by {props.ans.user}, {props.ans.date}  |  Helpful? <p onclick={anshelpful}><u>Yes</u></p><p> &#40;{props.ans.ansHelpful}&#41;  |  </p><p onclick = {reportAns}><u>Report</u></p></a><br/>
      </div>
  )
}

export default QnAAnsList;