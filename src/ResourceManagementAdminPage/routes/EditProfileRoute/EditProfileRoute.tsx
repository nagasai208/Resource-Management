import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../store/AdminStore'
import EditProfile from '../../components/EditProfile/EditProfile'
import { action } from 'mobx'
interface EditProfileRouteProps extends RouteComponentProps {}

interface InjectedProps extends EditProfileRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class EditProfileRoute extends Component<EditProfileRouteProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }
   @action.bound
   getAdminStore() {
      return this.getInjectedProps().adminStore
   }
   @action.bound
   doNetworkCalls() {
      this.getAdminStore().getEditUserProfile()
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   render() {
      return (
         <EditProfile
            edirAPIStatus={this.getAdminStore().getEditProfileAPIStatus}
            edirAPIError={this.getAdminStore().getEditProfileAPIError}
            editProfileResponse = {this.getAdminStore().editProfileRespose}
         />
      )
   }
}

export default EditProfileRoute
