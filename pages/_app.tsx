import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import { GlobalModal } from './components/modal/GlobalModal'
import GlobalStyle from './globalStyles'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StrictMode>
      <GlobalModal>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap' rel='stylesheet' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Lobster&display=swap' rel='stylesheet' />
        <GlobalStyle />
        <Component {...pageProps} />
      </GlobalModal>
    </StrictMode>
  )
}

export default MyApp
