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
    this.date = new Date(this.props.ans.date).toLocaleDateString('en-US');
    this.anshelpful = this.anshelpful.bind(this);
    this.reportAns = this.reportAns.bind(this);
    
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
      // console.log(result);
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
      // console.log(result);
      this.setState({
        reported: true
      })
    }).catch(err => {
      console.log(err);
    })

  }

  render = () => {
    let Yes, Answerer;
    if(!this.state.votedYes){
      Yes = <button className = "buttonLink" onClick = {this.anshelpful}>Yes</button>
    } else {
      Yes = <a>Yes</a>
    }

    if(this.props.ans.answerer_name === "Seller") {
      Answerer = <b>{this.props.ans.answerer_name}</b>
    } else {
      Answerer = this.props.ans.answerer_name;
    }


    return (
      <div className = "ans">
        <a className="lvl3">{this.props.ans.body}</a><br/>
        <span className = "lvl4">by {Answerer}, {this.date}  |  Helpful? {Yes}</span>
        <a className = "lvl4"> &#40;{this.state.yesCount}&#41;  |  </a>
        {!this.state.reported && <button className = "buttonLink" onClick = {this.reportAns}>Report</button>}
        {this.state.reported && <a className = "lvl4">Reported</a>}<br/>
      </div>
    )
  }

}

export default QnAAnsList;