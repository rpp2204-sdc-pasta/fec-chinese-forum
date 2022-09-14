import StarRating from '../StarRating.jsx';

let Card = (props) => (
  <>
    <div className="card" >
      <div className="card-img" >
        <button className="card-function-btn" onClick={props.handleCompare}>&#9733;</button>
        <img className="card-current-img" src={props.item.photos[0].thumbnail_url} onClick={props.handleClick}
         alt={`a picture for ${props.item.name}`}/>

        {/* <ul className="card-thumbnail">
          {props.item.photos.map(photo => {

          })}
        </ul> */}
      </div>
      <div className="card-info" onClick={props.handleClick} >
        <div className="card-category" >{props.item.category}</div>
        <div className="card-name" >{props.item.name}</div>
        {props.item.sale_price !== null && (<div className="card-price">
            <span className="sale-price" >{'$' + props.item.sale_price}</span>
            <span className="original-price" >{'$' + props.item.original_price}</span></div>)}
        {props.item.sale_price === null && (<div className="card-price">
          <span className="current-price" >{'$' + props.item.original_price}</span></div>)}
        <div className="card-star-rating" >
          <StarRating rating={props.item.overallRating} count={props.item.reviewCount}/>
        </div>
      </div>
    </div>
  </>
)

export default Card;
