import { StaticImageData } from 'next/image';
import classNames from 'classnames';
import MainImage from '../../common/images/square/MainImage';
import React from 'react';
import styles from './Experience.module.scss';

interface ExperienceProps {
  index: number;
  imgSrc: StaticImageData | undefined;
  orientation: 'left' | 'right';
  item: {
    title: string;
    id: string;
    description: string;
    company: string;
    location: string;
    to: string;
    from: string;
  };
}

export default function Experience(props: ExperienceProps) {
  const imgClasses = classNames(styles.imgArea, {
    [styles.right as string]: props.orientation === 'right',
  });

  return (
    <div key={props.item.id} className={styles.experience}>
      <p className={styles.title}>{props.item.title}</p>
      <div className={imgClasses}>
        <MainImage src={props.imgSrc} alt={'Experience Image'} size={'small'} />
        <div className={styles.titleTime}>
          <p className={styles.subTitle}>{props.item.company}</p>
          <p
            className={styles.subTitle}
          >{`${props.item.from} - ${props.item.to}`}</p>
        </div>
      </div>
      <p>{props.item.description}</p>
    </div>
  );
}
