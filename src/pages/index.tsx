import { type NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import HomePage from '../components/home/HomePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="View my projects here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage />
    </>
  );
};

export default Home;
