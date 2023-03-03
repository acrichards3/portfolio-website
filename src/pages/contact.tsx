import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProjectHeader from '../components/projects/header/ProjectHeader';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import PageContainer from '../components/common/positioning/PageContainer';

export default function contact() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <ProjectHeader title="Contact" />
        <Contact />
        <Footer />
      </PageContainer>
    </>
  );
}
