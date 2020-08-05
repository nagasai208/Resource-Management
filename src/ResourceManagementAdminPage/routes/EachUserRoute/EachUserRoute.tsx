import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import { withRouter,RouteComponentProps } from "react-router-dom"
import AdminStore from "../../store/AdminStore"
import { action } from "mobx"
interface EachUserRouteProps extends RouteComponentProps {}

interface InjectedProps extends EachUserRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class EachUserRoute extends Component <EachUserRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   @action .bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   @action.bound
   doNetworkCalls() {
      this.getAdminStore().getAllResources()
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   render() {
      return (
         <div>
            <p>Hello</p>
         </div>
      )
   }
}

export default withRouter(EachUserRoute)
