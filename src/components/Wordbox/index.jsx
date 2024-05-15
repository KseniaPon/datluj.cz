import React, { useEffect, useState } from 'react';
import './style.css';

export const Wordbox = ({ word, onFinish, active, onMistake }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);
  
  const handleKeyUp = (e) => {
      if (e.key === lettersLeft[0]) {
        setLettersLeft(lettersLeft.substr(1))
        setMistake(false)
        if (lettersLeft.substr(1).length === 0) {
          onFinish()
        }
      } else {
        setMistake(true)
        onMistake()
    }
  }
  
  useEffect(() => {
    if (active) {
      window.addEventListener('keyup', handleKeyUp)

      return () => {
        window.removeEventListener('keyup', handleKeyUp)
      }
    }
  }, [lettersLeft, active, onMistake])

  return (
    <>
        <p className={mistake ? "wordbox wordbox--mistake" : "wordbox"}>{lettersLeft}</p>
    </>

  );
};

export default Wordbox;
