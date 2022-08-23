import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import QSModal from './QnAQSModal.jsx'
import QnASearch from './QnASearch.jsx'
import QnAList from './QnAQSList.jsx'


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
//API call to get questions and answers.
}

loadMore = () => {
this.setState({
numQS: this.state.numQS + 2
})
//send
}

showQSModal = () => {
this.setState({
qsModalshow: true
})
}

Search = (QS) => {
//write search function
}

render() {
return (
<>
    <h3>QUESTIONS &amp; ANSWERS</h3>
  <div>
    <QnASearch search={this.Search.bind(this)} />
  </div>
  <div>
    {this.state.qna.slice(0,this.state.numQS).map((qs, i)=>
    <QnAList qnaSet={qs} />
    )}
  </div>
  <div>
    <button id="loadMore" onClick={this.loadMore}>MORE ANSWER QUESTIONS</button>
    <button onClick={showQSModal}>ADD A QUESTION +</button>
    <Modal isOpen={this.state.qsModalshow}>
      <QnAQSModal/>
    </Modal>
  </div>
</>



)
}
}

export default QnA;