import React from "React"

function QSModal (props) {

  const [modalShow, setModalState] = useState(props.show);

  const onClose = () => {
    setModalState(false)
  };


    return (
      <div>
      <form>
        <input></input>
      </form>
      <div>
        <button
          onClose={() => {
            this.onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
    )
}

export default QSModal