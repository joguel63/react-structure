import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import React from 'react'
import reactLogo from '../../../../assets/react.svg'
import { QuickLinks, Steps } from '../../components'
import { styles } from './styles'
import muiLogo from '/mui.svg'
import viteLogo from '/vite.svg'

const GetStartedPage: React.FC = () => {
  const version = '1.0.0'
  const environment = 'development'

  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={styles.headerContainer}>
          <Box sx={styles.logosContainer}>
            <Avatar src={viteLogo} alt="Vite" sx={styles.logo} />
            +
            <Avatar src={reactLogo} alt="React" sx={styles.logo} />
            +
            <Avatar src={muiLogo} alt="Material-UI" sx={styles.logo} />
          </Box>
          <Typography variant="h2" component="h1" sx={styles.title}>
            Welcome to React!
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={styles.subtitle}>
            A modern template with Vite, React, TypeScript, React Router and Material-UI
          </Typography>
        </Box>

        {/* Environment Information */}
        <Paper elevation={2} sx={styles.sectionPaper}>
          <Typography variant="h5" component="h2" sx={styles.sectionTitle}>
            Environment Information
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card variant="outlined" sx={styles.envCard}>
                <CardContent>
                  <Typography variant="overline" color="text.secondary" sx={styles.envLabel}>
                    Mode
                  </Typography>
                  <Chip label={environment} color="success" variant="filled" sx={styles.envChip} />
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card variant="outlined" sx={styles.envCard}>
                <CardContent>
                  <Typography variant="overline" color="text.secondary" sx={styles.envLabel}>
                    Version
                  </Typography>
                  <Chip label={version} color="info" variant="filled" sx={styles.envChip} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Getting Started Section */}
        <Paper elevation={2} sx={styles.sectionPaper}>
          <Typography variant="h5" component="h2" sx={styles.sectionTitle}>
            Getting Started
          </Typography>
          <Steps />
        </Paper>

        {/* Useful Links Section */}
        <Paper elevation={2} sx={{ ...styles.sectionPaper, mb: 0 }}>
          <Typography variant="h5" component="h2" sx={styles.sectionTitle}>
            Useful Links
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Essential documentation for development with this technology stack, including
            Material-UI for building beautiful React applications
          </Typography>
          <QuickLinks />
        </Paper>
      </Container>
    </Box>
  )
}

export default GetStartedPage
