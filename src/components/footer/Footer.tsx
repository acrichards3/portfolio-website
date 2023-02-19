import React from 'react';
import Link from 'next/link';
import {
  FaGithub as GitHub,
  FaLinkedinIn as Linkedin,
  FaEnvelope as Mail,
} from 'react-icons/fa';
import classNames from 'classnames';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>Let's Connect</p>
      <div className={styles.iconArea}>
        <div className={classNames(styles.iconContainer, styles.github)}>
          <Link href="https://github.com/acrichards3" target="_blank">
            <GitHub className={styles.icon} />
          </Link>
        </div>
        <div className={classNames(styles.iconContainer, styles.linkedin)}>
          <Link href="https://www.linkedin.com/in/acrichards3/" target="_blank">
            <Linkedin className={styles.icon} />
          </Link>
        </div>
        <div className={classNames(styles.iconContainer, styles.email)}>
          <Link href="mailto:alexchristopherrichards@gmail.com">
            <Mail className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
}
