import React from "React"

function QSModal (props) {

  const [modalShow, setModalState] = useState(props.show);

  const onClose = () => {
    setModalState(false)
  };


    return (
    <div>
      <button onClose={() => {this.onClose();}}>X</button>
      <form>
        <input style="color:#888;" placeholder="Enter Question"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
    )
}

export default QSModal