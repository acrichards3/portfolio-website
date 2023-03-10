import React from 'react';
import styles from './AboutHeader.module.scss';

interface AboutHeaderProps {
  title: string;
}

export default function AboutHeader(props: AboutHeaderProps) {
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
}
