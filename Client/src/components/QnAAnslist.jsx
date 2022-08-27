import React from "react";
import axios from 'axios';


class QnAAnsList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      yesCount: this.props.ans.helpfulness,
      votedYes: false
    }
  }

  anshelpful = (e) => {
    //+1 on this answer's helpfulness.
    e.preventDefault();
    //console.log("This is Work!");
    axios({
      method:'put',
      url: "/anshelpful",
      data: {
        ansId: this.props.ans.id
      }
    }).then((result)=>{
      console.log(result);
      this.setState({
        yesCount: this.state.yesCount + 1
      })
      this.setState({
        votedYes: true
      })
    }).catch(err => {
      console.log(err);
    })
  }

  reportAns = () => {
    //notify of reporting.
    axios({
      method:'put',
      url: "/reportAns",
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
        <a class="lvl4">by {this.props.ans.answer_name}, {this.props.ans.date}  |  Helpful?
        {!this.state.votedYes ?? <a onClick = {this.anshelpful}><u>Yes</u></a>}
        {this.state.votedYes ?? <a><u>Yes</u></a>}
        <a> &#40;{this.state.yesCount}&#41;  |  </a>
        <a onClick = {this.reportAns}><u>Report</u></a></a><br/>
      </div>
    )
  }

}

export default QnAAnsList;