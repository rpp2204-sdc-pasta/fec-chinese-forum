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
        <input type="text" onChange={(e) => {question = e.target.value}} value="Search Questions..."/>
      </label>
      <button type="submit">X</button>
    </form>
    </div>
    )
}

export default QnASearch;