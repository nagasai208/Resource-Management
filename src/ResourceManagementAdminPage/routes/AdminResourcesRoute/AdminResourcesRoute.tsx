import React, { Component } from 'react'
import AdminResources from '../../components/AdminResource/AdminResources'
import { observer } from 'mobx-react'
import { gotoAddResources } from '../../utils/NavigationUtils'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface AdminResourcesRoute extends RouteComponentProps {}
@observer
class AdminResourcesRoute extends Component<AdminResourcesRoute> {
   onClickAdd = () => {
      gotoAddResources(this.props.history)
   }

   render() {
      return <AdminResources isButton={true} onClickAdd={this.onClickAdd} />
   }
}

export default withRouter(AdminResourcesRoute)
