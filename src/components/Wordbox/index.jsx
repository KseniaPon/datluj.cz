import React, { useEffect, useState } from 'react';
import './style.css';

export const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  

  const handleKeyUp = (e) => {
    if (e.key === lettersLeft[0]) {
      setLettersLeft(lettersLeft.substr(1))
      console.log(lettersLeft.substr(1).length)
      console.log(e)
      if (lettersLeft.substr(1).length === 0) {
        console.log('Finish')
        console.log(lettersLeft.substr(1))
        onFinish()
      }
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
