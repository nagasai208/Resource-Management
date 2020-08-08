import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import { action } from 'mobx'
import EachUser from '../../components/EachUserComponent/EachuserComponent'
import { getLoadingStatus } from '@ib/api-utils'
import { gotoAddUsers,gotoAddItemRoute } from "../../utils/NavigationUtils"
interface EachUserRouteProps extends RouteComponentProps {}

interface InjectedProps extends EachUserRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class EachUserRoute extends Component<EachUserRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   @action.bound
    doNetworkCalls() {
      let id = this.props.match.params['id']
       this.getAdminStore().getUserDeatails(id)
      this.getAdminStore().eachUserItems.getResponsesWithIds(id)
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   loadingStatus = () => {
      return getLoadingStatus(
         this.getAdminStore().getUserDetailsAPIStatus,
         this.getAdminStore().eachUserItems.paginationAPIStatus
      )
   }
   goBackComponent = () => {
      gotoAddUsers(this.getInjectedProps().history)
   }
   addItem = () => {
      let id = this.props.match.params['id']
      gotoAddItemRoute (this.getInjectedProps().history, id)
   }
   deleteItem = () => {
      alert('deleteItem')
   }
   render() {
      return <EachUser 
      goBackComponent={this.goBackComponent}
      eachResponseAPI={this.loadingStatus()}
      eachResposeAPIError={this.getAdminStore().getUserDetailsAPIError}
      eachuserResponse  ={this.getAdminStore().eachUserDetails}
      doNetworkCalls={this.doNetworkCalls}
      itemsResponse={this.getAdminStore().eachUserItems.results}
      addItem={this.addItem}
      deleteItem={this.deleteItem}
      />
   }
}

export default withRouter(EachUserRoute)
