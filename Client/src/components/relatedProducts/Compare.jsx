let Compare = (props) => (
  <div className="compare-modal">
    <div className="compare-title">Comparing</div>
    <div className="compare-name">
      <span className="compare-current">{props.data.name.current}</span>
      <span className="feature-name" >{' '}</span>
      <span className="compare-compare">{props.data.name.compare}</span>
    </div>
    <div className="compare-features" >
      {Object.keys(props.data).map((key, index) => {
        // console.log(key);
        if (key !== 'name') {
          return (
          <div key={index} className="compare-roll">
            <span className="compare-current" >{props.data[key].current || ' '}</span>
            <span className="feature-name" >{key}</span>
            <span className="compare-compare" >{props.data[key].compare || ' '}</span>
          </div>)
        }
      })}
    </div>
  </div>
)

export default Compare;