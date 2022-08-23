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
          {this.props.styles[0].name}
        </div>
        <div className="Overview-styles">
          {this.props.styles.map((style, i) =>
          <OverviewStyle
          count={i} style={style}
          onClick={this.onClickStyleSelect}/>)}
        </div>

      </div>
    );
  }
}

export default OverviewStyleSelect;
