import React from 'react';

class Sorted extends React.Component{
  constructor(props){
    super(props)
    this.handleSort=this.handleSort.bind(this)
  }

  handleSort(e){
    this.props.selectFilter(e.target.value)
    this.props.resetCount()
  }

  render() {
    const select_style={
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
    return(
      <div>
        <span>
          {this.props.length} reviews, sorted by
          </span>
          <span>
            <select style={select_style} onChange={this.handleSort}>
              <option className='Relevant' value='relevant'>Relevant</option>
              <option className='Newest' value='newest'>Newest</option>
              <option className='Helpful' value='helpful'>Helpful</option>
            </select>
          </span>

      </div>
    )

  }
}








export default Sorted;