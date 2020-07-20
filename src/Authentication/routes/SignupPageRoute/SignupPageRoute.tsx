import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AuthStore from '../../store/AuthenticationStore'
import { gotoSigninPage } from '../../utils/Navigation'
import SignupPage from '../../components/SignupPage'
import { action } from 'mobx'

interface SignupPageProps extends RouteComponentProps {}

interface InjectedProps extends SignupPageProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class SignupPageRoute extends Component<SignupPageProps> {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   @action.bound
   onSubmit() {
      gotoSigninPage(this.getInjectedProps().history)
   }

   render() {
      return (
         <SignupPage
            authStore={this.getInjectedProps().authStore}
            onSubmit={this.onSubmit}
         />
      )
   }
}

export default withRouter(SignupPageRoute)
