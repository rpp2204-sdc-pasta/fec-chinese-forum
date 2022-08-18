import StarRating from './StarRating.jsx';

let Card = (props) => (
  <li>
    <img src={props.item.img_url} />
    <div>{props.item.category}</div>
    <div>{props.item.name}</div>
    <div>{props.item.price}/{props.item.sale_price}</div>
    <div><StarRating value={props.item.review}/></div>
  </li>
)

export default Card;