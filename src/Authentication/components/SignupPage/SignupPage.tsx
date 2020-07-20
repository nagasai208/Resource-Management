import React, { Component } from 'react'
import Input from '../../../Common/components/Input'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import strings from '../../i18n/string.json'
import {
   UserNameValidate,
   PasswordValidate,
   ConfirmPasswordValidate
} from '../../utils/ValidationUtils'
import {
   SignupMainDiv,
   Maindiv,
   Heading,
   ButtonStyles,
   Image,
   HaveAnAccount,
   HaveAccont,
   Login
} from './styledComponents'
import { imgUrl } from '../../../Common/Images/ibhubsLogo'
import Button from '../../../Common/components/Button/Button'
import AuthStore from '../../store/AuthenticationStore'
interface SignupProps {
   authStore: AuthStore
   onSubmit: Function
}
@observer
class SignupPage extends Component<SignupProps> {
   @observable userName!: string
   @observable password!: string
   @observable confirmPassword!: string
   @observable userNameErrorMessage!: string
   @observable passwordErrorMessage!: string
   @observable confirmPasswordErrorMessage!: string

   constructor(props) {
      super(props)
      this.userName = ''
      this.password = ''
      this.confirmPassword = ''
      this.userNameErrorMessage = ''
      this.passwordErrorMessage = ''
      this.confirmPasswordErrorMessage = ''
   }

   onChangeUserName = event => {
      this.userName = event.target.value
      this.userNameErrorMessage = UserNameValidate(this.userName)
   }

   onChangePassword = event => {
      this.password = event.target.value
      this.passwordErrorMessage = PasswordValidate(this.password)
   }
   onChangeConfirmPassword = event => {
      this.confirmPassword = event.target.value
      this.confirmPasswordErrorMessage = ConfirmPasswordValidate(
         this.confirmPassword
      )
   }

   login = () => {
      const { onSubmit } = this.props
      onSubmit()
   }
   onSubmit = () => {
      const { authStore, onSubmit } = this.props
      if (this.userName === '') {
         this.userNameErrorMessage = UserNameValidate(this.userName)
      }
      if (this.password === '') {
         this.passwordErrorMessage = PasswordValidate(this.password)
      }
      if (this.confirmPassword === '') {
         this.confirmPasswordErrorMessage = ConfirmPasswordValidate(
            this.confirmPassword
         )
      }
      if (this.password !== this.confirmPassword) {
         this.confirmPasswordErrorMessage = strings.incorrectPassword
      } else {
         this.props.authStore.getSignup({
            username: this.userName,
            password: this.password,
            confirm_password: this.confirmPassword
         })
         if (this.props.authStore.getSignupAPIStatus === 200) {
            this.props.onSubmit()
         }
      }
   }
   render() {
      return (
         <Maindiv>
            <SignupMainDiv>
               <Heading>{strings.HiTherePleseSignup}</Heading>
               <Image src={imgUrl} />
               <Input
                  type='text'
                  onChange={this.onChangeUserName}
                  errorMessage={this.userNameErrorMessage}
                  placeHolder={strings.userNamePlaceHolder}
                  value={this.userName}
                  width='200'
               />
               <Input
                  type='password'
                  onChange={this.onChangePassword}
                  errorMessage={this.passwordErrorMessage}
                  placeHolder={strings.passwordPlaceHolder}
                  value={this.password}
                  width='200'
               />

               <Input
                  type='password'
                  onChange={this.onChangeConfirmPassword}
                  errorMessage={this.confirmPasswordErrorMessage}
                  placeHolder={strings.confirmPassword}
                  value={this.confirmPassword}
                  width='200'
               />
               <Button
                  name={strings.signUp}
                  onClick={this.onSubmit}
                  type={Button.buttonType.filled}
                  apiStatus={200}
                  buttonStyles={ButtonStyles}
               />
               <HaveAccont>
                  <HaveAnAccount>{strings.dontHaveAnAccount}</HaveAnAccount>
                  <Login onClick={this.login}>Login</Login>
               </HaveAccont>
            </SignupMainDiv>
         </Maindiv>
      )
   }
}

export { SignupPage }
