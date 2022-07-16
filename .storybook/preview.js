import { GlobalStyle } from '../src/features/ui/theme/global'
import * as NextImage from 'next/image'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { muiTheme } from '~/features/ui/theme/miuTheme'

import doggo from '~/features/articles/fixtures/assets/doggo.webp'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized blurDataURL={doggo} />
  ),
})

const withStyles = (Story, context) => (
  <>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </head>
    <GlobalStyle />
    <MUIThemeProvider theme={muiTheme}>
      <Story {...context} />
    </MUIThemeProvider>
  </>
)

export const decorators = [withStyles]
