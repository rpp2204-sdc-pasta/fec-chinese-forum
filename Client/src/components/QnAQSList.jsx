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
      yes: false,
      ansModalImages: []
    }
    this.qsid = this.props.qnaSet.question_id
    this.qs = this.props.qnaSet.question_body
    this.date = this.props.qnaSet.question_date

    this.inputanswer, this.inputname, this.inputemail
    this.imageArr = [];
    this.imageURLS = [];
    this.qshelpful = this.qshelpful.bind(this);
    this.reportQS = this.reportQS.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.reportQS = this.reportQS.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.submitAns = this.submitAns.bind(this);
    this.showModal = this.showModal.bind(this);
    this.loadAns = this.loadAns.bind(this);
    this.collapse = this.collapse.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  qshelpful = () => {
    // console.log(this.state.qshelpfulness);
    axios({
      method:'put',
      url: "/qshelpful",
      data: {
        questionId: this.qsid
      }
    }).then((result)=>{
      // console.log(result);
      this.setState({
        qshelpfulness: this.state.qshelpfulness + 1,
        yes: true
      })
    }).catch(err => {
      console.log(err);
    })
  }

  reportQS = () => {
    // console.log(this.state.reported);
    axios({
      method:'put',
      url: "/reportQs",
      data: {
        questionId: this.qsid
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
  checkAnswer = () => {
    let alert = ''
    if(this.inputanswer === ''){
      alert += ' ' + this.inputanswer
    }
    if(this.inputname === ''){
      alert += ' ' + this.inputname
    }
    if(this.inputemail === ''){
      alert += ' ' + this.inputemail
    }

    if(alert === ''){
      return true
    } else {
      alert(alert);
      return false
    }
  }

  submitAns = (e) => {
    e.preventDefault();
    let checkAnswerer = false
    if(!this.checkAnswer){
      return;
    }
    Object.keys(this.state.ans).forEach(val => {
      // console.log(this.state.ans[val].answerer_name);
      if(this.state.ans[val].answerer_name === this.inputname) {
        checkAnswerer = true;
      }
    });
    if(checkAnswerer) {
      this.showModal();
      return alert("You've already answerd this question.");
    }

    if(this.imageArr.length>0){
      Promise.all(this.uploadtoImageBB()).then((results) => {
        //console.log(results);
        axios({
          method:'post',
          url: "/ans",
          data: {
            questionId: this.qsid,
            opt: {
              body: this.inputanswer,
              name: this.inputname,
              email: this.inputemail,
              photos: this.imageURLS
            }
          }
        })
      }).then(()=>{
        this.showModal();
      }).catch(err => {
        console.log(err);
      })
    } else {
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
        this.showModal();
      }).catch(err => {
        console.log(err);
      })
    }
  }
  uploadtoImageBB = () => {

    let images = this.imageArr.map((val) => {
      let form = new FormData();
      form.append('image', val);
      return axios({
          url: "https://api.imgbb.com/1/upload?key=d923fdc81e7f8d48e0ed4efa4cd3ffdb",
          method: "POST",
          mimeType: "multipart/form-data",
          data: form,
          processData: false
        }).then((result) => {
        //console.log(result.data.data.url);
        this.imageURLS.push(result.data.data.url);
        return result;
      }).catch((err) => {
        console.log(err);
      })
    });

    return images;

  }

  showModal = () => {
    this.setState({
      showAnsModal: this.state.showAnsModal?false:true,
      ansModalImages: []
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

  setImage = (e) => {
    let value = e.target.files;
    let pic = URL.createObjectURL(value[0]);
    this.imageArr.push(value[0]);
    this.setState({ ansModalImages: [...this.state.ansModalImages, pic] });
    //console.log(this.state.ansModalImages);
    e.target.value = null;
  }

  render(){
    let AnsList, loader, A, modalImages, imginput;
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

    if(this.state.ansModalImages.length > 0) {
      modalImages = this.state.ansModalImages.map((val, i) =>
        <img key = {i} className = "QnAImages" src={val}/>
      )
    }

    if(this.state.ansModalImages.length < 5){
      imginput = <input type='file' name='Image' accept="image/*" onChange={this.setImage} className='form-control'></input>
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
                      <div className="required-field">Name:</div>
                      <input name = "inputname" placeholder="Name" onChange={this.setValue} placeholder="Example: jack543!" maxLength="60" required></input><br/>
                      <a className="lvl4">For privacy reasons, do not use your full name or email address</a>
                      <div className="required-field">Email:</div>
                      <input name = "inputemail" placeholder="Alex@email.com" type="email" onChange={this.setValue} placeholder="Email" maxLength="60" required></input><br/>
                      <a className="lvl4">For authentication reasons, you will not be emailed</a><br/>
                      <div className="required-field">Answer:</div>
                      <textarea name = "inputanswer" placeholder="Enter Answer" rows = {4} cols = {25} onChange={this.setValue} size="30" maxLength="1000"required></textarea><br/>
                      {modalImages}
                      {imginput}<br/>
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