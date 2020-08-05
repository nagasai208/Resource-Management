import { observable, action } from 'mobx'
import PaginationStore from '../../../Common/stores/PaginationStore'
import AdminAllResourcesModel from '../models/AdminAllResourcesModel'
import AdminAllRequestsModel from '../models/AdminAllRequests'
import AllUsersModel from '../models/AdminAllUsers'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import EachResourceModel from '../models/EachResourceModel'
import { setAccessToken } from '../../../Common/utils/StorageUtils'
import ResourceItemsModel from '../models/ResourceItemsModel'
class AdminStore {
   adminService
   limit
   @observable allResources
   @observable adminAllResources
   @observable adminAllRequests
   @observable adminAllUsers
   @observable resourceItems
   @observable eachResourceRespose
   @observable eachUserDetails
   @observable eachUserItems
   @observable getEachResourceAPIStatus!: APIStatus
   @observable getEachResorceAPIError!: Error | null
   @observable getUpadateResourceAPIStatus!: APIStatus
   @observable getUdateResourceAPIError!: Error | null
   @observable getResourceAddItemAPIStatus!: APIStatus
   @observable getResourceAddItemAPIError!: Error | null
   @observable getAddResourceAPIStatus!: APIStatus
   @observable getAddResourceAPIError!: Error | null
   @observable getUserDetailsAPIStatus!: APIStatus
   @observable getUserDetailsAPIError!: Error | null

   constructor(adminService) {
      this.adminService = adminService
      this.allResources = new Map()
      this.adminAllResources = new PaginationStore({
         apiService: this.adminService.getAllResourcesAPI,
         limit: 4,
         adminModel: AdminAllResourcesModel,
         responseType: ['resources_details', 'total_resources']
      })
      this.adminAllRequests = new PaginationStore({
         apiService: this.adminService.getAllRequestsAPI,
         limit: 4,
         adminModel: AdminAllRequestsModel,
         responseType: ['requests_details', 'total_requests']
      })
      this.adminAllUsers = new PaginationStore({
         apiService: this.adminService.getAllUsersAPI,
         limit: 4,
         adminModel: AllUsersModel,
         responseType: ['users_details', 'total_users']
      })
      this.resourceItems = new PaginationStore({
         apiService: this.adminService.getResourceItemsAPI,
         adminModel: ResourceItemsModel,
         responseType: ['items', 'total_items']
      })
      this.init()
   }
   @action.bound
   init() {
      this.getEachResorceAPIError = null
      this.getEachResourceAPIStatus = API_INITIAL
      this.getUdateResourceAPIError = null
      this.getUpadateResourceAPIStatus = API_INITIAL
      this.getResourceAddItemAPIStatus = API_INITIAL
      this.getResourceAddItemAPIError = null
      this.getAddResourceAPIStatus = API_INITIAL
      this.getAddResourceAPIError = null
      this.getUserDetailsAPIStatus = API_INITIAL
      this.getAddResourceAPIError = null
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
   setGetResourceAddItemAPIStatus(status) {
      this.getResourceAddItemAPIStatus = status
   }
   @action.bound
   setGetResourceAddItemAPIError(error) {
      this.getResourceAddItemAPIError = error
   }
   @action.bound
   setGetResourceAddItemAPIResponse(response) {}

   @action.bound
   setGetAddResourceAPIStatus(status) {
      this.getAddResourceAPIStatus = status
   }

   @action.bound
   setGetAddResourceAPIError(error) {
      this.getAddResourceAPIError = error
   }

   @action.bound
   setGetAddResourceAPIResponse(response) {}

   @action.bound
   setGetUserDetailsAPIStatus(status) {
      this.getUserDetailsAPIStatus = status
   }
   @action.bound
   setGetUserDetailsAPIError(error) {
      this.getUserDetailsAPIError = error
   }
   @action.bound
   getAllUsers() {
      this.adminAllUsers.getResponse()
   }
   @action.bound
   getResourceItems(id) {
      this.resourceItems.getResponsesWithIds(id)
   }

   @action.bound
   setGetUserDetailsAPIResponse(response) {
      this.eachUserDetails = response
   }

   @action.bound
   getEachResource(id) {
      const usersPromise = this.adminService.getEacResourcesAPI(id)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetEachResourceAPIStatus, this.setEachResourceResponse)
         .catch(this.setGetEachResourceAPIError)
   }
   @action.bound
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
   getAddResourceItem(id, requestObjext) {
      const promises = this.adminService.getAddItemResourceAPI(
         id,
         requestObjext
      )
      return bindPromiseWithOnSuccess(promises)
         .to(
            this.setGetResourceAddItemAPIStatus,
            this.setGetResourceAddItemAPIResponse
         )
         .catch(this.setGetResourceAddItemAPIError)
   }

   @action.bound
   getAddResource(requestObject) {
      const promises = this.adminService.getAddResourceAPI(requestObject)
      return bindPromiseWithOnSuccess(promises)
         .to(this.setGetAddResourceAPIStatus, this.setGetAddResourceAPIResponse)
         .catch(this.setGetAddResourceAPIError)
   }
   @action.bound
   getUserDeatails(id) {
      const promises = this.adminService.geteachUserDetailsAPI(id)
      return bindPromiseWithOnSuccess(promises)
         .to(this.setGetUserDetailsAPIStatus, this.setGetUserDetailsAPIResponse)
         .catch(this.setGetUserDetailsAPIError)
   }
   @action.bound
   clearStore() {
      this.init()
   }
}
export { AdminStore }
