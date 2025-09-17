import React from 'react';
import { Step } from '../types';
import styles from './Steps.module.css';

const steps: Step[] = [
  {
    command: 'yarn dev',
    description: 'Inicia el servidor de desarrollo con hot-reload para desarrollar tu aplicación'
  },
  {
    command: 'yarn build',
    description: 'Construye la aplicación para producción con optimizaciones y minificación'
  },
  {
    command: 'yarn preview',
    description: 'Previsualiza la build de producción localmente antes de desplegar'
  }
];

export const Steps: React.FC = () => {
  return (
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <li key={step.command} className={styles.step}>
          <div className={styles.stepNumber}>{index + 1}</div>
          <div className={styles.stepContent}>
            <div className={styles.stepCommand}>{step.command}</div>
            <div className={styles.stepDescription}>{step.description}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};
