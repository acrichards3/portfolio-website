import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  children: string;
}

export default function Section(props: SectionProps) {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.section}>
        <h2 className={styles.title}>{props.title}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
}
