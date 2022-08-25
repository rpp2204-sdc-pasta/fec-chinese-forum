import React from 'react';


class OverviewImagesThumbnail extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <button
        class={this.props.style.name}>
          <picture>
            <img
              class=""
              src=""
              alt=""
              style=""/>
          </picture>
        </button>
      </div>>
    );
  }
}

export default OverviewImagesThumbnail;
