import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import AddResourceItem from '../../components/AddResourceItem/AddResourceItem'
import { gotoGoBack } from '../../utils/NavigationUtils'
import AdminStore from '../../store/AdminStore'
import { action } from 'mobx'

interface AddResourceItemRouteProps extends RouteComponentProps {}
interface InjectedProps extends AddResourceItemRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class AddResourceItemRoute extends Component<AddResourceItemRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   doNetworkCalls = () => {
      let id = this.props.match.params['id']
      this.getAdminStore().getEachResource(id)
   }
   @action.bound
   addItem(requestObject) {
      let id = this.props.match.params['id']
      this.getAdminStore().getAddResourceItem(id, requestObject)
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   goBack = () => {
      gotoGoBack(this.props.history)
   }
   render() {
      return (
         <AddResourceItem
            goBack={this.goBack}
            itemAPIStatus={this.getAdminStore().getEachResourceAPIStatus}
            itemAPIError={this.getAdminStore().getEachResorceAPIError}
            itemResourceResponse={this.getAdminStore().eachResourceRespose}
            doNetworkCalls={this.doNetworkCalls}
            addItem={this.addItem}
            itemStatus = {this.getInjectedProps().adminStore.getResourceAddItemAPIStatus}
         />
      )
   }
}

export default withRouter(AddResourceItemRoute)
