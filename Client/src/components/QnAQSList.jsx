import React from "react"
import QnAAnsList from "./QnAAnslist.jsx";
import axios from 'axios';

class QnAList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showAnsModal: false,
      numAns: 2,
      reported: this.props.qnaSet.reported,
      qshelpfulness: this.props.qnaSet.question_helpfulness,
      ans: this.props.qnaSet.answers,
      yes: false
    }
    this.qsid = this.props.qnaSet.question_id
    this.qs = this.props.qnaSet.question_body
    this.date = this.props.qnaSet.question_date

    this.inputanswer, this.inputname, this.inputemail
  }

  qshelpful = () => {
    console.log(this.state.qshelpfulness);
    axios({
      method:'put',
      url: "/qshelpful",
      data: {
        questionId: this.qsid
      }
    }).then((result)=>{
      console.log(result);
      this.setState({
        qshelpfulness: this.state.qshelpfulness + 1,
        yes: true
      })
    }).catch(err => {
      console.log(err);
    })
  }

  reportQS = () => {
    console.log(this.state.reported);
    axios({
      method:'put',
      url: "/reportQs",
      data: {
        questionId: this.qsid
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
  submitAns = (e) => {
    e.preventDefault();
    let checkAnswerer = false
    Object.keys(this.state.ans).forEach(val => {
      console.log(this.state.ans[val].answerer_name);
      if(this.state.ans[val].answerer_name === this.inputname) {
        checkAnswerer = true;
      }
    });
    if(checkAnswerer) {
      this.showModal();
      return alert("You've already answerd this question.");
    }
    axios({
      method:'post',
      url: "/ans",
      data: {
        questionId: this.qsid,
        opt: {
          body: this.inputanswer,
          name: this.inputname,
          email: this.inputemail
        }
      }
    }).then((result)=>{
      console.log(result);
      this.props.refresh();
      this.showModal();
    }).catch(err => {
      //console.log(err);
    })
  }

  showModal = () => {
    this.setState({
      showAnsModal: this.state.showAnsModal?false:true
    })
  }

  loadAns = () => {
    this.setState(
      {
        numAns: Object.keys(this.state.ans).length
      }
    )
  }

  collapse = () => {
    this.setState(
      {
        numAns: 2
      }
    )
  }

  setValue = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this[name] = value;
  }

  render(){
    let AnsList, loader, A;
    let AnsLength = Object.keys(this.state.ans).length;
    if(AnsLength>0){
      AnsList = Object.keys(this.state.ans).slice(0,this.state.numAns).map((ansId, i) =>
        <QnAAnsList key = {i} ans = {this.state.ans[ansId]}/>
      )
    }
    if(AnsLength>0) {
      A = <a><b>A:</b> </a>
    }

    if(this.state.numAns >= AnsLength && AnsLength > 2){
      loader = <button className = "lvl4 buttonLink" onClick = {this.collapse}>- COLLAPSE</button>
    } else if(AnsLength <= 2){
      loader = ''
    } else {
      loader = <button className = "lvl4 buttonLink" onClick = {this.loadAns}>+ LOAD MORE ANSWERS</button>
    }


    return (
      <div className = "QSList">
          <div className = "lvl3 QS"><b>Q: {this.qs}</b></div>
          <div className = "QSOpts">
          <span className = "lvl4">  Helpful? </span>
          <span className = "lvl4">
            {!this.state.yes && <button className = "buttonLink" onClick={this.qshelpful}>Yes</button>}
            {this.state.yes && <a>Yes</a>}
            <span> &#40;{this.state.qshelpfulness}&#41;  |  </span>
          {!this.state.reported && <button className = "buttonLink" onClick={this.reportQS}>Report</button>}
          {this.state.reported && <a>Reported</a>} | </span>

              {
                this.state.showAnsModal &&
                    <form className = "lvl4 ansModal">
                      <input name = "inputname" placeholder="Name" onChange={this.setValue} placeholder="Name" maxLength="60" required></input><br/>
                      <input name = "inputemail" placeholder="Email" type="email" onChange={this.setValue} placeholder="Email" maxLength="60" required></input><br/>
                      <input name = "inputanswer" placeholder="Enter Answer" onChange={this.setValue} size="30" maxLength="1000"required></input><br/>
                      <button type="submit" value="Submit" onClick = {this.submitAns}>Submit</button>
                      <button onClick={this.showModal}>X</button>
                    </form>
              }
              {!this.state.showAnsModal && <button className = "buttonLink" onClick={this.showModal}>Add Answer</button>}
        </div><br/><br/>
        <div id = "ansList">{A}{AnsList}</div>
        {loader}<br/><br/>
    </div>
    )
  }

}

export default QnAList