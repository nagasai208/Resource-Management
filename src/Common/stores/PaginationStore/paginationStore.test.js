import ProductService from '../../services/ProductService'
import PaginationStore from '.'
import productsData from '../ProductStore/ProductStoreData.json'
import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'
import ProductModel from '../models/Product'

describe('paginationStore test cases', () => {
   let productsAPIService
   let paginationStore
   beforeEach(() => {
      productsAPIService = new ProductService()
      paginationStore = new PaginationStore({
         productsAPIService: productsAPIService,
         limit: 1,
         offSet: 1,
         productModel: ProductModel
      })
   })
   it('intializingTheElements', () => {
      expect(paginationStore.paginationAPIStatus).toBe(API_INITIAL)
      expect(paginationStore.paginationAPIError).toBe(null)
   })

   it('should test userSignInAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      productsAPIService.getProductsAPI = mockSignInAPI
      paginationStore.getProductItems()
      expect(paginationStore.paginationAPIStatus).toBe(API_FETCHING)
      expect(paginationStore.paginationAPIError).toBe(null)
   })

   it('should test userSignInAPI data sucess state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockLoadingPromise = new Promise(function(resolve) {
         resolve(productsData)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      productsAPIService.getProductsAPI = mockSignInAPI
      await paginationStore.getProductItems()
      expect(paginationStore.paginationAPIStatus).toBe(API_SUCCESS)
      expect(paginationStore.paginationAPIError).toBe(null)
   })

   it('should test userSignInAPI failure state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      productsAPIService.getProductsAPI = mockSignInAPI
      await paginationStore.getProductItems()
      expect(paginationStore.paginationAPIStatus).toBe(API_FAILED)
      expect(paginationStore.paginationAPIError).toBe('error')
   })

   it('clearStore', () => {
      paginationStore.clearStore()
      expect(paginationStore.paginationAPIStatus).toBe(API_INITIAL)
      expect(paginationStore.paginationAPIError).toBe(null)
      expect(paginationStore.startPage).toBe(1)
      expect(paginationStore.totalPages).toBe(0)
   })
})
