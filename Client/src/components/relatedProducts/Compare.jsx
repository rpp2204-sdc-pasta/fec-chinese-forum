let Compare = (props) => (
  <>
    <div className="compare-title">Comparing</div>
    <div className="compare-name">
      <div className="compare-current">{props.current.name}</div>
      <div className="compare-compare">{props.compare.name}</div>
    </div>
    <div className="compare-features" >
      {props.current.features.map(feature => {
        return (<><div>{props.compare.features[feature]}</div><div>{feature}</div><div>{props.compare.features[feature]}</div></>)
      })}
    </div>
  </>
)

export default Compare;