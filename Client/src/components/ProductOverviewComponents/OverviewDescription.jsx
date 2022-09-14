import React from 'react';

class OverviewDescription extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let features;
    if (this.props.features !== undefined) {
      features =
        <div className='Overview-descriptionFeatures'>
          {this.props.features.map((feature =>
            <div>
              {'  '}&#10003; {feature.feature}: {feature.value}
            </div>
          ))}
        </div>;
    }

    return (
      <div className='Overview-Description'>
        <div className='Overview-descriptionSlogan'>
          {this.props.slogan}
          <p className='Overview-descriptionOverview'>
            {this.props.overview}
          </p>
        </div>
        {features}
      </div>
    );
  }
}

export default OverviewDescription;
