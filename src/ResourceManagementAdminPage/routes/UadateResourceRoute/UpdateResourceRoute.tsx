import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import UpdateResourceComponent from '../../components/UpdateResourceComponent/UpdateResourceComponent'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import { action } from 'mobx'
import { gotoGoBack } from '../../utils/NavigationUtils'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
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
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   goBackComponent = () => {
      gotoGoBack(this.getInjectedProps().history)
   }
   getUpdate = async data => {
      await this.getAdminStore().getUpdateResource(
         data,
         this.props.match.params['id']
      )
   }
   renderList = () => {
      return (
         <UpdateResourceComponent
            goBackComponent={this.goBackComponent}
            updateResourceResponse={this.getAdminStore().eachResourceRespose}
            getUpdateResource={this.getUpdate}
            updateStatus={this.getAdminStore()}
         />
      )
   }
   render() {
      return (
         <LoadingWrapperWithFailure
            apiStatus={this.getAdminStore().getEachResourceAPIStatus}
            apiError={this.getAdminStore().getEachResorceAPIError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderList}
         />
      )
   }
}

export default withRouter(UpdateResourceRoute)
