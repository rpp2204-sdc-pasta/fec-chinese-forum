import React from 'react';
import axios from 'axios';
import Reviews_list from './reviews/Reviews_list.jsx'
import Morebutton from './reviews/Morebutton.jsx'
import Ratingbreakdown from './reviews/Ratingbreakdown.jsx'
import CharBreakdown from './reviews/CharBreakdown.jsx'
import Sorted from './reviews/Sorted.jsx'
import Addreview from './reviews/Addreview.jsx'



class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stored_relevant: [],
      stored_helpful: [],
      stored_newest:[],
      currentLoad: [],
      currentSort:'relevant',
      product: [],
      count: 2,
      length: '',
      avgRating: '',
      percent:'',
      breakdownScore: {},
      characteristics: {},
      report: true,
      fiveStar: true,
      fourStar: true,
      threeStar: true,
      twoStar: true,
      oneStar: true,
      filter: '',
      reRender: false


    }
    this.handleMore=this.handleMore.bind(this)
    this.getProductcount=this.getProductcount.bind(this)
    this.moreReviews=this.moreReviews.bind(this)
    this.resetCount=this.resetCount.bind(this)
    this.selectFilter=this.selectFilter.bind(this)
    this.getMeta=this.getMeta.bind(this)
    this.clickedReport=this.clickedReport.bind(this)
    this.reportData=this.reportData.bind(this)
    this.filterReviews_Star=this.filterReviews_Star.bind(this)
    this.filterState=this.filterState.bind(this)
    this.reSet=this.reSet.bind(this)
  }


  componentDidMount(){
      this.getProductcount('relevant', this.props.id)
      this.getMeta(this.props.id)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
        this.getProductcount('relevant', this.props.id)
        this.getMeta(this.props.id)
    }
    if(this.state.filter !== prevState.filter){
      // console.log(this.state.filter)
      this.selectFilter(this.state.filter)
      this.resetCount()
    }
    if(this.state.reRender !== prevState.reRender){
      // console.log(this.state.filter)
      this.getProductcount(this.state.filter, this.props.id)
    }
  }

  getProductcount(filter, product_id){
    // console.log(filter)
    let relevant = axios.post('/reviews',
                      {sort: 'relevant',
                      productId: product_id
                      }).catch((err)=>{
                        console.log(err)
                      })
    let helpful = axios.post('/reviews',
                  {sort: 'helpful',
                  productId: product_id
                  }).catch((err)=>{
                    console.log(err)
                  })
    let newest = axios.post('/reviews',
                  {sort: 'newest',
                  productId: product_id
                  }).catch((err)=>{
                    console.log(err)
                  })
    Promise.all([relevant, helpful, newest])
    .then((result)=>{
      this.setState({
        stored_relevant: result[0].data.reviews.results,
        stored_helpful: result[1].data.reviews.results,
        stored_newest: result[2].data.reviews.results,
      })
      if(filter === 'relevant'){
        this.setState({
          length: result[0].data.reviews.results.length,
          currentLoad: result[0].data.reviews.results,
          product: result[0].data.reviews.results.slice(0,2),
        })
      } else if(filter === 'helpful'){
        this.setState({
          length: result[1].data.reviews.results.length,
          currentLoad: result[1].data.reviews.results,
          product: result[1].data.reviews.results.slice(0,2),
        })
      } else if(filter === 'newest'){
        this.setState({
          length: result[2].data.reviews.results.length,
          currentLoad: result[2].data.reviews.results,
          product: result[2].data.reviews.results.slice(0,2),
        })
      }
    })
  }

  moreReviews(num , review_count=2){
    let total = num + review_count
    this.setState({
      count: total,
      product: this.state.currentLoad.slice(0,total)
    })

  }

  handleMore(e){
    e.preventDefault()
    this.moreReviews(this.state.count)
  }

  resetCount(){
    this.setState({
      count: 2
    })
  }

  selectFilter(value){
    const filter ={
      'relevant': this.state.stored_relevant,
      'helpful': this.state.stored_helpful,
      'newest': this.state.stored_newest
    }
    this.setState({
      currentSort: value,
      currentLoad: filter[value],
      product: filter[value].slice(0,2)
    })
  }

  getMeta(product_id){
    axios.get('/reviews/meta',{params: {
      product_id: product_id}
    })
    .then((response)=>{
      this.setState({
        avgRating: response.data.avg,
        percent: response.data.percent,
        breakdownScore: response.data.breakdownScore,
        characteristics: response.data.characteristics,
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  reportData(sorted, data){
    return sorted.filter((item)=>{
      return item['review_id'] !== Number(data)
    })
  }

  clickedReport(e){
    e.preventDefault()
    let helpful = this.reportData(this.state.stored_helpful, e.target.id)
    let relevant = this.reportData(this.state.stored_relevant, e.target.id)
    let newest = this.reportData(this.state.stored_newest, e.target.id)
    this.setState({
      stored_helpful: helpful,
      stored_newest: newest,
      stored_relevant : relevant,
      length: relevant.length
    })
    if(this.state.currentSort === 'helpful'){
      this.setState({
        currentLoad: helpful,
      })
      this.setState({
        product: helpful.slice(0,2)
      })
    } else if(this.state.currentSort === 'newest'){
      this.setState({
        currentLoad: newest
      })
      this.setState({
        product: newest.slice(0,2)
      })
    } else {
      this.setState({
        currentLoad: relevant,
      })
      this.setState({
        product: relevant.slice(0,2)
      })
    }
  }

  filterReviews_Star(e){
    e.preventDefault();
    if(e.target.id === '5'){
      this.setState(prevState=>({
        fiveStar: !this.state.fiveStar
      }))
    } else if(e.target.id === '4'){
      this.setState(prevState=>({
        fourStar: !prevState.fourStar
      }))
    } else if(e.target.id === '3'){
      this.setState(prevState=>({
        threeStar: !prevState.threeStar
      }))
    } else if(e.target.id === '2'){
      this.setState(prevState=>({
        twoStar: !prevState.twoStar
      }))
    }else if(e.target.id === '1'){
      this.setState(prevState=>({
        oneStar: !prevState.oneStar
      }))
    }
  }

  filterState(value){
    this.setState({
      filter: value
    })
  }

  reSet(){
    this.setState(prevState=>({
      reRender: !prevState.reRender
    }))
  }


  render(){

    const style_overall = {
      display:'flex',
      justifyContent: 'center',
      width: '80%',
      position:'relative',
      overflow: 'hidden'

    }
    const style_review_box = {
      height: '500px',
      width: '550px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      marginRight: 0,
      marginTop: '7%',
      marginLeft: '8%',
      marginBottom: '3%'
    }
    const style_body_reviews ={
      wordWrap: 'break-word',
      position: 'relative',
      background: 'sliver',
      flex: 2
    }
    const scolled ={
      position: 'absolute',
      left:0,
      top:0,
      right:0,
      bottom:0,
      overflowY: 'auto'
    }
    const button_style={
      cursor: 'pointer',
    }

    return(
      <div className='containerAll' style={style_overall}>
        <div className='left' style={{marginLeft:'9%'}}>
          <div className='reviewTitle'>
            {`Ratings & Reviews`}
          </div>
          <div >
            <Ratingbreakdown avgRating={this.state.avgRating} percent={this.state.percent} breakdownScore={this.state.breakdownScore}
            filterReviews_Star={this.filterReviews_Star}/>
            <CharBreakdown characteristics={this.state.characteristics}/>
          </div>
        </div>
        <div className='right' style={style_review_box} >
          <Sorted length={this.state.length} product_id={this.props.id} filterState={this.filterState}/>
          <div style={style_body_reviews}>
            <div style={scolled}>
              {this.state.product.map((item=>
                 <div key={item.review_id}>
                    <Reviews_list product={item} clickedReport={this.clickedReport} report={this.state.report}
                    five={this.state.fiveStar} four={this.state.fourStar} three={this.state.threeStar} two={this.state.twoStar} one={this.state.oneStar}/>
                </div>))}
              </div>
            </div>
          <div>
            <Morebutton length={this.state.length} count={this.state.count} handleMore={this.handleMore}/>
            <Addreview characteristics={this.state.characteristics} id={this.props.id} reSet={this.reSet} />
          </div>
        </div>
      </div>
  )}
}







export default Reviews;