import { USER_SIGNIN, USER_SIGNUP } from '../constants/NavigationConstants'
import { RESOURCE_MANAGEMENT_RESOURCES } from '../../ResourceManagementAdminPage/constants/NavigationConstants'

export const gotoAdminDashBoard = history => {
   history.replace(RESOURCE_MANAGEMENT_RESOURCES)
}

export const gotoSigninPage = history => {
   history.replace(USER_SIGNIN)
}

export const gotoSignUpPage = history => {
   history.replace(USER_SIGNUP)
}
