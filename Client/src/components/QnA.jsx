import React from 'react';
import axios from 'axios';
import QSModal from './QnAQSModal.jsx'
import QnASearch from './QnASearch.jsx'
import QnAList from './QnAQSList.jsx'


class QnA extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        qna: [],
        qsModalshow: false,
        searching: false,
        searchResult: [],
        numQS: 2
      }
      this.endpoint = "http://localhost:3000/";
    }

    componentDidMount = () => {
      //API call to get questions and answers.
      var options = {
        method:'get',
        url: this.endpoint + "qs/" + this.props.id
      }
      axios(options).then((result)=>{
        this.setState({
          qna: result.data
        })
        console.log(result.data);
      }).catch(err => {
        console.log(err)
      })
    }

    loadMore = () => {
      this.setState({
        numQS: this.state.numQS + 2
      })
      //send
    }

    showQSModal = () => {
      this.setState({
        qsModalshow: qsModalshow?false:true
      })
    }

    Search = (QS) => {
      //write search function
      let searchResult = [];
      this.state.qna.forEach((val) => {
        if(val.question_body.includes(QS)){
          searchResult.push(val);
        }
      });
      if(searchResult.length > 0){
        console.log(searchResult);
        this.setState({
          searchResult: searchResult,
          searching: true
        })
      }
      console.log(this.state);
    }

    cancelSearch = () => {
      this.setState({
        searchResult: [],
        searching: false
      })
    }

    render() {

        return ( <>
            <h3> QUESTIONS &#38; ANSWERS </h3>
            <div><QnASearch search = {this.Search.bind(this)} cancelSearch = {this.cancelSearch.bind(this)}/></div>
            <div>
              {this.state.searching && this.state.searchResult.map((qs, i) =>
                <QnAList qnaSet = {qs}/>)}
              {!this.state.searching && this.state.qna.slice(0, this.state.numQS).map((qs, i) =>
              <QnAList qnaSet = {qs}/>
              )}
            </div>
            <div>
              <button id = "loadMore" onClick = {this.loadMore}> MORE ANSWER QUESTIONS </button>
              {this.state.qsModalshow &&<QSModal  show = {this.showQSModal.bind(this)} productId = {this.props.id} />}{!this.state.qsModalshow && <button onClick = {this.showQSModal}> ADD A QUESTION + </button>}
            </div>
            </>)}
}

export default QnA;