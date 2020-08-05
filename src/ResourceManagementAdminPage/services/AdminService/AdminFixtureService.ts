import AdminServiceImplements from '..'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import allResources from '../../fixtures/AllResources.json'
import allRequests from '../../fixtures/AllRequests.json'
import allUsers from '../../fixtures/AllUsers.json'
import resourceDetails from '../../fixtures/ResourceDetails.json'
import eachResourcesItems from '../../fixtures/EachresourceItems.json'
import userDetails from '../../fixtures/UserDetails.json'
import eachUserItems from '../../fixtures/EachUserItems.json'
class AdminService implements AdminServiceImplements {
   getAllResourcesAPI(requestobject) {
      return resolveWithTimeout(allResources)
   }
   getAllRequestsAPI(requestobject) {
      return resolveWithTimeout(allRequests)
   }

   getAllUsersAPI(requestobject) {
      return resolveWithTimeout(allUsers)
   }
   getEacResourcesAPI(id) {
      return resolveWithTimeout(resourceDetails)
   }
   getUpdateResourceAPI(requestobject, id) {
      return resolveWithTimeout({})
   }
   getResourceItemsAPI(id) {
      return resolveWithTimeout(eachResourcesItems)
   }
   getAddItemResourceAPI(id, requestobject) {
      return resolveWithTimeout({})
   }
   getAddResourceAPI(requestobject) {
      return resolveWithTimeout({})
   }
   getEachUserDetailsAPI(id) {
      return resolveWithTimeout(userDetails)
   }
   getEachUserItemsAPI(id) {
      return resolveWithTimeout(eachUserItems)
   }
}

export default AdminService
