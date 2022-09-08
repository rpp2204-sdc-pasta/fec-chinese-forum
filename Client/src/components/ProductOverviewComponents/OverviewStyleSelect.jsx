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
    var tmpPropStyles = this.props.styles.slice();

    for (var groups = 0; groups < Math.ceil(this.props.styles.length/4); groups++) {
      var group = [];
      if(groups===0) {
          group.push(<OverviewStyle
            count={index}
            style={tmpPropStyles.find(style => style.name===this.props.name)}
            onClick={this.onClickStyleSelect}/>
          );

          let currStyleIndex = tmpPropStyles.indexOf(tmpPropStyles.find(style => style.name===this.props.name));
          console.log(index);
          tmpPropStyles.splice(currStyleIndex,1);
          for (var i = 0; i < 3; i++) {
            if( index < this.props.styles.length) {
              group.push(<OverviewStyle
                count={index} style={tmpPropStyles[index]}
                onClick={this.onClickStyleSelect}/>);
              index++;
            }
          }
      } else {
        for (var i = 0; i < 4; i++) {
          if( index < tmpPropStyles.length) {
            group.push(<OverviewStyle
              count={index} style={tmpPropStyles[index]}
              onClick={this.onClickStyleSelect}/>);
            index++;
          }
        }
      }
      styles.push(<div className='Overview-styleGroupOfFour'>{group}</div>)
      group = [];
    }
    return (

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
