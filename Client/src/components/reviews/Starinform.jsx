import React, {useState} from 'react';

const Starinform =(props)=>{
    const [rating,setRating]= useState(null);
    const [hover, setHover] = useState(null);


    const stardescribe = {
        1: 'Poor',
        2: 'Fair',
        3: 'Avg',
        4: 'Good',
        5: 'Great'
    }

  return (
    <div className="star-rating_reviews" value={props.rating} >
        {[...Array(5)].map((item, i) => {
            const ratingValue = i + 1
            return (
                <div style={{display:'flex', flexDirection:'column'}}>
                    <label>
                        <input type='radio' name='rating' key={ratingValue} value={ratingValue}
                        onClick={()=>{setRating(ratingValue)}}
                        />
                        <div className="single-star-container_reviews" >
                            <div className="single-star-fill_reviews"
                                style={{backgroundColor: ratingValue <= (hover || rating)? 'gold': '#e4e5e9' }}
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}>
                                <img className="single-star-outline_reviews"
                                src="https://i.postimg.cc/L6TpKcYC/star.png" alt="stars alt"></img>
                            </div>
                        </div>
                        <div>{ratingValue === (hover || rating) ? <div style={{fontSize: '70%', fontWeight: 'bold'}}>{stardescribe[ratingValue]}</div> : null }</div>
                    </label>
                </div>
            );
        })}
    </div>
);
};


export default Starinform;