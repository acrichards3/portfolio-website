import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ProjectHeader from '../components/projects/header/ProjectHeader';
import Projects from '../components/projects/Projects';
import PageContainer from '../components/common/positioning/PageContainer';

export default function projects() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <ProjectHeader title="Projects" />
        <Projects />
        <Footer />
      </PageContainer>
    </>
  );
}
