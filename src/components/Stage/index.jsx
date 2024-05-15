import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size) => {
  const sizeIndex = size === undefined
    ? Math.floor(Math.random() * wordList.length)
    : size - 3;
  
  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }
  
  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const userSize = 3;

const selectionInit = (size) => {
  const selection = []
  for (var i=0;i<3;i++) {
    selection.push(generateWord(size))
  }
  return selection;
}

const Stage = () => {
  const [words, setWords] = useState(selectionInit(userSize));

  const handleFinish = () => {
    // console.log('finish')
    const a = [...words]
    a.splice(0,1)
    
    // console.log(typeof a)
    // console.log(typeof words)
    a.push(generateWord(3))
    setWords([...a])
    
    
  }
  console.log(words[0])
  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: 0</div>
      <div className="stage__words">
        {words.map((word, i) => <Wordbox word={word} key={word} onFinish={handleFinish} active={i === 0} id={i}/>)}
      </div>
    </div>
  );
};

export default Stage;
