import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import UpdateResourceComponent from '../../components/UpdateResourceComponent/UpdateResourceComponent'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import { action } from 'mobx'
import { gotoResources } from '../../utils/NavigationUtils'
interface UpdateResourceRouteProps extends RouteComponentProps {}
interface InjectedProps extends UpdateResourceRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class UpdateResourceRoute extends Component<UpdateResourceRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      let id = this.props.match.params['id']
      this.getAdminStore().getEachResource(id)
      console.log(this.getAdminStore().eachResourceRespose, 'hjh')
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   goBackComponent = () => {
      gotoResources(this.getInjectedProps().history)
   }
   render() {
      return (
         <UpdateResourceComponent
            goBackComponent={this.goBackComponent}
            eachResponseAPI={this.getAdminStore().getEachResourceAPIStatus}
            eachResposeAPIError={this.getAdminStore().getEachResorceAPIError}
            eachResourceResponse={this.getAdminStore().eachResourceRespose}
            doNetworkCalls={this.doNetworkCalls}
         />
      )
   }
}

export default withRouter(UpdateResourceRoute)
