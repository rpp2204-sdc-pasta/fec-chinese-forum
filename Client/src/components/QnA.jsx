import React from 'react';
import axios from 'axios';
import Modal from './QnAQSModal.jsx'


class QnA extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      qna: [],
      qsModalshow: false
    }
  }
  loadMore = () => {

  }

  showQSModal = (e) => {
    this.setState({
      qsModalshow: true
    })
  }

  render() {
    return (
    <h3>QUESTIONS &amp; ANSWERS</h3>
    <div>
      {/* <QnASearch/> */}
    </div>

    <div>
      {/* <QnAList qnaSet={qna}/> */}
    </div>
    <div>
      <button id="loadMore" onClick={this.loadMore}>MORE ANSWER QUESTIONS</button>
      <Modal id="addQS" onClick={e=>{this.showQSModal} show={this.state.qsModalshow}}>ADD A QUESTION +</Modal>
    </div>


    )
  }
}

export default HelloWorld;