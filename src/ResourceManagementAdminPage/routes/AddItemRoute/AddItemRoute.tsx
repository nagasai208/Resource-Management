import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer } from 'mobx-react'
import AddItem from '../../components/AddItem/AddItem'
import { gotoGoBack } from '../../utils/NavigationUtils'

interface AddItemRoute extends RouteComponentProps {}
@observer
class AddItemRoute extends Component<RouteComponentProps> {
   goBack = () => {
      gotoGoBack(this.props.history)
   }
   render() {
      return <AddItem goBack={this.goBack} />
   }
}

export default withRouter(AddItemRoute)
