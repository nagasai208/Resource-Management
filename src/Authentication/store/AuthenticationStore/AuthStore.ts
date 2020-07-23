import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import AuthService from '../../service/AuthenticationService/AuthAPIData'
import AuthServiceImplements from '../../service/AuthenticationService'
import { observable, action } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import {
   setAccessToken,
   getAccessToken,
   clearUserSession
} from '../../../Common/utils/StorageUtils'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
class AuthStore {
   @observable accessToken!: string
   authService: AuthServiceImplements
   @observable getSigninAPIStatus!: APIStatus
   @observable getSigninAPIError!: Error | null
   @observable getSignupAPIStatus!: APIStatus
   @observable getSignupAPIError!: Error | null
   @observable getsignoutAPIStatus!: APIStatus
   @observable getsignoutAPIError!: Error | null
   @observable getProfileDetailAPIStatus!: APIStatus
   @observable getProfileDetailsAPIError!: Error | null
   @observable getProfileUpdateAPIStatus!: APIStatus
   @observable getProfileUpdateAPIError!: Error | null
   @observable getUpdarePasswordAPIStatus!: APIStatus
   @observable getUpdatePasswordApiError!: Error | null
   @observable errorMessage!: string
   constructor(authService) {
      this.authService = authService
      this.init()
   }

   @action.bound
   init() {
      this.getSigninAPIStatus = API_INITIAL
      this.getSigninAPIError = null
      this.getSignupAPIStatus = API_INITIAL
      this.getSignupAPIError = null
      this.getsignoutAPIStatus = API_INITIAL
      this.getsignoutAPIError = null
      this.getProfileDetailAPIStatus = API_INITIAL
      this.getProfileDetailsAPIError = null
      this.getProfileUpdateAPIStatus = API_INITIAL
      this.getProfileUpdateAPIError = null
      this.getUpdarePasswordAPIStatus = API_INITIAL
      this.getUpdatePasswordApiError = null
      this.errorMessage = ''
      this.accessToken = getAccessToken()
   }

   @action.bound
   validateErrormessage(response) {
      if (response.http_res_code === 400 || response.http_res_code === 404) {
         this.errorMessage = response.response
      } else {
      }
   }

   @action.bound
   setgetSignupAPIStatus(status) {
      this.getSignupAPIStatus = status
   }
   @action.bound
   setGetSignUpAPIError(error) {
      this.errorMessage = getUserDisplayableErrorMessage(error)
      console.log(this.errorMessage, 'signup')
      this.getSignupAPIError = error
   }
   @action.bound
   setGetSignupAPIResponse(response) {
      console.log(response, 'response')
      //  this.validateErrormessage(response)
   }

   @action.bound
   setGetSigninAPIStatus(status) {
      this.getSigninAPIStatus = status
   }
   @action.bound
   setGetSigninAPIError(error) {
      this.errorMessage = getUserDisplayableErrorMessage(error)
      console.log(this.errorMessage[1], 'signin')
      this.getSigninAPIError = error
   }
   @action.bound
   setGetSigninResponse(response) {
      console.log(response, 'response')
      setAccessToken(response.access_token)
      this.accessToken = getAccessToken()
   }

   @action.bound
   setGetSignoutAPIStatus(status) {
      this.getsignoutAPIStatus = status
   }
   @action.bound
   setGetSignoutAPIError(error) {
      this.getsignoutAPIError = error
   }

   @action.bound
   setGetSignoutResponse(response) {
      clearUserSession()
   }

   @action.bound
   setGetProfileDetailsAPIStatus(status) {
      this.getProfileDetailAPIStatus = status
   }

   @action.bound
   setGetProfileDetailsAPIError(error) {
      this.getProfileDetailsAPIError = error
   }

   @action.bound
   setGetProfileDetailsResponse(response) {}

   @action.bound
   setGetProfileUpdateAPIStatus(status) {
      this.getProfileUpdateAPIStatus = status
   }

   @action.bound
   setGetProfileUpdateAPIError(error) {
      this.getProfileUpdateAPIError = error
   }

   @action.bound
   setGetProfileUpdateResponse(response) {}

   @action.bound
   setGetUpdatePasswordAPIStatus(status) {
      this.getUpdarePasswordAPIStatus = status
   }

   @action.bound
   setGetUpdatePasswordAPIError(error) {
      this.getUpdatePasswordApiError = error
   }

   @action.bound
   setGetUpdatePasswordResponse(response) {}

   @action.bound
   getSignup(requestObject) {
      const promise = this.authService.getSignupAPI(requestObject)
      return bindPromiseWithOnSuccess(promise)
         .to(this.setgetSignupAPIStatus, this.setGetSignupAPIResponse)
         .catch(this.setGetSignUpAPIError)
   }
   @action.bound
   getSignin(requestObject) {
      const promise = this.authService.getSignInAPI(requestObject)
      return bindPromiseWithOnSuccess(promise)
         .to(this.setGetSigninAPIStatus, this.setGetSigninResponse)
         .catch(this.setGetSigninAPIError)
   }

   @action.bound
   getSignout() {
      const promise = this.authService.getSignoutAPI()
      return bindPromiseWithOnSuccess(promise)
         .to(this.setGetSignoutAPIStatus, this.setGetSignoutResponse)
         .catch(this.setGetSignoutAPIError)
   }

   @action.bound
   getProfileDetails() {
      const promise = this.authService.getProfileDetailsAPI()
      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetProfileDetailsAPIStatus,
            this.setGetProfileDetailsResponse
         )
         .catch(this.setGetProfileDetailsAPIError)
   }

   @action.bound
   getProfileUpdate(requestObject) {
      const promise = this.authService.getUpdateProfileAPI(requestObject)
      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetProfileUpdateAPIStatus,
            this.setGetProfileUpdateResponse
         )
         .catch(this.setGetProfileUpdateAPIError)
   }

   @action.bound
   getUpdatePassword(requestObject) {
      const promise = this.authService.getUpdatePasswordAPI(requestObject)
      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetUpdatePasswordAPIStatus,
            this.setGetUpdatePasswordResponse
         )
         .catch(this.setGetUpdatePasswordAPIError)
   }
   @action.bound
   clearStore() {
      this.init()
   }
}

export { AuthStore }
