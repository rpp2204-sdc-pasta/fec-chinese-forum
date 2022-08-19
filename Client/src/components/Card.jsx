import StarRating from './StarRating.jsx';

let Card = (props) => (
  <li>
    <img src={props.item.photos[0].thumbnail_url} />
    <div>{props.item.category}</div>
    <div>{props.item.name}</div>
    <div>{props.item.original_price}/{props.item.sale_price}</div>
    <div><StarRating value={props.item.overallRating}/></div>
  </li>
)

export default Card;