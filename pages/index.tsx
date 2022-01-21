import type { NextPage } from 'next'
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { StyledSpinner, WrapperSpinner } from './components/spinner/styles'
import { ServerLogin } from './utils/server'
import { User } from './types/user'
import { ContentWrapper, Wrapper } from './components/styles'
import { Profile } from './components/profile'
import Promo from './components/promo'

const Home: NextPage<any> = ({ cookies, initialUser }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(initialUser)
  const router = useRouter()

  const pushLogin = async () => await router.push('/login')

  useEffect(() => {
    setIsLoading(true)
    if (!cookies) {
      pushLogin().then()
    }
    setIsLoading(false)
  }, [])
  if (isLoading) {
    return (
      <WrapperSpinner>
        <StyledSpinner size={'15em'} />
      </WrapperSpinner>
    )
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <Profile user={user} />
        <Promo />
      </ContentWrapper>
    </Wrapper>
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
