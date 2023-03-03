import React from 'react';
import styles from './ProjectHeader.module.scss';

interface ProjectHeaderProps {
  title: string;
}

export default function ProjectHeader(props: ProjectHeaderProps) {
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
}
