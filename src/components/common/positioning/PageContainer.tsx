import React from 'react';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children?: React.ReactNode;
}

export default function PageContainer(props: PageContainerProps) {
  return <div className={styles.container}>{props.children}</div>;
}
