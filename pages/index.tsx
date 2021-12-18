import type { NextPage } from 'next'
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { WrapperMain } from './components/main/styles'
import { RiLoaderLine } from 'react-icons/ri'
import styled from 'styled-components'
import loginFunction from './utils/loginFunction'

const StyledSpinner = styled(RiLoaderLine)`
  animation: spin 10s linear infinite;
  color: blue;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      color: red;
    }
    50% {
      color: blue;
    }
    100% {
      transform: rotate(360deg);
      color: red;
    }
  }
`

const Home: NextPage<any> = ({ cookies }) => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    !cookies && router.push('/login')
    const c = nookies.get()
    console.log(c)
  }, [])
  if (isLoading) {
    return (
      <WrapperMain>
        <StyledSpinner size={'15em'} />
      </WrapperMain>
    )
  }
  return <WrapperMain>{}</WrapperMain>
}

export default Home

Home.getInitialProps = async (ctx) => {
  const { authorization } = nookies.get(ctx)
  console.log('server atuh', authorization)
  const {
    data: { newToken },
  } = await loginFunction('/refresh-login', 'POST', {}, authorization)
  nookies.set(ctx, 'authorization', newToken)
  return { cookies: newToken }
}
