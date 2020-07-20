export interface SignInObject {
   username: string
   password: string
}

export interface SignupObject {
   username: string
   password: string
   confirm_password: string
}

export interface SigninResponse {
   user_id: number
   is_admin: boolean
   access_token: string
   refresh_token: string
}

export interface Signout {
   access_token: string
}

export interface GetProfileDetails {
   access_token: string
}
export interface UpdateProfileDetails {
   email: string
   job_role: string
   gender: string
   profile_url: string
   department: string
   username: string
}
export interface UpdatePassword {
   access_token: string
}

export interface GetProfileDetailsResponse {
   email: string
   job_role: string
   gender: string
   profile_url: string
   department: string
   name: string
}
