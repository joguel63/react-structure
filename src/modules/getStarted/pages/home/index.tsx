import React from 'react'
import { QuickLinks, Steps } from '../../components'
import { useColorScheme } from '../../hooks'
import styles from './GetStartedPage.module.css'

const GetStartedPage: React.FC = () => {
  const { theme, toggleTheme } = useColorScheme()
  const version = '1.0.0'
  const environment = 'development'

  return (
    <div className={styles.container}>
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <header className={styles.header}>
        <h1 className={styles.title}>¡Bienvenido a React!</h1>
        <p className={styles.subtitle}>
          Una plantilla sencilla con Vite, React, TypeScript y React Router
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Información del Entorno</h2>
        <div className={styles.envInfo}>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Modo</div>
            <div className={styles.envValue}>{environment}</div>
          </div>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Versión</div>
            <div className={styles.envValue}>{version}</div>
          </div>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Tema</div>
            <div className={styles.envValue}>{theme}</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Primeros Pasos</h2>
        <Steps />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Enlaces Útiles</h2>
        <p style={{ color: 'var(--fg-secondary)', marginBottom: '1.5rem' }}>
          Documentación esencial para el desarrollo con esta stack tecnológica
        </p>
        <QuickLinks />
      </section>
    </div>
  )
}

export default GetStartedPage
