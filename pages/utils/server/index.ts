import Login from './Login'
import User from './userInfos'

var Server = {
  URL: 'http://localhost:5000',
  ret: '',
  getRet() {
    return this.ret
  },
}

var ServerLogin = Object.assign(Object.create(Server), Login)

var ServerUser = Object.assign(Object.create(Server), User)

export {ServerLogin,ServerUser}

