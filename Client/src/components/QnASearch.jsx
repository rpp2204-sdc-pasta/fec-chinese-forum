import React from "react"

function QnASearch (props) {

  var question;

  const Search = (e) => {
    e.preventDefault();
    props.search(question);
  };

  return (
    <div id="searchbox">
    <form onSubmit={Search}>
      <label>
        Question:
        <input type="text" onChange={(e) => {question = e.target.value}} value="Ask a question..."/>
      </label>
      <button type="submit"></button>
    </form>
    </div>
    )
}

export default QnASearch;