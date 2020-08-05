import { create } from 'apisauce'
import Config from '../../../Common/constants/EnvironmentConstants'
import AdminServiceImplements from '..'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { request } from 'http'

class AdminService implements AdminServiceImplements {
   api
   constructor() {
      this.api = create({ baseURL: Config.BASE_URL })
   }

   getAllResourcesAPI(requestobject) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.get)
   }

   getAllRequestsAPI(requestobject) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.get)
   }
   getAllUsersAPI(requestobject) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.get)
   }
   getEacResourcesAPI(id) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.get)
   }
   getUpdateResourceAPI(requestobject, id) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.post)
   }
   getResourceItemsAPI(id) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.post)
   }
   getAddItemResourceAPI(id, requestobject) {
      return networkCallWithApisauce(
         this.api,
         '',
         requestobject,
         apiMethods.post
      )
   }
   getAddResourceAPI(requestobject) {
      return networkCallWithApisauce(
         this.api,
         '',
         requestobject,
         apiMethods.post
      )
   }
   getEachUserDetailsAPI(id) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.get)
   }
   getEachUserItemsAPI(id) {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.get)
   }
}

export default AdminService
