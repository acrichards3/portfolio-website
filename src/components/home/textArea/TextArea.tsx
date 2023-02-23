import React from 'react';
import styles from './TextArea.module.scss';

interface TextAreaProps {
  title: string;
  head?: boolean;
  children: React.ReactNode;
}

export default function TextArea(props: TextAreaProps) {
  const header = <h1 className={styles.title}>{props.title}</h1>;
  const subHeader = <p className={styles.title}>{props.title}</p>;

  return (
    <div className={styles.textArea}>
      {props.head ? header : subHeader}
      {props.children}
    </div>
  );
}
