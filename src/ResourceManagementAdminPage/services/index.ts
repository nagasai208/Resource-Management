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
   AddResourceRequestObect,
   EachUserDetailsResponse,
   EachUserItemsResponse,
   EditProfileResponse
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
   getResourceItemsAPI: (id: EachResourceItemId) => Promise<ResouceItems>
   getAddItemResourceAPI: (
      id: number,
      requestObject: AddResourceItemRequestObject
   ) => Promise<{}>

   getAddResourceAPI: (requestObject: AddResourceRequestObect) => Promise<{}>

   getEachUserDetailsAPI: (id: number) => Promise<EachUserDetailsResponse>
   getEachUserItemsAPI: (id: number) => Promise<EachUserItemsResponse>
   getEditProfileAPI: () => Promise<EditProfileResponse>
}

export default AdminServiceImplements
