import StarRating from './StarRating.jsx';

let Outfit = (props) => (
  <div className="card" >
    <div className="card-img">
      <button className="card-compare">&times;</button>
      <div className="card-current-img" onClick={() => {props.handleClick(props.item.id)}}>
        {props.item.photos !== undefined && <img src={props.item.photos[0].url} />}
        {props.item.photos === undefined && <p>sry... no img here</p>}
      </div>
      <ul className="card-thumbnail">
        {props.item.photos.map(photo => {

        })}
      </ul>
    </div>
    <div className="card-info">
      <div className="card-category" >{props.item.category}</div>
      <div className="card-name" >{props.item.name}</div>
      {props.item.sale_price !== null && (<div><span className="current-price" >{props.item.sale_price}</span>
          <span className="original-price" >{props.item.original_price}</span></div>)}
      {props.item.sale_price === null && (<div><span className="current-price" >{props.item.original_price}</span></div>)}
      <div className="card-rating" ><StarRating value={props.item.overallRating}/></div>
    </div>
  </div>
)

export default Outfit;