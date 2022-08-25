import StarRating from './StarRating.jsx';

let Card = (props) => (
  <div className="card" >
    <div className="card-img">
      <button className="card-compare">&#9733;</button>
      <img className="card-current-img" src={props.item.photos[0].url} />

      {/* <ul className="card-thumbnail">
        {props.item.photos.map(photo => {

        })}
      </ul> */}
    </div>
    <div className="card-info">
      <div className="card-category" >{props.item.category}</div>
      <div className="card-name" >{props.item.name}</div>
      {props.item.sale_price !== null && (<div><span className="current-price" >{props.item.sale_price}</span>
          <span className="original-price" >{props.item.original_price}</span></div>)}
      {props.item.sale_price === null && (<div><span className="current-price" >{props.item.original_price}</span></div>)}
      <StarRating value={props.item.overallRating}/>
    </div>
  </div>
)

export default Card;
