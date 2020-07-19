import AuthService from '../../Authentication/service/AuthenticationService/AuthAPIData'
import AuthStore from '../../Authentication/store/AuthenticationStore'

const authService = new AuthService()
const authStore = new AuthStore(authService)

export default { authStore }
