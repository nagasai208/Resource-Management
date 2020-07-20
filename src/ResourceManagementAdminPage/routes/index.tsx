import React from 'react'
import ProtectedRoute from '../../Common/routes/ProtectedRoute'
import { RESOURCE_MANAGEMENT_RESOURCES } from '../constants/NavigationConstants'
import AdminResourcesRoute from './AdminResources/AdminResourcesRoute'
const resourceManagementRoutes = [
   <ProtectedRoute
      exact
      path={RESOURCE_MANAGEMENT_RESOURCES}
      component={AdminResourcesRoute}
   />
]

export default resourceManagementRoutes
