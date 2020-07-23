import React, { Component } from 'react'
import { APIStatus } from '@ib/api-constants'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next'
import Input from '../../../Common/components/Input'
import { imgUrl } from '../../../Common/Images/ibhubsLogo'
import Button from '../../../Common/components/Button/Button'
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
   Password,
   InputDiv
} from './StyledComponents'
import { getAccessToken } from '../../../Common/utils/StorageUtils'
import Select from '../../../Common/components/Select/Select'
import i18n from '../../../Common/i18n'
import { Redirect } from 'react-router-dom'
import { RESOURCE_MANAGEMENT_RESOURCES } from '../../../ResourceManagementAdminPage/constants/NavigationConstants'

interface SigninProps extends WithTranslation {
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
   userNameRef: React.RefObject<HTMLInputElement> = React.createRef()
   passwordRef: React.RefObject<HTMLInputElement> = React.createRef()

   constructor(props) {
      super(props)
      this.userName = ''
      this.password = ''
      this.userNameErrorMessage = ''
      this.passwordErrorMessage = ''
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

   signUp = () => {
      const { signup } = this.props
      signup()
   }

   onChangeLanguage = value => {
      i18n.changeLanguage(value)
   }
   onSubmit = async () => {
      const { getSignin, onSubmit } = this.props
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
      const { getSigninAPIStatus, t, onSubmit } = this.props
      if (getAccessToken() !== undefined) {
         return <Redirect to={RESOURCE_MANAGEMENT_RESOURCES} />
      }

      return (
         <Maindiv>
            <SignupMainDiv>
               <Heading>{t('strings:HiTherePleseSignin')}</Heading>
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
               <Button
                  name={t('strings:sigin')}
                  onClick={this.onSubmit}
                  type={Button.buttonType.filled}
                  apiStatus={getSigninAPIStatus}
                  buttonStyles={ButtonStyles}
               />
               <HaveAccont>
                  <HaveAnAccount>
                     {t('strings:dontHaveAnAccount')}
                  </HaveAnAccount>
                  <Login onClick={this.signUp}>{t('strings:signUp')}</Login>
               </HaveAccont>
               <Select onChangeLanguage={this.onChangeLanguage} />
            </SignupMainDiv>
         </Maindiv>
      )
   }
}

export default withTranslation('translation')(SigninPage)
