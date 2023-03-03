import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { stackItems } from '../../../data/stackItems';
import Link from 'next/link';
import MainImage from '../../common/images/square/MainImage';
import MainButton from '../../common/buttons/MainButton';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  name: string;
  description: string;
  from: string;
  to: string;
  url: string;
  github: string;
  stack: string[];
  image?: string | StaticImageData;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.name}</div>
      <div>{`${props.from} - ${props.to}`}</div>
      {props.image ? (
        <Link href={props.url !== 'N/A' ? props.url : '/'} target="_blank">
          <Image
            className={styles.image}
            src={props.image}
            alt="Project Preview"
          />
        </Link>
      ) : null}
      <p className={styles.description}>{props.description}</p>
      <div className={styles.stack}>
        <p className={styles.stackHead}>Technologies Used</p>
        <div className={styles.stackContainer}>
          {props.stack.map((item, index) => {
            const source = stackItems.find(
              (stackItem) => item === stackItem.stackItem
            );
            if (source) {
              return (
                <Link
                  key={index}
                  className={styles.stackArea}
                  href={source.href}
                  target="_"
                >
                  <MainImage
                    src={source.image ?? ''}
                    alt="Stack Item Image"
                    size="x-small"
                  />
                  <p className={styles.item}>{item}</p>
                </Link>
              );
            }
            throw new Error(`Stack item: ${item} not found`);
          })}
        </div>
      </div>
      <div className={styles.links}>
        {props.github === 'N/A' ? null : (
          <MainButton
            text="Github Repo"
            isLink
            href={props.github}
            variant="Github"
          />
        )}
        {props.url === 'N/A' ? null : (
          <MainButton text="Visit Project" isLink href={props.url} />
        )}
      </div>
    </div>
  );
}
