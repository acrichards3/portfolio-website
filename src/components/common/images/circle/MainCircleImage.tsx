import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './MainCircleImage.module.scss';

import type { StaticImageData } from 'next/image';

type Size = 'small' | 'medium' | 'large';

interface MainCircleImageProps {
  src: string | StaticImageData;
  alt: string;
  size: Size;
  className?: string;
}

export default function MainCircleImage(props: MainCircleImageProps) {
  const circleImageClasses = classNames(styles.image, props.className, {
    [styles.small as string]: props.size === 'small',
    [styles.medium as string]: props.size === 'medium',
    [styles.large as string]: props.size === 'large',
  });

  return (
    <Image src={props.src} alt={props.alt} className={circleImageClasses} />
  );
}
