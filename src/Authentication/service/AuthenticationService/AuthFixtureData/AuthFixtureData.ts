import AuthServiceImplements from '..'
import { resolveWithTimeout } from '../../../../Common/utils/TestUtils'
import signInResponse from '../../../fixtures/getSignin.json'
import getProfileDetails from '../../../fixtures/getProfileDetails.json'
import Config from '../../../../Common/constants/EnvironmentConstants'
console.log('base url', Config.BASE_URL)
class AuthService implements AuthServiceImplements {
   getSignupAPI(requestObject) {
      return resolveWithTimeout({})
   }
   getSignInAPI(requestObject) {
      return resolveWithTimeout(signInResponse)
   }

   getSignoutAPI() {
      return resolveWithTimeout({})
   }
   getProfileDetailsAPI() {
      return resolveWithTimeout(getProfileDetails)
   }
   getUpdateProfileAPI(requestObject) {
      return resolveWithTimeout({})
   }
   getUpdatePasswordAPI(requestObject) {
      return resolveWithTimeout({})
   }
}
export { AuthService }
