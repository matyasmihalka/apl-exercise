import { createTheme } from '@mui/material/styles'

import { colors } from './colors'

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.accent.primary,
    },
    secondary: {
      main: colors.accent.secondary,
    },

    // secondary: {
    //   // This is green.A700 as hex.
    //   main: '#11cb5f',
    // },
  },
  typography: {
    htmlFontSize: 10,
  },
})
