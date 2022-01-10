import Login from './Login'

var Server = {
  URL: 'http://localhost:5000',
  ret: '',
  getRet() {
    return this.ret
  },
}

var ServerLogin = Object.assign(Object.create(Server), Login)

export default ServerLogin

