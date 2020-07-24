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
   user_image: string
   resource: string
   item: string
   access_level: Array<string>
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
   user_image: string
}

export interface EachResourceResponse {
   resource_details: EachResourceDetails
}

export interface EachResourceDetails {
   resource_name: string
   resource_link: string
   description: string
   resource_logo: string
   resource_id: number
   service_name: string
}
export interface EachResourceItems {
   item_name: string
   item_link: string
   description: string
   item_id: number
}

export interface EachResourceRequestObject {
   resource_id: number
}
