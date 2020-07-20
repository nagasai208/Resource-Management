import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../../Common/utils/APIUtils'
import { apiMethods } from '../../../../Common/constants/APIConstants'
import {
   signinEndPoint,
   signupEndPoint,
   signoutEndPoint,
   getProfileEndPoint,
   updateProfileEndpoint,
   updatePasswordEndPoint
} from '../endPoints'
import AuthServiceImplements from '..'
class AuthService implements AuthServiceImplements {
   api
   constructor() {
      this.api = create({ baseURL: 'https' })
   }

   getSignupAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         signupEndPoint,
         requestObject,
         apiMethods.post
      )
   }
   getSignInAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         signinEndPoint,
         requestObject,
         apiMethods.post
      )
   }
   getSignoutAPI() {
      return networkCallWithApisauce(
         this.api,
         signoutEndPoint,
         {},
         apiMethods.post
      )
   }

   getProfileDetailsAPI() {
      return networkCallWithApisauce(
         this.api,
         getProfileEndPoint,
         {},
         apiMethods.get
      )
   }
   getUpdateProfileAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         updateProfileEndpoint,
         requestObject,
         apiMethods.post
      )
   }
   getUpdatePasswordAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         updatePasswordEndPoint,
         requestObject,
         apiMethods.post
      )
   }
}

export { AuthService }
