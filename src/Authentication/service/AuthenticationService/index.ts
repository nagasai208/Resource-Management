import {
   SignInObject,
   SignupObject,
   SigninResponse,
   Signout,
   GetProfileDetails,
   UpdateProfileDetails,
   GetProfileDetailsResponse
} from '../../store/types'

interface AuthServiceImplements {
   getSignInAPI: (requestObject: SignInObject) => Promise<SigninResponse>
   getSignupAPI: (requestObject: SignupObject) => Promise<{}>
   getSignoutAPI: () => Promise<{}>
   getProfileDetailsAPI: () => Promise<GetProfileDetailsResponse>
   getUpdateProfileAPI: (requestObject: UpdateProfileDetails) => Promise<{}>
   getUpdatePasswordAPI: (requestObject: UpdateProfileDetails) => Promise<{}>
}

export default AuthServiceImplements
