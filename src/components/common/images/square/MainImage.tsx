import React from 'react';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import styles from './MainImage.module.scss';

interface MainImageProps {
  src: string | StaticImageData | undefined;
  alt: string;
  size: 'small' | 'medium' | 'large';
}

export default function MainImage(props: MainImageProps) {
  const classes = classNames(styles.mainImage, {
    [styles.small as string]: props.size === 'small',
    [styles.medium as string]: props.size === 'medium',
    [styles.large as string]: props.size === 'large',
  });

  return <Image src={props.src ?? ''} alt={props.alt} className={classes} />;
}
