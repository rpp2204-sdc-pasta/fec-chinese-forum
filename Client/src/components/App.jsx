import { useState } from 'react';
import css from '../styles/style.css';
import { OverviewWithTracker, RelatedWithTracker, QnAWithTracker, ReviewsWithTracker } from './ClickTracker.jsx';
import {useRef} from 'react';

let App = (props) => {
  const queryParams = new URLSearchParams(window.location.search);
  const product_id = queryParams.get("product_id") || '71700';
  let [id, setID] = useState(product_id);
  let [prodName, setName] = useState('');
  let [renderOutfit, setRenderOutfit] = useState(false);
  const colorTheme = {
    "dark": {
      backgroundColor: "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)"
    },
    "light": {
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(0, 0, 0)"
    }
  };
  let [theme, setTheme] = useState(colorTheme['light']);
  let [isDarkMode, setIsDarkMode] = useState(true);

  const reviewsRef = useRef();
  const handleScrollToReview = () => {
    reviewsRef.current.scrollIntoView({behavior: 'smooth'});
  };
  let toggleTheme = () => {
    setIsDarkMode(current => !current);
    if (isDarkMode) {
      setTheme(colorTheme['dark']);
    } else {
      setTheme(colorTheme['light']);
    }
  };

  return (
    <>
      <style>{'body {background-color:' + theme.backgroundColor + ';color:' + theme.color + ';}'}</style>
      <h2 onClick={toggleTheme}>
        Chinese Forum
      </h2>
      <OverviewWithTracker id={id} handleScrollToReview={handleScrollToReview} getName={setName} setRenderOutfit={setRenderOutfit} />
      <RelatedWithTracker id={id} handleClick={setID} renderOutfit={renderOutfit} setRenderOutfit={setRenderOutfit} theme={theme}/>
      <QnAWithTracker id={id} prodName={prodName}/>
      <div ref={reviewsRef}>
        <ReviewsWithTracker  id={id} theme={theme}/>
      </div>
    </>
  );
}

export default App;
