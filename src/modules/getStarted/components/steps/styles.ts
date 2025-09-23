import { SxStyles } from "core/types";

export const styles: SxStyles<"container" | "stepCard" | "stepContent" | "stepAvatar" | "stepChip" | "stepDescription"> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  stepCard: {
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: (theme) => theme.shadows[4],
    },
  },
  stepContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 2,
  },
  stepAvatar: {
    bgcolor: 'primary.main',
    width: 32,
    height: 32,
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },
  stepChip: {
    fontFamily: '"Courier New", monospace',
    fontWeight: 600,
    mb: 1,
    bgcolor: 'background.paper',
    color: 'primary.main',
    border: 1,
    borderColor: 'divider',
  },
  stepDescription: {
    lineHeight: 1.4,
    mt: 1,
  },
}