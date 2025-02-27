import React, { Component } from 'react'
import AdminResources from '../../components/AdminResource/AdminResources'
import { observer, inject } from 'mobx-react'
import { gotoAddResources, gotoEachResource } from '../../utils/NavigationUtils'
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
      gotoAddResources(this.getInjectedProps().history)
   }

   eachResourceRoute = id => {
      gotoEachResource(this.getInjectedProps().history, id)
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
            allResources={this.getAdminStore().adminAllResources.results}
            eachResourceRoute={this.eachResourceRoute}
         />
      )
   }
}

export default withRouter(AdminResourcesRoute)
