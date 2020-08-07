import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { getLoadingStatus } from '@ib/api-utils'
import EachResourceComponent from '../../components/EachResource/EachResourceComponent'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'

import {
   gotoResources,
   gotoAddResources,
   gotoUpdateResource,
   gotoAddItemRoute,
   gotoGoBack
} from '../../utils/NavigationUtils'
import { action } from 'mobx'
interface EachResourceRouteProps extends RouteComponentProps {}
interface InjectedProps extends EachResourceRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class EachResourceRoute extends Component<EachResourceRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      let id = this.props.match.params['id']
      this.getAdminStore().getEachResource(id)
      this.getAdminStore().getResourceItems(id)
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   goBackComponent = () => {
      gotoResources(this.getInjectedProps().history)
   }
   onClickUpdate = () => {
      gotoUpdateResource(this.getInjectedProps().history)
   }
   deleteResource = () => {
      alert(2)
   }
   addItem = () => {
      let id = this.props.match.params['id']
      gotoAddItemRoute(this.getInjectedProps().history, id)
   }
   deleteItem = () => {
      alert('deleteItem')
   }
   loadingStatus = () => {
      return getLoadingStatus(
         this.getAdminStore().getEachResourceAPIStatus,
         this.getAdminStore().resourceItems.paginationAPIStatus
      )
   }
   render() {
      return (
         <EachResourceComponent
            goBackComponent={this.goBackComponent}
            eachResponseAPI={this.loadingStatus()}
            eachResposeAPIError={this.getAdminStore().getEachResorceAPIError}
            eachResourceResponse={this.getAdminStore().eachResourceRespose}
            doNetworkCalls={this.doNetworkCalls}
            onClickUpdate={this.onClickUpdate}
            deleteResource={this.deleteResource}
            itemsResponse={this.getAdminStore().resourceItems.results}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
         />
      )
   }
}

export default withRouter(EachResourceRoute)
