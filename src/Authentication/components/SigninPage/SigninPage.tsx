import React, { Component } from 'react'
import { APIStatus } from '@ib/api-constants'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Input from '../../../Common/components/Input'
import { imgUrl } from '../../../Common/Images/ibhubsLogo'
import Button from '../../../Common/components/Button/Button'
import strings from '../../i18n/string.json'
import { UserNameValidate, PasswordValidate } from '../../utils/ValidationUtils'
import {
   SignupMainDiv,
   Maindiv,
   Heading,
   ButtonStyles,
   Image,
   HaveAnAccount,
   HaveAccont,
   Login,
   UserName,
   Password
} from './StyledComponents'
import { getAccessToken } from '../../../Common/utils/StorageUtils'

interface SigninProps {
   getSignin: Function
   onSubmit: Function
   signup: Function
   getSigninAPIStatus: APIStatus
}
@observer
class SigninPage extends Component<SigninProps> {
   @observable userName!: string
   @observable password!: string
   @observable userNameErrorMessage!: string
   @observable passwordErrorMessage!: string

   constructor(props) {
      super(props)
      this.userName = ''
      this.password = ''
      this.userNameErrorMessage = ''
      this.passwordErrorMessage = ''
   }

   onChangeUserName = event => {
      this.userName = event.target.value
      this.userNameErrorMessage = UserNameValidate(this.userName)
   }

   onChangePassword = event => {
      this.password = event.target.value
      this.passwordErrorMessage = PasswordValidate(this.password)
   }

   signUp = () => {
      const { signup } = this.props
      signup()
   }
   onSubmit = async () => {
      const { getSignin, onSubmit, getSigninAPIStatus } = this.props
      if (this.userName === '') {
         this.userNameErrorMessage = UserNameValidate(this.userName)
      }
      if (this.password === '') {
         this.passwordErrorMessage = PasswordValidate(this.password)
      } else {
         await getSignin({
            username: this.userName,
            password: this.password
         })
         if (getAccessToken() !== undefined) {
            onSubmit()
         }
      }
   }
   render() {
      const { getSigninAPIStatus } = this.props
      return (
         <Maindiv>
            <SignupMainDiv>
               <Heading>{strings.HiTherePleseSignin}</Heading>
               <Image src={imgUrl} />
               <UserName>{strings.userName}</UserName>
               <Input
                  type='text'
                  onChange={this.onChangeUserName}
                  errorMessage={this.userNameErrorMessage}
                  placeHolder={strings.userNamePlaceHolder}
                  value={this.userName}
                  width='200'
               />
               <Password>{strings.password}</Password>
               <Input
                  type='password'
                  onChange={this.onChangePassword}
                  errorMessage={this.passwordErrorMessage}
                  placeHolder={strings.passwordPlaceHolder}
                  value={this.password}
                  width='200'
               />

               <Button
                  name={strings.sigin}
                  onClick={this.onSubmit}
                  type={Button.buttonType.filled}
                  apiStatus={getSigninAPIStatus}
                  buttonStyles={ButtonStyles}
               />
               <HaveAccont>
                  <HaveAnAccount>{strings.dontHaveAnAccount}</HaveAnAccount>
                  <Login onClick={this.signUp}>{strings.signUp}</Login>
               </HaveAccont>
            </SignupMainDiv>
         </Maindiv>
      )
   }
}

export { SigninPage }
