import React, { useEffect, useState } from 'react';
import './style.css';

const Wordbox = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  

  const handleKeyUp = (e) => {
    console.log(e)
    if (e.key === lettersLeft[0]) {
      setLettersLeft(lettersLeft.substr(1))
      console.log(lettersLeft.substr(1))
    }
    
  }
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [lettersLeft])

  
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
