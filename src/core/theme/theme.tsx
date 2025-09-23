import { createTheme } from '@mui/material'
import { esES as coreEs } from '@mui/material/locale'
import { useMemo } from 'react'

//for custom theme configurations, refer to https://mui.com/material-ui/customization/theming/

export const useTheme = () => {
  const theme = useMemo(
    () =>
      createTheme(
        {
          palette: { mode: 'dark' },

          components: {
            MuiCssBaseline: {
              styleOverrides: {
                // custom global styles here
                'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                  appearance: 'none',
                  margin: 0,
                },

                'input[type=number]': {
                  appearance: 'textfield',
                },

                'input[type="password"]::-ms-reveal, input[type="password"]::-ms-clear': {
                  display: 'none',
                },

                'input::-ms-clear, input::ms-reveal': {
                  display: 'none',
                },
              },
            },
          },
        },
        coreEs,
      ),
    [],
  )

  return theme
}
