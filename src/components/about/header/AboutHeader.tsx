import React from 'react';
import styles from './AboutHeader.module.scss';

interface AboutHeaderProps {
  title: string;
}

export default function AboutHeader(props: AboutHeaderProps) {
  return <h1 className={styles.title}>{props.title}</h1>;
}
