import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { AdminUsers } from '../../components/AdminUsers/AdminUsers'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import { action } from 'mobx'
import { gotoEachUser } from '../../utils/NavigationUtils'
import { RESOURCE_MANAGEMENT_EACH_USER } from '../../constants/NavigationConstants'
interface AdminResourcesRouteProps extends RouteComponentProps {}
interface InjectedProps extends AdminResourcesRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class AdminUsersRoute extends Component<AdminResourcesRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   @action.bound
   eachUserId(id) {
      gotoEachUser(this.getInjectedProps().history, id)
   }
   @action.bound
   doNetworkCalls() {
      this.getAdminStore().getAllUsers()
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   render() {
      return (
         <AdminUsers
            adminStatus={this.getAdminStore().adminAllUsers.paginationAPIStatus}
            adminError={this.getAdminStore().adminAllUsers.paginationAPIError}
            doNetworkCalls={this.doNetworkCalls}
            allUsers={this.getAdminStore().adminAllUsers.results}
            eachUserId={this.eachUserId}
         />
      )
   }
}

export default withRouter(AdminUsersRoute)
