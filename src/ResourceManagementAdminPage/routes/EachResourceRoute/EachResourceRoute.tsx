import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import EachResourceComponent from '../../components/EachResource/EachResourceComponent'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import {
   gotoResources,
   gotoAddResources,
   gotoUpdateResource
} from '../../utils/NavigationUtils'
import { action } from 'mobx'
interface EachResourceRouteProps extends RouteComponentProps {}
interface InjectedProps extends EachResourceRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class EachResourceRoute extends Component<EachResourceRouteProps> {
   constructor(props) {
      super(props)
   }
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
      gotoResources(this.getInjectedProps().history)
   }
   onClickUpdate = () => {
      gotoUpdateResource(this.getInjectedProps().history)
   }
   onClickDelete = () => {
      alert(2)
   }
   render() {
      return (
         <EachResourceComponent
            goBackComponent={this.goBackComponent}
            eachResponseAPI={this.getAdminStore().getEachResourceAPIStatus}
            eachResposeAPIError={this.getAdminStore().getEachResorceAPIError}
            eachResourceResponse={this.getAdminStore().eachResourceRespose}
            doNetworkCalls={this.doNetworkCalls}
            onClickUpdate={this.onClickUpdate}
            onClickDelete={this.onClickDelete}
         />
      )
   }
}

export default withRouter(EachResourceRoute)
