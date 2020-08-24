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
import EachUserDetailsModel from '../models/EachUserDetailsModel'
import EachUserItemsModel from '../models/EachUserItemsModel'
import EditProfileModel from '../models/EditProfile'
class AdminStore {
   adminService
   limit
   @observable allResources
   @observable adminAllResources
   @observable adminAllRequests
   @observable adminAllUsers
   @observable resourceItems
   @observable eachResourceResponse
   @observable eachUserDetails
   @observable eachUserItems
   @observable editProfileResponse
   @observable getEachResourceAPIStatus!: APIStatus
   @observable getEachResourceAPIError!: Error | null
   @observable getUpdateResourceAPIStatus!: APIStatus
   @observable getUpdateResourceAPIError!: Error | null
   @observable getResourceAddItemAPIStatus!: APIStatus
   @observable getResourceAddItemAPIError!: Error | null
   @observable getAddResourceAPIStatus!: APIStatus
   @observable getAddResourceAPIError!: Error | null
   @observable getUserDetailsAPIStatus!: APIStatus
   @observable getUserDetailsAPIError!: Error | null
   @observable getEditProfileAPIStatus!: APIStatus
   @observable getEditProfileAPIError!: Error | null

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
      this.eachUserItems = new PaginationStore({
         apiService: this.adminService.getEachUserItemsAPI,
         adminModel: EachUserItemsModel,
         responseType: ['items', 'total_items']
      })
      this.init()
   }
   @action.bound
   init() {
      this.getEachResourceAPIError = null
      this.getEachResourceAPIStatus = API_INITIAL
      this.getUpdateResourceAPIError = null
      this.getUpdateResourceAPIStatus = API_INITIAL
      this.getResourceAddItemAPIStatus = API_INITIAL
      this.getResourceAddItemAPIError = null
      this.getAddResourceAPIStatus = API_INITIAL
      this.getAddResourceAPIError = null
      this.getUserDetailsAPIStatus = API_INITIAL
      this.getUserDetailsAPIError = null
      this.getEditProfileAPIStatus = API_INITIAL
      this.getEditProfileAPIError = null
   }

   @action.bound
   setGetEachResourceAPIStatus(status) {
      this.getEachResourceAPIStatus = status
   }

   @action.bound
   setGetEachResourceAPIError(error) {
      this.getEachResourceAPIError = error
   }

   @action.bound
   setEachResourceResponse(response) {
      this.eachResourceResponse = new EachResourceModel(
         response.resource_details
      )
   }

   @action.bound
   setGetUpdateResourceAPIStatus(status) {
      this.getUpdateResourceAPIStatus = status
   }

   @action.bound
   setGetUpdateResourceAPIError(error) {
      this.getUpdateResourceAPIError = error
   }

   @action.bound
   setGetUpdateResourceResponse(response) {}

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
   setGetUserDetailsAPIResponse(response) {
      this.eachUserDetails = new EachUserDetailsModel(response)
   }

   @action.bound
   setGetEditProfileAPIStatus(status) {
      this.getEditProfileAPIStatus = status
   }

   @action.bound
   setGetEditProfileAPIError(error) {
      this.getEditProfileAPIError = error
   }

   @action.bound
   setGetEditProfileAPIResponse(response) {
      this.editProfileResponse = new EditProfileModel(response)
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
            this.setGetUpdateResourceResponse
         )
         .catch(this.setGetUpdateResourceAPIError)
   }
   @action.bound
   getAddResourceItem(id, requestObject) {
      const promises = this.adminService.getAddItemResourceAPI(
         id,
         requestObject
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
      const promises = this.adminService.getEachUserDetailsAPI(id)
      return bindPromiseWithOnSuccess(promises)
         .to(this.setGetUserDetailsAPIStatus, this.setGetUserDetailsAPIResponse)
         .catch(this.setGetUserDetailsAPIError)
   }
   getEditUserProfile() {
      const promises = this.adminService.getEditProfileAPI()
      return bindPromiseWithOnSuccess(promises)
         .to(this.setGetEditProfileAPIStatus, this.setGetEditProfileAPIResponse)
         .catch(this.setGetEditProfileAPIError)
   }
   @action.bound
   clearStore() {
      this.init()
   }
}
export { AdminStore }
