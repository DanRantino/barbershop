import axios from 'axios'

var Login = {
  async loginFunction(url: string, data: unknown, authorization: string, method = 'post') {
    try {
      url = method == 'get' ? `${url}/${authorization}` : url
      this.ret = await axios[`${method}`](this.URL + url, data, method == 'post' && {
        headers: {
          authorization: `${authorization}`,
        },
      })
      this.ret.authorization = this.ret.headers.authorization || this.ret.data.authorization

    } catch (error) {
      this.ret = { status: error.response?.status, error: error.response?.data?.error }
    }
  },
}
export default Login
