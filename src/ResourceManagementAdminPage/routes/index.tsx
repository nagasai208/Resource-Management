import React from 'react'
import ProtectedRoute from '../../Common/routes/ProtectedRoute'
import {
   RESOURCE_MANAGEMENT_RESOURCES,
   RESOURCE_MANAGEMENT_REQUEST,
   RESOURCE_MANAGEMENT_USERS,
   RESOURCE_MANAGEMENT_ADDRESOURCES,
   RESOURCE_MANAGEMENT_ADD_ITEM,
   RESOURCE_MANAGEMENT_SINGLE_RESOURCE,
   RESOURSE_MANAGEMENT_UPDATE_RESOURCE
} from '../constants/NavigationConstants'
import AdminResourcesRoute from './AdminResourcesRoute/AdminResourcesRoute'
import AdminRequestsRoute from './AdminRequestsRoute/AdminRequestsRoute'
import AdminUsersRoute from './AdminUsersRoute/AdminUsersRoute'
import AddResourcesRoute from './AddResourcesRoute/AddResourcesRoute'
import AddItemRoute from './AddItemRoute/AddItemRoute'
import EachResourceRoute from './EachResourceRoute/EachResourceRoute'
import UpdateResourceRoute from './UadateResourceRoute/UpdateResourceRoute'
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
   />,
   <ProtectedRoute
      path={`${RESOURCE_MANAGEMENT_SINGLE_RESOURCE}/:id`}
      component={EachResourceRoute}
   />,
   <ProtectedRoute
      path={RESOURSE_MANAGEMENT_UPDATE_RESOURCE}
      component={UpdateResourceRoute}
   />
]

export default resourceManagementRoutes
