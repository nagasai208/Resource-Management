import AdminServiceImplements from '..'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import allResources from '../../fixtures/AllResources.json'
import allRequests from '../../fixtures/AllRequests.json'
import allUsers from '../../fixtures/AllUsers.json'
import resourceDetails from '../../fixtures/ResourceDetails.json'

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
}

export default AdminService
