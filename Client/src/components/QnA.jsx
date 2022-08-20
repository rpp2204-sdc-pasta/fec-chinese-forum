import React from 'react';
import axios from 'axios';
import QSModal from './QnAQSModal.jsx'
import QnASearch from './QnASearch.jsx'
import QnAList from './QnAList.jsx'


class QnA extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      qna: [],
      qsModalshow: false,
      numQS: 2
    }
  }

  componentDidMount = () => {
    this.sendQSList(2);
  }

  sendQSList = (n) => {
    return this.state.qna.slice(0, n);
  }

  loadMore = () => {
    this.setState({
      numQS: numQS + 2
    })
    sendQSList(this.sate.numQS);
    //send
  }

  showQSModal = (e) => {
    this.setState({
      qsModalshow: true
    })
  }

  Search = (QS) => {
    //write search function
  }

  render() {
    return (
    <h3>QUESTIONS &amp; ANSWERS</h3>
      <QnASearch search = {this.Search.bind(this)}/>
      <QnAList qnaSet={this.sendQSList} />
    <div>
      <button id="loadMore" onClick={this.loadMore}>MORE ANSWER QUESTIONS</button>
      <QSModal id="addQS" show={this.state.qsModalshow}>ADD A QUESTION +</Modal>
    </div>


    )
  }
}

export default QnA;