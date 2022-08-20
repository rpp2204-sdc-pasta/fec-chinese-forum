import React from 'react';
import axios from 'axios';
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
    <QSModal id="addQS" show={this.state.qsModalshow}>ADD A QUESTION +</QSModal>
  </div>
</>



)
}
}

export default QnA;