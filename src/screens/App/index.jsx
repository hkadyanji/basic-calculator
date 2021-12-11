import React, { useState } from 'react';

import Display from '../../components/Display';
import Btn from '../../components/Btn';

import styles from './index.module.scss'

const NUM_PADS = ['C', '()', '%', '\u00F7', 1, 2, 3, 'X', 4, 5, 6, '+', 7, 8, 9, '-', '.', '0', '000', '='];

const App = () => {
  // state
  const [currExpression, setCurrExpression] = useState('');
  const [result, setResult] = useState('');

  // handlers
  const handleBrackets = () => {
    let leftBracket = 0;
    let rightBracket = 0;
    [...currExpression].forEach((num) => {
      if (num === '(') {
        leftBracket += 1;
        return;
      }
      if (num === ')') {
        rightBracket += 1;
        return;
      }
    });

    return leftBracket === rightBracket ? '(' : ')';
  }

  const handleClick = (value) => {
    switch (value) {
      case '=':
        const expr = currExpression
          .replaceAll('\u00F7', '/')
          .replaceAll('X', '*');

        setResult(currExpression);
        setCurrExpression(`${eval(expr)}`);
        break;
      case '()':
        const val = handleBrackets();
        setCurrExpression((prevState) => prevState += val);
        break;
      case 'C':
        setCurrExpression('');
        setResult('');
        break;
      default:
        setCurrExpression((prevState) => prevState += value);
        break;
    }
  }

  // render
  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <p className={styles.heading}>Calculator</p>
        <Display
          value={currExpression}
          subValue={result}
        />
        <div className={styles.wrapper}>
          {
            NUM_PADS.map((num) => (
              <Btn
                key={`pad-${num}`}
                onClick={handleClick}
                value={num}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default App;