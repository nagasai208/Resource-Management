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
   ResouceItems,
   AddResourceItemRequestObject,
   AddResourceRequestObect
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
   addItemResourceAPI: (
      id: number,
      requestObject: AddResourceItemRequestObject
   ) => Promise<{}>

   addResourceAPI: (requestObject: AddResourceRequestObect) => Promise<{}>
}

export default AdminServiceImplements
