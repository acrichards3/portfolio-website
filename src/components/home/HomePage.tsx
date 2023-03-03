import React from 'react';
import PageContainer from '../common/positioning/PageContainer';
import MainCircleImage from '../common/images/circle/MainCircleImage';
import Footer from '../footer/Footer';
import pfp from '../../images/me.jpg';
import styles from './HomePage.module.scss';
import TextArea from './textArea/TextArea';
import Experience from './experiences/Experience';
import Senzit from '../../images/SenzitLogo.png';
import Nucamp from '../../images/Honors_Certificate.jpeg';

import { api } from '../../utils/api';

export default function HomePage() {
  const exp = api.experience.getExperience.useQuery().data;
  const imgArr = [Senzit, Nucamp];

  return (
    <PageContainer>
      <div className={styles.head}>
        <MainCircleImage src={pfp} alt="Profile" size="large" />
      </div>
      <TextArea title={`Alex Richards`} head>
        <p className={styles.text}>
          I am a software engineer, who thrives on continuously learning new
          things to enhance my skills and create innovative solutions. With a
          strong foundation in software development, I am committed to
          delivering high-quality, user-centered solutions that exceed
          expectations and drive business growth.
        </p>
      </TextArea>
      <hr className={styles.line} />
      <TextArea title={`Experience`}>
        <div className={styles.experiences}>
          {exp?.map((item, index) => {
            return (
              <Experience
                key={item.id}
                orientation={index % 2 === 0 ? 'left' : 'right'}
                item={item}
                index={index}
                imgSrc={imgArr[index]}
              />
            );
          })}
        </div>
      </TextArea>
      <Footer />
    </PageContainer>
  );
}
