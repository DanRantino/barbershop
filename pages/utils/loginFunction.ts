import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'

const BASE_URL = 'http://localhost:5000'

export default async function loginFunction(
  url: string,
  method: string,
  dados?: unknown | string
) {
  const cookies = parseCookies()
  let ret: any
  if (method === 'POST') {
    ret = await axios
      .post(BASE_URL + url, dados, {
        headers: {
          authorization: `${cookies.authorization}`,
        },
      })
      .catch((err) => (ret = verifyError(err)))
  }
  if (method === 'GET') {
    ret = await axios
      .get(BASE_URL + url, {
        headers: {
          authorization: `${cookies.authorization}`,
        },
      })
      .catch((err) => (ret = verifyError(err)))
  }
  return ret
}

const verifyError = (e: AxiosError) => {
  console.log('verify', e.response)
  return e.response?.status
}