import React from 'react';
import ProjectCard from './card/ProjectCard';
import MainSpinner from '../common/spinners/MainSpinner';
import Chess from '../../images/projectPhotos/chessProject.png';
import Medium from '../../images/projectPhotos/medium.png';
import SharpenMyAxe from '../../images/projectPhotos/sharpenMyAxe.png';
import Portfolio from '../../images/projectPhotos/portfolio.png';
import NumberGuesser from '../../images/projectPhotos/numberGuesser.png';
import styles from './Projects.module.scss';

import { api } from '../../utils/api';

export default function Projects() {
  const projects = api.project.getProjects.useQuery().data;

  return projects ? (
    <div className={styles.projects}>
      {projects.map((project, index) => {
        const stackArray: string[] = project.stackItems.split(', ');
        const images = [NumberGuesser, Portfolio, Chess, SharpenMyAxe, Medium]; // yeeee this is hacky but I really dont care enough to fix it
        return (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            from={project.from}
            to={project.to}
            url={project.url}
            github={project.github}
            stack={stackArray}
            image={images[index]}
          />
        );
      })}
    </div>
  ) : (
    <div className={styles.spinnerDiv}>
      <MainSpinner />
    </div>
  );
}
