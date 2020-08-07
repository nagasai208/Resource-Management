import React, { Component } from 'react'
import AddResources from '../../components/AddResource/AddResource'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { gotoGoBack } from '../../utils/NavigationUtils'
import AdminStore from '../../store/AdminStore'
interface AddResourcesProps extends RouteComponentProps {}
interface InjectedProps extends AddResourcesProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class AddResourcesRoute extends Component<AddResourcesProps> {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   addResource = requestObject => {
      this.getInjectedProps().adminStore.getAddResource(requestObject)
   }
   goBack = () => {
      gotoGoBack(this.props.history)
   }
   render() {
      return (
         <AddResources
            goBack={this.goBack}
            addResource={this.addResource}
            addResourceStatus={
               this.getInjectedProps().adminStore.getAddResourceAPIStatus
            }
         />
      )
   }
}

export default withRouter(AddResourcesRoute)
