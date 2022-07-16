import '../styles/globals.css'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { GlobalStyle } from '~/features/ui/theme/global'
import { muiTheme } from '~/features/ui/theme/miuTheme'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <MUIThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
        </MUIThemeProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
