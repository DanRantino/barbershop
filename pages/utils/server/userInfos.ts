import axios from 'axios'

var User = {
  async getUserInfo(url: string, authorization: string) {
    try {
      let response = await axios.get(this.URL + url, {
        headers: {
          authorization: `${authorization}`,
        },
      })
      this.ret = response.data
    } catch (error) {
      this.ret = { status: error.response?.status, error: error.response?.data?.error }
    }
  },
}
export default User
