import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { navData } from './navData';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {navData.map((item) => {
        return (
          <Link
            key={item.id}
            className={classNames(styles.link, {
              [styles.active as string]: router.pathname === item.url,
            })}
            href={item.url}
          >
            {item.text.charAt(0).toUpperCase() +
              item.text.slice(1).toLowerCase()}
          </Link>
        );
      })}
    </div>
  );
}
