import { observable, action } from 'mobx'
import PaginationStore from '../../../Common/stores/PaginationStore'
import AdminAllResourcesModel from '../models/AdminAllResourcesModel'
import AdminAllRequestsModel from '../models/AdminAllRequests'
class AdminStore {
   adminService
   limit
   @observable allResources
   @observable adminAllResources
   @observable adminAllRequests
   @observable adminAllUsers
   constructor(adminService) {
      this.adminService = adminService
      this.allResources = new Map()
      this.adminAllResources = new PaginationStore({
         apiService: this.adminService.getAllResourcesAPI,
         limit: 4,
         adminModel: AdminAllResourcesModel,
         responseType: 'resources_details'
      })
      this.adminAllRequests = new PaginationStore({
         apiService: this.adminService.getAllRequestsAPI,
         limit: 4,
         adminModel: AdminAllRequestsModel,
         responseType: 'requests_details'
      })
      this.adminAllUsers = new PaginationStore({
         apiService: this.adminService.getAllUsersAPI,
         limit: 4,
         adminModel: AdminAllRequestsModel,
         responseType: 'users_details'
      })
      this.init()
   }
   @action.bound
   init() {}

   @action.bound
   getAllResources() {
      this.adminAllResources.getResponse()
   }

   @action.bound
   getAllRequests() {
      this.adminAllRequests.getResponse()
   }

   @action.bound
   getAllUsers() {
      this.adminAllUsers.getResponse()
   }

   @action.bound
   clearStore() {
      this.init()
   }
}
export { AdminStore }
