import React from "React"
import QnAAnsList from "./QnAAnsList.jsx";

function QnAList (props) {

  var numAns = 2;

  const sendAns = (n) => {
    return
  };

  const qshelpful = () => {

  }
  const addAnswer = () => {

  }

  const loadAns = () => {

  }

  return (
    <div>
      {props.qnaSet.map((qna, i) =>
      <div>
        <a><b>Q: {qna.question}</b></a>
      </div>
      <div id = "qsChoice">
        <a class = "lvl3">Helpful? </a>
        <a class = "lvl4"><p onclick={qshelpful}><u>Yes</u></p><p> &#40;{qna.qsHelpful}&#41;  |  </p><p onclick={addAnswer}><u>Add Answer</u></p></a>
      </div><br/>
      <div>
        <a><b>A: </b></a>
        <QnAAnsList ans = {sendAns}/>
      <p class = "lvl4" onclick = {loadAns}><b>LOAD MORE ANSWERS</b></p>
      </div><br/>
      )}
  </div>

  )
}

export default QnAList