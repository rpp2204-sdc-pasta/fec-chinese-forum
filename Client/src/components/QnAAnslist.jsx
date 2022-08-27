import React, {useState} from "react";
import axios from 'axios';


class QnAAnsList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      yesCount: this.props.ans.helpfulness
    }
  }

  anshelpful = () => {
    //+1 on this answer's helpfulness.
    console.log("This is");
    axios({
      method:'put',
      url: "http://localhost:3000/anshelpful",
      data: {
        ansId: this.props.ans.id
      }
    }).then((result)=>{
      console.log(result);
      this.setState({
        yesCount: this.props.ans.helpfulness + 1
      })
    }).catch(err => {
      console.log(err);
    })
  }

  reportAns = () => {
    //notify of reporting.
    axios({
      method:'put',
      url: "http://localhost:3000/reportAns",
      data: {
        ansId: this.props.ans.id
      }
    }).then((result)=>{
      console.log(result);
      this.setState({
        reported: true
      })
    }).catch(err => {
      console.log(err);
    })

  }

  render() {
    return (
      <div>
        <a class="lvl3">{this.props.ans.body}</a><br/>
        <a class="lvl4">by {this.props.ans.answer_name}, {this.props.ans.date}  |  Helpful? <a href="#" onClick = {this.anshelpful}><u>Yes</u></a><a> &#40;{this.state.yesCount}&#41;  |  </a><a href="#" onClick = {this.reportAns}><u>Report</u></a></a><br/>
      </div>
    )
  }

}

export default QnAAnsList;