import React from 'react'
import ProtectedRoute from '../../Common/routes/ProtectedRoute'
import {
   RESOURCE_MANAGEMENT_RESOURCES,
   RESOURCE_MANAGEMENT_REQUEST,
   RESOURCE_MANAGEMENT_USERS,
   RESOURCE_MANAGEMENT_ADDRESOURCES,
   RESOURCE_MANAGEMENT_ADD_ITEM
} from '../constants/NavigationConstants'
import AdminResourcesRoute from './AdminResourcesRoute/AdminResourcesRoute'
import AdminRequestsRoute from './AdminRequestsRoute/AdminRequestsRoute'
import AdminUsersRoute from './AdminUsersRoute/AdminUsersRoute'
import AddResourcesRoute from './AddResourcesRoute/AddResourcesRoute'
import AddItemRoute from './AddItemRoute/AddItemRoute'
const resourceManagementRoutes = [
   <ProtectedRoute
      exact
      path={RESOURCE_MANAGEMENT_RESOURCES}
      component={AdminResourcesRoute}
   />,
   <ProtectedRoute
      path={RESOURCE_MANAGEMENT_REQUEST}
      component={AdminRequestsRoute}
   />,
   <ProtectedRoute
      path={RESOURCE_MANAGEMENT_USERS}
      component={AdminUsersRoute}
   />,
   <ProtectedRoute
      path={RESOURCE_MANAGEMENT_ADDRESOURCES}
      component={AddResourcesRoute}
   />,
   <ProtectedRoute
      path={RESOURCE_MANAGEMENT_ADD_ITEM}
      component={AddItemRoute}
   />
]

export default resourceManagementRoutes
