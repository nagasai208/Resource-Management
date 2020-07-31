import { observable, action } from 'mobx'
import PaginationStore from '../../../Common/stores/PaginationStore'
import AdminAllResourcesModel from '../models/AdminAllResourcesModel'
import AdminAllRequestsModel from '../models/AdminAllRequests'
import AllUsersModel from '../models/AdminAllUsers'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import EachResourceModel from '../models/EachResourceModel'
import { setAccessToken } from '../../../Common/utils/StorageUtils'
class AdminStore {
   adminService
   limit
   @observable allResources
   @observable adminAllResources
   @observable adminAllRequests
   @observable adminAllUsers
   @observable getEachResourceAPIStatus!: APIStatus
   @observable getEachResorceAPIError!: Error | null
   @observable getUpadateResourceAPIStatus!: APIStatus
   @observable getUdateResourceAPIError!: Error | null
   @observable eachResourceRespose
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
         adminModel: AllUsersModel,
         responseType: 'users_details'
      })
      this.init()
   }
   @action.bound
   init() {
      this.getEachResorceAPIError = null
      this.getEachResourceAPIStatus = API_INITIAL
      this.getUdateResourceAPIError = null
      this.getUpadateResourceAPIStatus = API_INITIAL
   }

   @action.bound
   setGetEachResourceAPIStatus(status) {
      this.getEachResourceAPIStatus = status
   }

   @action.bound
   setGetEachResourceAPIError(error) {
      this.getEachResorceAPIError = error
   }

   @action.bound
   setEachResourceResponse(response) {
      this.eachResourceRespose = new EachResourceModel(
         response.resource_details
      )
   }

   @action.bound
   setGetUpdateResourceAPIStatus(status) {
      this.getUpadateResourceAPIStatus = status
   }

   @action.bound
   setGetUpadateResourceAPIError(error) {
      this.getUdateResourceAPIError = error
   }

   @action.bound
   setGetUpadateResourceResponse(response) {}

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
   getEachResource(id) {
      const usersPromise = this.adminService.getEacResourcesAPI(id)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetEachResourceAPIStatus, this.setEachResourceResponse)
         .catch(this.setGetEachResourceAPIError)
   }

   getUpdateResource(id, requestObjext) {
      const usersPromise = this.adminService.getUpdateResourceAPI(
         id,
         requestObjext
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(
            this.setGetUpdateResourceAPIStatus,
            this.setGetUpadateResourceResponse
         )
         .catch(this.setGetUpadateResourceAPIError)
   }
   @action.bound
   clearStore() {
      this.init()
   }
}
export { AdminStore }
