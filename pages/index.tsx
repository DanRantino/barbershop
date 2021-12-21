import type { NextPage } from 'next'
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { WrapperMain } from './components/main/styles'
import loginFunction from './utils/loginFunction'
import { StyledSpinner, WrapperSpinner } from './components/spinner'
import { Profile } from './components/profile'

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
  return <WrapperMain><Profile /></WrapperMain>
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
