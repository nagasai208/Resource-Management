import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import AuthStore from '../../store/AuthenticationStore'
import { action } from 'mobx'
import { gotoAdminDashBoard, gotoSignUpPage } from '../../utils/NavigationUtils'
import SigninPage from '../../components/SigninPage'

interface SigninPageProps extends RouteComponentProps {}

interface InjectedProps extends SigninPageProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class SigninPageRoute extends Component<SigninPageProps> {
   @action.bound
   signup() {
      gotoSignUpPage(this.getInjectedProps().history)
   }
   @action.bound
   onSubmit() {
      if (this.getInjectedProps().authStore.accessToken !== undefined) {
         return gotoAdminDashBoard(this.getInjectedProps().history)
      }
      return null
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   render() {
      return (
         <SigninPage
            getSignin={this.getInjectedProps().authStore.getSignin}
            getSigninAPIStatus={
               this.getInjectedProps().authStore.getSigninAPIStatus
            }
            onSubmit={this.onSubmit}
            signup={this.signup}
            
         />
      )
   }
}

export default withRouter(SigninPageRoute)
