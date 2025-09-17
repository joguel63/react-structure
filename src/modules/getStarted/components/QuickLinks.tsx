import React from 'react';
import { DocsUrls } from '../enums';
import { QuickLink } from '../types';
import styles from './QuickLinks.module.css';

const quickLinks: QuickLink[] = [
  {
    title: 'Vite',
    url: DocsUrls.VITE,
    description: 'Herramienta de construcción rápida para aplicaciones web modernas'
  },
  {
    title: 'React',
    url: DocsUrls.REACT,
    description: 'Biblioteca de JavaScript para construir interfaces de usuario'
  },
  {
    title: 'React Router',
    url: DocsUrls.REACT_ROUTER,
    description: 'Navegación declarativa para aplicaciones React'
  },
  {
    title: 'TypeScript',
    url: DocsUrls.TYPESCRIPT,
    description: 'JavaScript con tipos estáticos para un desarrollo más robusto'
  }
];

export const QuickLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      {quickLinks.map((link) => (
        <a 
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.linkTitle}>{link.title}</div>
          <div className={styles.linkDescription}>{link.description}</div>
        </a>
      ))}
    </div>
  );
};
