import React, { Component } from 'react'
import { observer } from 'mobx-react'
import UpdateResourceComponent from '../../components/UpdateResourceComponent/UpdateResourceComponent'
@observer
class UpdateResourceRoute extends Component {
   render() {
      return <UpdateResourceComponent />
   }
}

export default UpdateResourceRoute
