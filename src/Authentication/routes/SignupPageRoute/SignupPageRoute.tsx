import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AuthStore from '../../store/AuthenticationStore'
import { gotoSigninPage } from '../../utils/Navigation'
import SignupPage from '../../components/SignupPage'

interface SignupPageProps extends RouteComponentProps {}

interface InjectedProps extends SignupPageProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class SignupPageRoute extends Component<SignupPageProps> {
   onSubmit() {
      // this.getInjectedProps().authStore.getSignup({})
      if (this.getInjectedProps().authStore.getSignupAPIStatus === 200) {
         gotoSigninPage(this.getInjectedProps().history)
      }
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   render() {
      return <SignupPage />
   }
}

export default withRouter(SignupPageRoute)
