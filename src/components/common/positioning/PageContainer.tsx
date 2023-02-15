import React from 'react';
import classNames from 'classnames';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PageContainer(props: PageContainerProps) {
  const pageContainerClasses = classNames(styles.container, props.className);

  return <div className={pageContainerClasses}>{props.children}</div>;
}
