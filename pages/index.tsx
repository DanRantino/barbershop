import type { NextPage } from 'next'
import { parseCookies } from 'nookies'
import { useCallback, useEffect } from 'react'
import loginFunction from './utils/loginFunction'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const cookies = parseCookies()

  const router = useRouter()
  const onUnauth = () => {
    router.push('/login')
  }
  const refreshToken = useCallback(async () => {
    const ret = await loginFunction('/refresh-login', 'POST')
    if (ret === 401) {
    }
  }, [cookies.authorization])

  useEffect(() => {
    refreshToken().then()
    return () => {}
  }, [cookies.authorization, refreshToken])
  return (
    <>
      <div>''</div>
    </>
  )
}

export default Home
