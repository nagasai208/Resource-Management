import { action, observable, toJS } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

class PaginationStore {
   apiService
   @observable results
   @observable paginationAPIError!: Error | null
   @observable paginationAPIStatus!: APIStatus
   @observable startPage!: number
   @observable totalItems!: number
   @observable totalPages!: number
   responseType!: Array<string>
   offSet!: number
   limit!: number
   adminModel
   constructor(props) {
      this.results = new Map()
      this.apiService = props.apiService
      this.offSet = props.offSet
      this.limit = props.limit
      this.adminModel = props.adminModel
      this.responseType = props.responseType
      this.init()
   }
   @action.bound
   init() {
      this.paginationAPIStatus = API_INITIAL
      this.paginationAPIError = null
      this.startPage = 1
      this.totalPages = 0
   }

   @action.bound
   clearStore() {
      this.init()
   }

   @action.bound
   previousPage() {
      if (this.startPage !== 1) {
         this.offSet = this.offSet - this.limit
         this.startPage = this.startPage - 1
         this.getData()
      }
   }
   @action.bound
   nextPage() {
      if (this.totalPages > this.startPage) {
         this.offSet = this.offSet + this.limit
         this.startPage = this.startPage + 1
         this.getData()
      }
   }

   @action.bound
   getData() {
      if (this.results.has(this.startPage)) {
         this.results.get(this.startPage)
      } else {
         this.getResponse()
      }
   }

   @action.bound
   setAdminResponse(response) {
      this.totalItems = response.total_resources
      this.totalPages = Math.ceil(response[this.responseType[1]] / this.limit)
      let data = response[this.responseType[0]].map(eachProduct => {
         let adminModel = new this.adminModel(eachProduct)
         return adminModel
      })
      this.results.set(this.startPage, data)
   }
   @action.bound
   setGetAdminAPIStatus(status) {
      this.paginationAPIStatus = status
   }
   @action.bound
   setGetAdminAPIError(error) {
      this.paginationAPIError = error
   }
   @action.bound
   getResponse() {
      const usersPromise = this.apiService(this.limit, this.offSet)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetAdminAPIStatus, this.setAdminResponse)
         .catch(this.setGetAdminAPIError)
   }
   @action.bound
   getResponsesWithIds(id) {
      const usersPromise = this.apiService(this.limit, this.offSet, id)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetAdminAPIStatus, this.setAdminResponse)
         .catch(this.setGetAdminAPIError)
   }
}

export { PaginationStore }
