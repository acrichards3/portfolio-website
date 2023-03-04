import React from 'react';
import { Triangle } from 'react-loader-spinner';
import styles from './MainSpinner.module.scss';

export default function MainSpinner() {
  return (
    <div className={styles.container}>
      <Triangle color="#4a98e0" ariaLabel="loading" />
    </div>
  );
}
