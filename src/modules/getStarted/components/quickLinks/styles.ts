import { SxStyles } from "core/types";

export const styles: SxStyles<"linkCard" | "linkTitle" | "linkDescription" | "cardContent"> = {
  linkCard: {
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: (theme) => theme.shadows[8],
      '& .MuiTypography-h6': {
        color: 'primary.main',
      },
    },
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  linkTitle: {
    fontWeight: 600,
    mb: 1,
    color: 'text.primary',
    transition: 'color 0.3s ease',
  },
  linkDescription: {
    lineHeight: 1.4,
    flexGrow: 1,
  },
}