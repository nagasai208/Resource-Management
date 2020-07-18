import AuthServiceImplements from '..'
import { resolveWithTimeout } from '../../../../Common/utils/TestUtils'
import signInResponse from '../../../fixtures/getSignin.json'
import getProfileDetails from '../../../fixtures/getProfileDetails.json'

class AuthService implements AuthServiceImplements {
   getSignInAPI(requestObject) {
      return resolveWithTimeout(signInResponse)
   }

   getSignupAPI(requestObject) {
      return resolveWithTimeout({})
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
