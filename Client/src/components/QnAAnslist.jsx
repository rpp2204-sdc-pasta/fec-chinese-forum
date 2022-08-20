import React from "React"

function QnAAnsList (props) {


  const anshelpful = () => {
    //+1 on this answer's helpfulness.
  }

  const reportAns = () => {
    //notify of reporting.
  }


  return (
      <div>
        <a><b>A: </b></a>
        {props.ans.map((ans, i) =>
          <a class="lvl3">{ans.answer}</a><br/>
          <a class="lvl4">by {ans.user}, {ans.date}  |  Helpful? <p onclick={anshelpful}><u>Yes</u></p><p> &#40;{ans.ansHelpful}&#41;  |  </p><p onclick = {reportAns}><u>Report</u></p></a><br/>
        )}

      </div><br/>
  )
}

export default QnAAnsList