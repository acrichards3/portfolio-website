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
      <p className={styles.text}>{"Let's Connect"}</p>
      <div className={styles.iconArea}>
        <Link href="https://github.com/acrichards3" target="_blank">
          <div className={classNames(styles.iconContainer, styles.github)}>
            <GitHub className={styles.icon} />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/acrichards3/" target="_blank">
          <div className={classNames(styles.iconContainer, styles.linkedin)}>
            <Linkedin className={styles.icon} />
          </div>
        </Link>
        <Link href="mailto:alexchristopherrichards@gmail.com">
          <div className={classNames(styles.iconContainer, styles.email)}>
            <Mail className={styles.icon} />
          </div>
        </Link>
      </div>
    </div>
  );
}
