import React from "react"
import axios from 'axios';

function QnAAnsList (props) {


  const anshelpful = () => {
    //+1 on this answer's helpfulness.
  }

  const reportAns = () => {
    //notify of reporting.
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${id}/helpful`)
  }


  return (
      <div>
        <a class="lvl3">{props.ans.answer}</a><br/>
        <a class="lvl4">by {props.ans.user}, {props.ans.date}  |  Helpful? <p onClick={anshelpful}><u>Yes</u></p><p> &#40;{props.ans.ansHelpful}&#41;  |  </p><p onClick = {reportAns}><u>Report</u></p></a><br/>
      </div>
  )
}

export default QnAAnsList;