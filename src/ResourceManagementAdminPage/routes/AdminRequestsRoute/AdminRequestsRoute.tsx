import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import { AdminRequests } from "../../components/AdminRequests/AdminRequests"
import { action } from "mobx"

interface AdminResourcesRouteProps extends RouteComponentProps {}
interface InjectedProps extends AdminResourcesRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class AdminRequestsRoute extends Component<AdminResourcesRouteProps> {
    componentDidMount() {
        this.doNetworkCalls()
     }
     @action .bound
     getAdminStore() {
        return this.getInjectedProps().adminStore
     }
     @action.bound
     doNetworkCalls() {
        this.getAdminStore().getAllRequests()
     }
     getInjectedProps = (): InjectedProps => this.props as InjectedProps
   render() {
      return <AdminRequests 
      adminStatus={
        this.getAdminStore().adminAllRequests.paginationAPIStatus
     }
     adminError={this.getAdminStore().adminAllRequests.paginationAPIError}
     doNetworkCalls={this.doNetworkCalls}
     allRequests = {this.getAdminStore().adminAllRequests.results.get(1)} />
   }
}

export default withRouter(AdminRequestsRoute)
