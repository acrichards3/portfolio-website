import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Section from '../components/about/section/Section';
import AboutHeader from '../components/about/header/AboutHeader';
import PageContainer from '../components/common/positioning/PageContainer';

export default function about() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <AboutHeader title={'About Me'} />
        <Section title={'The Past'}>
          Hi, my name is Alex Richards, and I have always been passionate about
          technology. After graduating high school in Charlotte, NC, I knew I
          wanted to pursue a career in this field. It was during my studies that
          I discovered my love for web development. This inspired me to start
          writing about web development on Medium.com, where I briefly became a
          top writer in the technology space. I'm proud to have shared my
          knowledge and insights with the industry, and my posts have garnered
          over a quarter million reads. My passion for web development led me to
          enroll in Nucamp's Full Stack Web & Mobile Development boot camp,
          where I graduated with honors. During this intensive program, I gained
          hands-on experience with various technologies like HTML, CSS,
          JavaScript, React, and Node.js. Through the boot camp, I learned the
          best coding practices and valuable communication skills that are
          necessary to work with others. My past experiences have inspired me to
          continue pursuing my passion for technology and to use my skills to
          make a positive impact on the world.
        </Section>
        <Section title={'The Present'}>
          Currently, I am working as a Software Engineer Intern at i2M LLC,
          where I collaborate with developers, designers, and product managers
          to create software that helps fleet managers monitor vehicle health
          across an entire fleet of vehicles. I work specifically in i2M's
          Senzit venture, where I have taken on the role of leading front-end
          development. Using a wide range of technologies, including React,
          Typescript, Next.js, Redux, Sass, tRPC, NextAuth, Prisma, and Zustand,
          I ensure that the products I build are not only functional but also
          performant, maintainable, and user-friendly. In my spare time, I am
          always looking to improve my skills and enhance my knowledge of
          software engineering. I spend my spare time working on personal
          projects, watching YouTube videos, and studying other developers'
          code. I believe that this habit of continuous learning helps me stay
          up to date with the latest technologies and trends in the software
          engineering industry. I am committed to growing as a software engineer
          and making a positive impact on the world through my work.
        </Section>
        <Section title={'The Future'}>
          As a software engineer, I am always looking for new challenges and
          ways to improve my skills. One of my goals is to learn Python and
          explore the fascinating world of machine learning and neural networks.
          I am convinced that these technologies can revolutionize the way we
          interact with the world, and I want to be part of that revolution. I
          also plan to become an expert in full-stack web development by
          expanding my knowledge of the technologies I currently use and
          learning new ones. In the future, I hope to work on projects that can
          make a significant impact on society, such as full vehicle autonomy,
          sustainability, and AGI. Ultimately, my goal is to become a respected
          and accomplished software engineer who has made a difference in the
          world.
        </Section>
        <Footer />
      </PageContainer>
    </>
  );
}
