import axios from 'axios'

var Login = {
  loginFunction(url: string, data: unknown, authorization: string) {
    axios.post(this.URL + url, data, {
      headers: {
        authorization: `${authorization}`,
      },
    })
      .then(res => {
        this.ret = res
      })
      .catch(err => {
        this.ret = err.message
      })
  },
}
export default Login
