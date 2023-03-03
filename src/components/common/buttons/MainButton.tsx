import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './MainButton.module.scss';

type Variant = 'Github';

interface MainButtonProps {
  text: string;
  onClick?: () => void;
  isLink?: boolean;
  href?: string;
  variant?: Variant;
  type?: 'button' | 'submit' | 'reset';
}

export default function MainButton(props: MainButtonProps) {
  return props.isLink ? (
    <Link
      className={classNames(styles.button, {
        [styles.github as string]: props.variant === 'Github',
      })}
      href={props.href ?? '/'}
    >
      {props.text}
    </Link>
  ) : (
    <button
      type={props.type}
      className={classNames(styles.button, {
        [styles.github as string]: props.variant === 'Github',
      })}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
