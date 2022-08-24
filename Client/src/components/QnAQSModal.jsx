import React from "React"

function QSModal (props) {

  const [modalShow, setModalState] = useState(props.show);

  const onClose = () => {
    setModalState(false)
  };


    return (
    <div>
      <form>
        <input style="color:#888;" placeholder="Enter Question"></input>
        <button onClose={() => {this.onClose();}}>X</button>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
    )
}

export default QSModal