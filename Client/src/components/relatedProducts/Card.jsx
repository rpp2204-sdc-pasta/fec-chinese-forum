import StarRating from '../StarRating.jsx';

let Card = (props) => (
  <>
    <div className="card" >
      <div className="card-img" onClick={props.handleClick} >
        <button className="card-compare-btn" onClick={props.handleCompare}>&#9733;</button>
        <img className="card-current-img" src={props.item.photos[0].url} onClick={() => {props.handleClick(props.item.id)}} />

        {/* <ul className="card-thumbnail">
          {props.item.photos.map(photo => {

          })}
        </ul> */}
      </div>
      <div className="card-info">
        <div className="card-category" >{props.item.category}</div>
        <div className="card-name" >{props.item.name}</div>
        {props.item.sale_price !== null && (<div className="card-price">
            <span className="sale-price" >{'$' + props.item.sale_price}</span>
            <span className="original-price" >{'$' + props.item.original_price}</span></div>)}
        {props.item.sale_price === null && (<div className="card-price">
          <span className="current-price" >{'$' + props.item.original_price}</span></div>)}
        <StarRating rating={props.item.overallRating}/>
      </div>
    </div>
  </>
)

export default Card;
