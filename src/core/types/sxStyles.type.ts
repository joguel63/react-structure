import { SxProps, Theme } from '@mui/material'

export type SxStyles<T extends string = string> = Record<T, SxProps<Theme>>
