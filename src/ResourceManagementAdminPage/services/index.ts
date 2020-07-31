import {
   AdminResourcesRequestObject,
   AdminResourcesResponse,
   AdminRequestsRequestObject,
   AdminRequestsResponse,
   AdminUsersRquestObject,
   AdminUserResponses,
   EachResourceResponse,
   EachResourceId,
   UpdateResourceRequestObject,
   UpdateResourceRequestObjectId
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

   getEacResourcesAPI: (id: EachResourceId) => Promise<EachResourceResponse>

   getUpdateResourceAPI: (
      requesObject: UpdateResourceRequestObject,
      id: UpdateResourceRequestObjectId
   ) => Promise<{}>
}

export default AdminServiceImplements
