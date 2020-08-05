import React from 'react'
import ProtectedRoute from '../../Common/routes/ProtectedRoute'
import {
   RESOURCE_MANAGEMENT_RESOURCES,
   RESOURCE_MANAGEMENT_REQUEST,
   RESOURCE_MANAGEMENT_USERS,
   RESOURCE_MANAGEMENT_ADDRESOURCES,
   RESOURCE_MANAGEMENT_ADD_ITEM,
   RESOURCE_MANAGEMENT_SINGLE_RESOURCE,
   RESOURSE_MANAGEMENT_UPDATE_RESOURCE,
   RESOURCE_MANAGEMENT_EACH_USER
} from '../constants/NavigationConstants'
import AdminResourcesRoute from './AdminResourcesRoute/AdminResourcesRoute'
import AdminRequestsRoute from './AdminRequestsRoute/AdminRequestsRoute'
import AdminUsersRoute from './AdminUsersRoute/AdminUsersRoute'
import AddResourcesRoute from './AddResourceRoute/AddResourceRoute'
import AddResourceItemRoute from './AddResourceItemRoute/AddResourceItemRoute'
import EachResourceRoute from './EachResourceRoute/EachResourceRoute'
import UpdateResourceRoute from './UadateResourceRoute/UpdateResourceRoute'
import EachUserRoute from "./EachUserRoute/EachUserRoute"
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
      path={`${RESOURCE_MANAGEMENT_ADD_ITEM}/:id`}
      component={AddResourceItemRoute}
   />,
   <ProtectedRoute
      path={`${RESOURCE_MANAGEMENT_SINGLE_RESOURCE}/:id`}
      component={EachResourceRoute}
   />,
   <ProtectedRoute
      path={RESOURSE_MANAGEMENT_UPDATE_RESOURCE}
      component={UpdateResourceRoute}
   />,
   <ProtectedRoute
      path={RESOURCE_MANAGEMENT_EACH_USER}
      component={EachUserRoute}
   />
]

export default resourceManagementRoutes
