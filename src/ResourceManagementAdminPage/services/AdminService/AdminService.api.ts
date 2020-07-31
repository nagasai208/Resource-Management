import { create } from 'apisauce'
import Config from '../../../Common/constants/EnvironmentConstants'
import AdminServiceImplements from '..'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'

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
   resourceItemsAPI() {
      return networkCallWithApisauce(this.api, '', {}, apiMethods.post)
   }
}

export default AdminService
