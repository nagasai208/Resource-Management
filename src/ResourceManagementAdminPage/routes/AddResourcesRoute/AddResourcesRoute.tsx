import React, { Component } from 'react'
import AddResources from '../../components/AddResources/AddResources'
import { observer } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { gotoAddResources, gotoGoBack } from '../../utils/NavigationUtils'
interface AddResourcesProps extends RouteComponentProps {}
@observer
class AddResourcesRoute extends Component<AddResourcesProps> {
   goBack = () => {
      gotoGoBack(this.props.history)
   }
   render() {
      return <AddResources goBack={this.goBack} />
   }
}

export default withRouter(AddResourcesRoute)
