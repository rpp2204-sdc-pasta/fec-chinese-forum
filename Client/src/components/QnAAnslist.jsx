import React from "react";
import axios from 'axios';


class QnAAnsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      yesCount: this.props.ans.helpfulness,
      votedYes: false,
      reported: false
    };
    this.date = new Date(this.props.ans.date).toLocaleString('en-US');
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
        votedYes: true,
        yesCount: this.state.yesCount + 1
      });
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
    let Yes;
    if(!this.state.votedYes){
      Yes = <button className = "buttonLink" onClick = {this.anshelpful}>Yes</button>
    } else {
      Yes = <a>Yes</a>
    }


    return (
      <div className = "ans">
        <a className="lvl3">{this.props.ans.body}</a><br/>
        <span className = "lvl4">by {this.props.ans.answerer_name}, {this.date}  |  Helpful? {Yes}</span>
        <a className = "lvl4"> &#40;{this.state.yesCount}&#41;  |  </a>
        {!this.state.reported && <button className = "buttonLink" onClick = {this.reportAns}>Report</button>}
        {this.state.reported && <a>Reported</a>}<br/>
      </div>
    )
  }

}

export default QnAAnsList;