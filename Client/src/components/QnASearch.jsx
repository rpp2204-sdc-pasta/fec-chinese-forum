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
      <input onChange={e => question = e.target.value}>"HAVE A QUESTION? SEARCH FOR ANSWERS..."</input>
      <button type="submit"></button>
    </form>
    </div>
    )
}

export default QnASearch;