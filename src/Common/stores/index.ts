//import AuthService from '../../Authentication/service/AuthenticationService/AuthAPIData'
import AuthStore from '../../Authentication/store/AuthenticationStore/'
import AuthService from '../../Authentication/service/AuthenticationService/AuthFixtureData'
import AdminService from '../../ResourceManagementAdminPage/services/AdminService/AdminFixtureService'
import AdminStore from '../../ResourceManagementAdminPage/store/AdminStore'
const authService = new AuthService()
const authStore = new AuthStore(authService)
const adminService = new AdminService()
const adminStore = new AdminStore(adminService)

export default { authStore, adminStore }
