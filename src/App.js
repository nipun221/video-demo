import { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [buttonColor, setButtonColor] = useState('');

  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
    setButtonColor(isLike ? '' : 'blue');
  };

  return (
    <div>
    <center>
    <div className='appContainer'>
    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      <p className={"" + (isLike ? "text-primary" : "")}>
        <i class="fa fa-thumbs-up" style={{fontSize:"30px", padding:"10px", color: buttonColor}} onClick={onLikeButtonClick}></i>
        <br />
        <p className='text-dark'>Like {like}</p>
      </p>
    </div>
    </center>
    </div>
  );
}

export default App;

