import React from 'react';
import classNames from 'classnames';
import { GitHub, Linkedin, Mail } from 'react-feather';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://github.com/acrichards3" target="_blank">
        <GitHub className={classNames(styles.icon, styles.github)} size={40} />
      </Link>
      <Link href="https://www.linkedin.com/in/acrichards3/" target="_blank">
        <Linkedin
          className={classNames(styles.icon, styles.linkedin)}
          size={40}
        />
      </Link>
      <Link href="mailto:alexchristopherrichards@gmail.com">
        <Mail className={classNames(styles.icon, styles.email)} size={40} />
      </Link>
    </div>
  );
}
