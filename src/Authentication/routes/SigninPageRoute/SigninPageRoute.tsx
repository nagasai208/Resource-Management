import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import AuthStore from '../../store/AuthenticationStore'
import { action } from 'mobx'
import { gotoAdminDashBoard } from '../../utils/Navigation'
import SigninPage from '../../components/SigninPage'

interface SigninPageProps extends RouteComponentProps {}

interface InjectedProps extends SigninPageProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class SigninPageRoute extends Component<SigninPageProps> {
   @action.bound
   onSubmit() {
      this.getInjectedProps().authStore.getSignin({})
      if (this.getInjectedProps().authStore.accessToken !== undefined) {
         gotoAdminDashBoard(this.getInjectedProps().history)
      }
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   render() {
      return <SigninPage />
   }
}

export default withRouter(SigninPageRoute)
