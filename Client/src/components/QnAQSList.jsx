import React from "react"
import QnAAnsList from "./QnAAnsList.jsx";
import axios from 'axios';

class QnAList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showAnsModal: false,
      numAns: 2,
      reported: this.props.qnaSet.reported,
      qshelpfulness: 0 || this.props.qnaSet.question_helpfulness,
      ans: this.props.qnaSet.answers
    }
    this.qsid = this.props.qnaSet.question_id
    this.qs = this.props.qnaSet.question_body
    this.date = this.props.qnaSet.question_date

    this.inputanswer, this.inputname, this.inputemail
  }

  qshelpful = () => {
    console.log(this.qshelpfulness);
    axios({
      method:'put',
      url: "http://localhost:3000/qshelpful",
      data: {
        questionId: this.qsid
      }
    }).then((result)=>{
      console.log(result);
      this.setState({
        qshelpfulness: this.state.qshelpfulness + 1
      })
    }).catch(err => {
      console.log(err);
    })
  }

  reportQS = () => {
    console.log(this.state.reported);
    axios({
      method:'put',
      url: "http://localhost:3000/reportQs",
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
    axios({
      method:'post',
      url: "http://localhost:3000/ans",
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
        numAns: this.state.numAns + 2
      }
    )
  }

  render(){
    let AnsList
    if(Object.keys(this.state.ans).length>0){
      AnsList = Object.keys(this.state.ans).slice(0,this.state.numAns).map(ansId =>
        <QnAAnsList ans = {this.state.ans[ansId]}/>
      )
    }

    return (
      <div>
        <td>
          <div>
          <a><b>Q: {this.qs}</b></a>
          <span class = "lvl3">  Helpful? </span>
          <span class = "lvl4"><a href="#" onClick={this.qshelpful}><u>Yes</u></a><span> &#40;{this.state.qshelpfulness}&#41;  |  </span>
          {!this.state.reported && <a href="#" onClick={this.reportQS}>Report</a>}
          {this.state.reported && <a href="#">Reported</a>} | </span>

              {
                this.state.showAnsModal &&
                    <form>
                      <input placeholder="Name" onChange={(e) => {this.inputname = e.target.value}} placeholder="Name"></input><br/>
                      <input placeholder="Email" onChange={(e) => {this.inputemail = e.target.value}} placeholder="Email"></input><br/>
                      <input placeholder="Enter Answer" onChange={(e) => {this.inputanswer = e.target.value}} size="30"></input><br/>
                      <button type="submit" value="Submit" onClick = {this.submitAns}>Submit</button>
                      <button onClick={this.showModal}>X</button>
                    </form>
              }
              {!this.state.showAnsModal && <a href="#" onClick={this.showModal}><u>Add Answer</u></a>}
        </div><br/>
        {AnsList}
        <br/>
        </td>
        <button class = "lvl4" onClick = {this.loadAns}>LOAD MORE ANSWERS</button><br/><br/>
    </div>
    )
  }

}

export default QnAList