import React from "react";
import axios from 'axios';

function QnASearch (props) {

  const Search = (e) => {
    let question = e.target.value;
    if(question.length >= 3) {
      props.search(question);
    }
  };

  const Close = (e) => {
    e.preventDefault();
    document.getElementById('qnaSearch').value = ''
    props.cancelSearch();
  }

  return (
    <div>
    <form className = "lvl3" id="searchBox">
      <input id = "searchBar" type="text" onChange={Search} size = "50" placeholder="Have a question? Search for answers..."/>
      <button id = "searchButton" type="submit" onClick={Search}>Submit</button>
      <button onClick={Close}>X</button>
    </form>
    </div>
    )
}

export default QnASearch;