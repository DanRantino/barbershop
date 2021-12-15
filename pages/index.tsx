import type { NextPage } from 'next'
import { parseCookies } from 'nookies'
import { useCallback, useEffect, useState } from 'react'
import loginFunction from './utils/loginFunction'
import { useRouter } from 'next/router'
import isError from 'next/dist/lib/is-error'

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const cookies = parseCookies()

  const router = useRouter()

  const refreshToken = useCallback(async () => {
    setIsLoading(true)
    const ret = await loginFunction('/refresh-login', 'POST')
    if (isError(ret)) {
      setIsLoading(false)
      await router.push('/login')
    }
  }, [cookies.authorization])

  useEffect(() => {
    refreshToken().then()
    return () => {
    }
  }, [cookies.authorization, refreshToken])
  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <>
      <div>''</div>
    </>
  )
}

export default Home
