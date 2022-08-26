import React from "react";
import axios from 'axios';

function QnASearch (props) {

  var question;

  const Search = (e) => {
    e.preventDefault();
    console.log(question);
    props.search(question);
  };

  return (
    <div id="searchbox">
    <form>
      <label>
        <input type="text" onChange={(e) => {question = e.target.value}} placeholder="Search Questions..."/>
      </label>
      <button type="submit" onClick={Search}>Submit</button>
      <button onClick={() => {this.onClose();}}>X</button>
    </form>
    </div>
    )
}

export default QnASearch;