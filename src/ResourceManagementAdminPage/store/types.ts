export interface AdminResourcesResponse {
   resources_details: Array<EachResourceObject>
   total_resources: number
}

export interface EachResourceObject {
   resource_name: string
   resource_link: string
   description: string
   resource_logo: string
   resource_id: number
   service_name: string
}

export interface AdminResourcesRequestObject {
   limit: number
   offset: number
}

export interface AdminRequestsResponse {
   requests_details: Array<EachRequestResponse>
   total_requests: number
}

export interface EachRequestResponse {
   user_name: string
   resource: string
   item: string
   access_level: string
   due_date_time: string
   request_id: number
}

export interface AdminRequestsRequestObject {
   limit: number
   offset: number
}

export interface AdminUserResponses {
   users_details: Array<EachUserResponse>
   total_users: number
}

export interface AdminUsersRquestObject {
   limit: number
   offset: number
}

export interface EachUserResponse {
   user_name: string
   department: string
   job_role: string
   user_id: number
}
