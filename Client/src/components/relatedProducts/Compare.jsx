let Compare = (props) => (
  <div className="compare-modal">
    <div className="compare-title">Comparing</div>
    <table className="compare-features" >
      <tr>
        <th className="compare-current">{props.data.name.current}</th>
        <th> </th>
        <th className="compare-compare">{props.data.name.compare}</th>
      </tr>
      {Object.keys(props.data).map((key, index) => {
        // console.log(key);
        if (key !== 'name') {
          return (
          <tr key={index}>
            <td className="compare-current" >{props.data[key].current === true ? <>&#10003;</> :
            (props.data[key].current === null ? <>&#10006;</> : props.data[key].current) }</td>
            <td className="feature-name" >{key}</td>
            <td className="compare-compare" >{props.data[key].compare === true ? <>&#10003;</> :
            (props.data[key].compare === null ? <>&#10006;</> : props.data[key].compare) }</td>
          </tr>)
        }
      })}
    </table>
  </div>
)

export default Compare;