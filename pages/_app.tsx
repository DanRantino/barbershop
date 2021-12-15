import type { AppProps } from 'next/app'
import { useState } from 'react'
import { GlobalModal } from './components/modal/GlobalModal'

function MyApp({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState(true)

  const toggleModal = () => setShowModal(() => !showModal)

  return (
    <GlobalModal>
      <Component {...pageProps} />
    </GlobalModal>
  )
}

export default MyApp
