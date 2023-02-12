import styles from './index.module.css';
import { type NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="View my projects here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
