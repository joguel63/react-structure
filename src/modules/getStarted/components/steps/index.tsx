import React from 'react'
import { Box, Card, CardContent, Typography, Avatar, Chip } from '@mui/material'
import { Step } from 'modules/getStarted/types'
import { styles } from './styles'

const steps: Step[] = [
  {
    command: 'yarn dev',
    description: 'Start the development server with hot-reload to develop your application',
  },
  {
    command: 'yarn build',
    description: 'Build the application for production with optimizations and minification',
  },
  {
    command: 'yarn preview',
    description: 'Preview the production build locally before deployment',
  },
]

export const Steps: React.FC = () => {
  return (
    <Box sx={styles.container}>
      {steps.map((step, index) => (
        <Card key={step.command} sx={styles.stepCard}>
          <CardContent>
            <Box sx={styles.stepContent}>
              <Avatar sx={styles.stepAvatar}>
                {index + 1}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Chip
                  label={step.command}
                  sx={styles.stepChip}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={styles.stepDescription}
                >
                  {step.description}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
