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

      this.loadMore = this.loadMore.bind(this)
      this.showQSModal = this.showQSModal.bind(this)
      this.Search = this.Search.bind(this)
      this.collapse = this.collapse.bind(this)
      this.cancelSearch = this.cancelSearch.bind(this)
      this.getData = this.getData.bind(this)
    }

    componentDidMount() {
      //API call to get questions and answers.
      // console.log(this.props.id)
      this.getData();
    }

    componentDidUpdate(prevProps) {
      if (this.props.id !== prevProps.id) {
        this.getData();
        this.setState({
          qsModalshow: false,
          searching: false,
          searchResult: [],
          numQS: 2
        })
      }
    }

    getData() {
      var options = {
        method:'get',
        url:  "/qs/" + this.props.id
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


    loadMore() {
      this.setState({
        numQS: this.state.numQS + 2
      })
      //send
    }

    showQSModal() {
      this.setState({
        qsModalshow: this.state.qsModalshow?false:true
      })
    }

    Search(QS) {
      //write search function
      let searchResult = [];
      this.state.qna.forEach((val) => {
        if(val.question_body.includes(QS)){
          searchResult.push(val);
        }
      });
      if(searchResult.length > 0){
        //console.log(searchResult);
        this.setState({
          searchResult: searchResult,
          searching: true
        })
      }
      //console.log(this.state);
    }

    collapse() {
      this.setState({
        numQS: 2
      })
    }

    cancelSearch() {
      this.setState({
        searchResult: [],
        searching: false
      })
    }

    render() {
        let loader, collaps;
        if(this.state.numQS > 2 && this.state.qna.length != 0) {
          collaps = <button className = "buttonLink" id = "collapse" onClick = {this.collapse}> - COLLAPSE</button>
        }
        if(this.state.qna.length > 2) {
          loader = <button className = "buttonLink" id = "loadMore" onClick = {this.loadMore}> + MORE QUESTIONS </button>
        }

        return (
            <div className = "QnA">
            <h3> QUESTIONS &#38; ANSWERS </h3>
            {(this.state.qna.length === 0 && !this.state.qsModalshow) && <button onClick = {this.showQSModal}> ADD A QUESTION + </button>}
            {(this.state.qna.length > 0 && !this.state.qsModalshow) && <QnASearch search = {this.Search.bind(this)} cancelSearch = {this.cancelSearch.bind(this)}/>}
            <div id = "QSList">
              {this.state.searching && this.state.searchResult.map((qs, i) =>
                <QnAList key = {qs.question_id} qnaSet = {qs}/>)}
              {!this.state.searching && this.state.qna.slice(0, this.state.numQS).map((qs, i) =>
              <QnAList key = {qs.question_id} qnaSet = {qs} refresh = {this.componentDidUpdate}/>
              )}
            </div>
            <div>
              {collaps}
              {loader}
              {this.state.qsModalshow &&<QSModal  show = {this.showQSModal.bind(this)} productId = {this.props.id} prodName = {this.props.prodName}/>}{(this.state.qna.length > 0 && !this.state.qsModalshow) && <button  className = "buttonLink addQS" onClick = {this.showQSModal}> ADD A QUESTION + </button>}
            </div>
            </div>)}
}

export default QnA;