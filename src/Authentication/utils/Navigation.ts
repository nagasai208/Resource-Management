import { USER_SIGNIN, USER_SIGNUP } from '../constants/NavigationConstants'
import { RESOURCE_MANAGEMENT_RESOURCES } from '../../ResourceManagementAdminPage/constants/NavigationConstants'

export const gotoAdminDashBoard = history => {
   history.push(RESOURCE_MANAGEMENT_RESOURCES)
}

export const gotoSigninPage = history => {
   history.push(USER_SIGNIN)
}

export const gotoSignUpPage = history => {
   history.push(USER_SIGNUP)
}
