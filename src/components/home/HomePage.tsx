import React from 'react';
import PageContainer from '../common/positioning/PageContainer';
import MainCircleImage from '../common/images/circle/MainCircleImage';
import Footer from '../footer/Footer';
import pfp from '../../images/me.jpg';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <PageContainer>
      <MainCircleImage src={pfp} alt="Profile" size="large" />
      <div className={styles.textArea}>
        <h1 className={styles.title}>{"Hello, I'm Alex!"}</h1>
        <p className={styles.text}>
          I am a software engineer, who thrives on continuously learning new
          things to enhance my skills and create innovative solutions. With a
          strong foundation in software development, I am committed to
          delivering high-quality, user-centered solutions that exceed
          expectations and drive business growth.
        </p>
      </div>
      <hr className={styles.line} />
      <Footer />
    </PageContainer>
  );
}
