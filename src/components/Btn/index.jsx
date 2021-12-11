import React from 'react';

import styles from './index.module.scss';

const Btn = (props) => {
  // props
  const { onClick, value } = props;

  // handlers
  const getStyle = () => {
    if (value === '=') {
      return styles.wrapper__equals;
    }

    if (value === 'C') {
      return styles.wrapper__clear;
    }

    if (['()', '%', '\u00F7', '+', 'X', '-'].includes(value)) {
      return styles.wrapper__special;
    }

    return '';
  }

  // render
  return (
    <button
      className={`${styles.wrapper} ${getStyle()}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default Btn;
