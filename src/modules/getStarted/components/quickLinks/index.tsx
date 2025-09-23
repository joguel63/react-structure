import React from 'react'
import { Card, CardContent, Typography, Grid, Link } from '@mui/material'
import { DocsUrls } from 'modules/getStarted/enums'
import { QuickLink } from 'modules/getStarted/types'
import { styles } from './styles'

const quickLinks: QuickLink[] = [
  {
    title: 'Vite',
    url: DocsUrls.VITE,
    description: 'Fast build tool for modern web applications',
  },
  {
    title: 'React',
    url: DocsUrls.REACT,
    description: 'JavaScript library for building user interfaces',
  },
  {
    title: 'React Router',
    url: DocsUrls.REACT_ROUTER,
    description: 'Declarative navigation for React applications',
  },
  {
    title: 'TypeScript',
    url: DocsUrls.TYPESCRIPT,
    description: 'JavaScript with static types for more robust development',
  },
  {
    title: 'Material-UI',
    url: DocsUrls.MUI,
    description: 'React UI framework with pre-built components and themes',
  },
  {
    title: 'MUI Components',
    url: DocsUrls.MUI_COMPONENTS,
    description: 'Comprehensive component library for fast UI development',
  },
  {
    title: 'MUI Theming',
    url: DocsUrls.MUI_THEMING,
    description: 'Customize colors, typography, and component styles',
  },
]

export const QuickLinks: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {quickLinks.map((link) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={link.title}>
          <Card
            component={Link}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.linkCard}
          >
            <CardContent sx={styles.cardContent}>
              <Typography
                variant="h6"
                component="h3"
                sx={styles.linkTitle}
              >
                {link.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={styles.linkDescription}
              >
                {link.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
