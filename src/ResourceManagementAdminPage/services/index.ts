import {
   AdminResourcesRequestObject,
   AdminResourcesResponse,
   AdminRequestsRequestObject,
   AdminRequestsResponse,
   AdminUsersRquestObject,
   AdminUserResponses
} from '../store/types'

interface AdminServiceImplements {
   getAllResourcesAPI: (
      requestObject: AdminResourcesRequestObject
   ) => Promise<AdminResourcesResponse>

   getAllRequestsAPI: (
      requestObject: AdminRequestsRequestObject
   ) => Promise<AdminRequestsResponse>

   getAllUsersAPI: (
      requestObject: AdminUsersRquestObject
   ) => Promise<AdminUserResponses>
}

export default AdminServiceImplements
