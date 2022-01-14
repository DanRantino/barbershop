import type { NextPage } from 'next'
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { WrapperMain } from './components/main/styles'
import { StyledSpinner, WrapperSpinner } from './components/spinner/styles'
import { Profile } from './components/profile'
import { ServerLogin } from './utils/server'
import { User } from './types/user'

const Home: NextPage<any> = ({ cookies, initialUser }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(initialUser)
  const router = useRouter()


  useEffect(() => {
    if (!cookies) {
      router.push('/login')
    }
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
      <Profile firstName={user?.firstName} lastName={user?.lastName} />
    </WrapperMain>
  )
}


Home.getInitialProps = async (ctx) => {
  const { authorization } = nookies.get(ctx)
  await ServerLogin.loginFunction('/user/refresh-token', {}, authorization, 'get')
  const newToken = ServerLogin.getRet().authorization
  const initialUser = ServerLogin.getRet()?.data?.user
  nookies.set(ctx, 'authorization', newToken)
  return { cookies: newToken, initialUser }
}

export default Home
