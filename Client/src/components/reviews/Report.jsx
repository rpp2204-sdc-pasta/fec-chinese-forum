import React from 'react';

const helpful_style ={
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline'
}

const Report = (props) =>{

  return (
    <button id={props.id} style={helpful_style} onClick={props.clickedReport}> Report</button>
  )
}


export default Report;