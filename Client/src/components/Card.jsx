import StarRating from './StarRating.jsx';

let Card = (props) => (
  <li>
    <img src={props.img_url} />
    <div>
      {props.description}
    </div>
    <div>
      <StarRating value={props.review}/>
    </div>
  </li>
)

export default Card;