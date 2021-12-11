import React from 'react';

import styles from './index.module.scss';

const Display = (props) => {
  // props
  const { value, subValue } = props;

  // render
  return (
    <div className={styles.display}>
      <div className={styles.subValue}>{subValue}</div>
      <div className={styles.value}>{value || 0}</div>
    </div>
  );
}

export default Display;
