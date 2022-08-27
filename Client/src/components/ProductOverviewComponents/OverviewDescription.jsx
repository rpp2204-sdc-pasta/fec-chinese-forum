import React from 'react';

class OverviewDescription extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let features;
    if(this.props.features !== undefined) {
      features = <div className='Overview-descriptionFeatures'>
        {this.props.features.map((feature =>
          <div>
            {feature.feature}: {feature.value}
          </div>
        ))}
      </div>;
    }

    return (
      <div>
        <div className='Overview-descriptionSlogan'>
          {this.props.slogan}
        </div>
        <p className='Overview-descriptionOverview'>
          {this.props.overview}
        </p>
        {features}
        </div>
    );
  }
}

export default OverviewDescription;