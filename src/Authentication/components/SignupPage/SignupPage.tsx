import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next'
import Input from '../../../Common/components/Input'
import { imgUrl } from '../../../Common/Images/ibhubsLogo'
import Button from '../../../Common/components/Button/Button'
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
   Login,
   UserName,
   Password,
   InputDiv,
   ConfirmPassword
} from './styledComponents'
import { APIStatus, API_SUCCESS } from '@ib/api-constants'
import Select from '../../../Common/components/Select/Select'
import i18n from '../../../Common/i18n'

interface SignupProps extends WithTranslation {
   getSignup: Function
   onSubmit: Function
   getSignupAPIStatus: APIStatus
}
@observer
class SignupPage extends Component<SignupProps> {
   @observable userName!: string
   @observable password!: string
   @observable confirmPassword!: string
   @observable userNameErrorMessage!: string
   @observable passwordErrorMessage!: string
   @observable confirmPasswordErrorMessage!: string
   userNameRef: React.RefObject<HTMLInputElement> = React.createRef()
   passwordRef: React.RefObject<HTMLInputElement> = React.createRef()
   confirmPasswordRef: React.RefObject<HTMLInputElement> = React.createRef()

   constructor(props) {
      super(props)
      this.userName = ''
      this.password = ''
      this.confirmPassword = ''
      this.userNameErrorMessage = ''
      this.passwordErrorMessage = ''
      this.confirmPasswordErrorMessage = ''
   }
   componentDidMount() {
      if (this.userNameRef.current) {
         this.userNameRef.current.focus()
      }
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
   onChangeLanguage = value => {
      i18n.changeLanguage(value)
   }
   onSubmit = async event => {
      const { getSignup, onSubmit, t } = this.props
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
         this.confirmPasswordErrorMessage = `${t('strings:incorrectPassword')}`
      } else {
         await getSignup({
            username: this.userName,
            password: this.password
         })
         if (this.props.getSignupAPIStatus === API_SUCCESS) {
            alert(4)
            onSubmit()
         }
      }
   }
   render() {
      const { getSignupAPIStatus, t } = this.props
      return (
         <Maindiv>
            <SignupMainDiv>
               <Heading>{t('strings:HiTherePleseSignup')}</Heading>
               <Image src={imgUrl} />
               <InputDiv>
                  <UserName>{t('strings:userName')}</UserName>
                  <Input
                     type='text'
                     onChange={this.onChangeUserName}
                     errorMessage={this.userNameErrorMessage}
                     placeHolder={t('strings:userNamePlaceHolder')}
                     value={this.userName}
                     width='200'
                     inputRef={this.userNameRef}
                  />
               </InputDiv>
               <InputDiv>
                  <Password>{t('strings:password')}</Password>
                  <Input
                     type='password'
                     onChange={this.onChangePassword}
                     errorMessage={this.passwordErrorMessage}
                     placeHolder={t('strings:passwordPlaceHolder')}
                     value={this.password}
                     width='200'
                     inputRef={this.passwordRef}
                  />
               </InputDiv>
               <InputDiv>
                  <ConfirmPassword>
                     {t('strings:confirmPassword')}
                  </ConfirmPassword>
                  <Input
                     type='password'
                     onChange={this.onChangeConfirmPassword}
                     errorMessage={this.confirmPasswordErrorMessage}
                     placeHolder={t('strings:confirmPasswordPlaceholdes')}
                     value={this.confirmPassword}
                     width='200'
                     inputRef={this.confirmPasswordRef}
                  />
               </InputDiv>
               <Button
                  name={t('strings:signUp')}
                  onClick={this.onSubmit}
                  type={Button.buttonType.filled}
                  apiStatus={getSignupAPIStatus}
                  buttonStyles={ButtonStyles}
               />
               <HaveAccont>
                  <HaveAnAccount>
                     {t('strings:dontHaveAnAccount')}
                  </HaveAnAccount>
                  <Login onClick={this.login}>Login</Login>
               </HaveAccont>
               <Select onChangeLanguage={this.onChangeLanguage} />
            </SignupMainDiv>
         </Maindiv>
      )
   }
}

export default withTranslation('translation')(SignupPage)
