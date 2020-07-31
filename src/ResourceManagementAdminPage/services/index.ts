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
   UpdateResourceRequestObjectId,
   EachResourceItemId,
   ResouceItems
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
   resourceItemsAPI: (id: EachResourceItemId) => Promise<ResouceItems>
}

export default AdminServiceImplements
