import AdminServiceImplements from '..'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import allResources from '../../fixtures/AllResources.json'
import allRequests from '../../fixtures/AllRequests.json'
import allUsers from '../../fixtures/AllUsers.json'

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
}

export default AdminService
