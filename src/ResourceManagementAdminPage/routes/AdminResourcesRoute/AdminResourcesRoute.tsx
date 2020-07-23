import React, { Component } from 'react'
import AdminResources from '../../components/AdminResource/AdminResources'
import { observer, inject } from 'mobx-react'
import { gotoAddResources } from '../../utils/NavigationUtils'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import { action } from 'mobx'

interface AdminResourcesRouteProps extends RouteComponentProps {}

interface InjectedProps extends AdminResourcesRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class AdminResourcesRoute extends Component<AdminResourcesRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   @action.bound
   doNetworkCalls() {
      this.getAdminStore().getAllResources()
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   onClickAdd = () => {
      gotoAddResources(this.props.history)
   }

   render() {
      return (
         <AdminResources
            isButton={true}
            onClickAdd={this.onClickAdd}
            adminStatus={
               this.getAdminStore().adminAllResources.paginationAPIStatus
            }
            adminError={
               this.getAdminStore().adminAllResources.paginationAPIError
            }
            doNetworkCalls={this.doNetworkCalls}
            allResources={this.getAdminStore().adminAllResources.results.get(1)}
         />
      )
   }
}

export default withRouter(AdminResourcesRoute)
