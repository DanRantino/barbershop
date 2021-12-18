import axios, { AxiosError } from 'axios'

export const BASE_URL = 'http://localhost:5000'

export default async function loginFunction(
  url: string,
  method: string,
  dados?: unknown | string,
  authorization?: string
) {
  let ret: any
  if (method === 'POST') {
    ret = await axios
      .post(BASE_URL + url, dados, {
        headers: {
          authorization: `${authorization}`,
        },
      })
      .catch((err) => (ret = verifyError(err)))
  }
  if (method === 'GET') {
    ret = await axios
      .get(BASE_URL + url, {
        headers: {
          authorization: `${authorization}`,
        },
      })
      .catch((err) => (ret = verifyError(err)))
  }
  return ret
}

const verifyError = (e: AxiosError) => {
  console.log('verify', e)
  return e
}
