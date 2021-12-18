import type { AppProps } from 'next/app'
import { StrictMode, useState } from 'react'
import { GlobalModal } from './components/modal/GlobalModal'
import GlobalStyle from './globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState(true)

  return (
    <StrictMode>
      <GlobalModal>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
        <Component {...pageProps} />
      </GlobalModal>
    </StrictMode>
  )
}

export default MyApp
