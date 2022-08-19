import React from "React"

export default class Modal extends React.Component {
  constructor(props){
    super(props);

  }

  onClose = e => {
    this.props.show = false;
  };

  render() {
      if(!this.props.show){
          return null;
      }
    return (
      <div>
      <from>
        <input></input>
      </form>
      <div>
        <button
          onClose={e => {
            this.onClose(e);
          }}
        >
          Close
        </button>
      </div>
    </div>
    )
  }
}