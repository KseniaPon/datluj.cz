import React, { useEffect, useState } from 'react';
import './style.css';

export const Wordbox = ({ word, onFinish, active, id }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false); 

  const handleKeyUp = (e) => {
      if (e.key === lettersLeft[0]) {
        setLettersLeft(lettersLeft.substr(1))
        setMistake(false)
        console.log(e)
        if (lettersLeft.substr(1).length === 0) {
          onFinish()
        }
      } else {
        setMistake(true)
    }
  }
  useEffect(() => {
    if (active) {
      window.addEventListener('keyup', handleKeyUp)
      console.log('add')
  
      return () => {
        window.removeEventListener('keyup', handleKeyUp)
        console.log('remove')
      }
    }
   
  }, [lettersLeft, active])

  
  
  return (
    <>
        <p className={mistake ? "wordbox wordbox--mistake" : "wordbox"}>{lettersLeft}</p>
        <p className={active ? "wordbox wordbox--mistake" : "wordbox"}>{id}</p>
    </>

  );
};

export default Wordbox;
