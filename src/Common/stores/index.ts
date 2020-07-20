//import AuthService from '../../Authentication/service/AuthenticationService/AuthAPIData'
import AuthStore from '../../Authentication/store/AuthenticationStore/'
import AuthService from '../../Authentication/service/AuthenticationService/AuthFixtureData'
const authService = new AuthService()
const authStore = new AuthStore(authService)

export default { authStore }
