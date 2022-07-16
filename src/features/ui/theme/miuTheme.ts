import { createTheme } from '@mui/material/styles'

import { colors } from './colors'

export const muiTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: colors.accent.primary,
    },
    // secondary: {
    //   // This is green.A700 as hex.
    //   main: '#11cb5f',
    // },
  },
})
