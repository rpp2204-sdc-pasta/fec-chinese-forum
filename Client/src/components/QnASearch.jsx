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
    document.getElementById("searchBar").value = ''
    props.cancelSearch();
  }

  return (
    <div id="searchBox">
    <form className = "lvl3" onSubmit = {(e)=>{e.preventDefault()}}>
      <input id = "searchBar" className = "searchBar" type="text" onChange={Search}  placeholder="Have a question? Search for answers..."/>
      <button type = "button" className = "searchClose" onClick={Close}>X</button>
      {/* <button className = "searchSubmit" type="submit" onClick={Search}></button> */}

    </form>
    </div>
    )
}

export default QnASearch;