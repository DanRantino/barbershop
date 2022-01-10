import type { NextPage } from 'next'
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { WrapperMain } from './components/main/styles'
import { StyledSpinner, WrapperSpinner } from './components/spinner/styles'
import { Profile } from './components/profile'
import ServerLogin from './utils/server'

const Home: NextPage<any> = ({ cookies }) => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    !cookies && router.push('/login')
    const c = nookies.get()
  }, [])
  if (isLoading) {
    return (
      <WrapperSpinner>
        <StyledSpinner size={'15em'} />
      </WrapperSpinner>
    )
  }
  return (
    <WrapperMain>
      <Profile />
    </WrapperMain>
  )
}

export default Home

Home.getInitialProps = async (ctx) => {
  const { authorization } = nookies.get(ctx)
  console.log('server atuh', authorization)
  ServerLogin.loginFunction('/refresh-login', 'POST', {}, authorization)
  const {
    data: { newToken },
  } = ServerLogin.getRet()
  nookies.set(ctx, 'authorization', newToken)
  return { cookies: newToken }
}
