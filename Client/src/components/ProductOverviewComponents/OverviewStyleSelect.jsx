import React from 'react';
import OverviewStyle from './OverviewStyle.jsx';

class OverviewStyleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.onClickStyleSelect = this.onClickStyleSelect.bind(this);
  }

  onClickStyleSelect(style_id) {
    this.props.changeStyle(style_id);
  }

  render() {
    var index = 0;
    var styles = [];
    for (var groups = 0; groups < Math.ceil(this.props.styles.length/4); groups++) {
      var group = [];
      for (var i = 0; i < 4; i++) {
        if( index < this.props.styles.length) {
          group.push(<OverviewStyle
            count={index} style={this.props.styles[index]}
            onClick={this.onClickStyleSelect}/>);
          index++;
        }
      }
      styles.push(<div className='Overview-styleGroupOfFour'>{group}</div>)
      group = [];
    }
    console.log('numofprops: ',this.props.styles.length);
    return (
      //style selector will show thumbnail of different styles
			//4 per row
			//overlay of checkmark on top of selected style
			//selected style will be first on list
			//clicking on selected thumbnail will not do anything
			//Only one style can be selected at a time.
			//A style must be selected at all times
      <div>
        <div className='Overview-styleSelect'>
          {this.props.name}
        </div>
        <div className="Overview-styles">
          {styles}
        </div>

      </div>
    );
  }
}

export default OverviewStyleSelect;
