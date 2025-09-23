import { SxStyles } from 'core/types'

export const styles: SxStyles<
  | 'container'
  | 'themeToggle'
  | 'headerContainer'
  | 'logosContainer'
  | 'logo'
  | 'title'
  | 'subtitle'
  | 'sectionPaper'
  | 'sectionTitle'
  | 'envCard'
  | 'envLabel'
  | 'envChip'
> = {
  container: {
    minHeight: '100vh',
    bgcolor: 'background.default',
    position: 'relative',
  },
  themeToggle: {
    position: 'fixed',
    top: 32,
    right: 32,
    zIndex: 1000,
  },
  headerContainer: {
    textAlign: 'center',
    mb: 6,
  },
  logosContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    mb: 3,
    flexWrap: 'wrap',
  },
  logo: {
    width: 90,
    height: 80,
    borderRadius: 0,
  },
  title: {
    fontWeight: 700,
    mb: 2,
    background: (theme) =>
      `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || theme.palette.primary.dark})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'text.primary', // Fallback color
  },
  subtitle: {
    mb: 3,
    maxWidth: 600,
    mx: 'auto',
  },
  sectionPaper: {
    p: 3,
    mb: 4,
    borderRadius: 2,
  },
  sectionTitle: {
    mb: 3,
    fontWeight: 600,
  },
  envCard: {
    height: '100%',
  },
  envLabel: {
    display: 'block',
    mb: 1,
  },
  envChip: {
    fontFamily: 'monospace',
    fontWeight: 600,
  },
}
