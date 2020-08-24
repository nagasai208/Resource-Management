import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import { observer } from 'mobx-react'
import { APIStatus } from '@ib/api-constants'
import Button from '../../../Common/components/Button/Button'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import {
   EditProfileMainDiv,
   InputTag,
   ImageDiv,
   InputHeading,
   InputUserDetailsTag,
   GenderSelectTag,
   Option,
   UserDataDiv,
   UserDataRightDiv,
   UserDataLeftDiv,
   UpdateButton,
   ButtonDiv,
   ChangePassword,
   Logout
} from './styledComponents'
import { observable } from 'mobx'
interface EditProfileProps {
   editAPIStatus: APIStatus
   editAPIError: Error | null
   editProfileResponse: any
   doNetworkCalls: Function
   onClickUpdate: Function
}
@observer
class EditProfile extends Component<EditProfileProps> {
   @observable name!: string
   @observable email!: string
   @observable jobRole!: string
   @observable department!: string
   @observable gender!: string
   @observable userImage

   renderSuccessUi = observer(() => {
      const { editProfileResponse, onClickUpdate } = this.props
      this.userImage = editProfileResponse.userLogo
      this.name = editProfileResponse.userName
      this.jobRole = editProfileResponse.userJobRole
      this.department = editProfileResponse.userDepartment
      this.gender = editProfileResponse.userGender
      this.email = editProfileResponse.userEmail
      return (
         <EditProfileMainDiv>
            <ImageDiv>
               <img src={this.userImage} />
               <InputTag
                  type='file'
                  onChange={editProfileResponse.onChangeUserImage}
               />
            </ImageDiv>
            <div>
               <UserDataDiv>
                  <UserDataRightDiv>
                     <InputHeading>NAME</InputHeading>
                     <InputUserDetailsTag
                        type='text'
                        onChange={editProfileResponse.sai}
                        value={this.name}
                     />
                     <InputHeading>EMAIL</InputHeading>
                     <InputUserDetailsTag
                        type='text'
                        onChange={editProfileResponse.onChangeEmail}
                        value={this.email}
                     />
                     <InputHeading>GENDER</InputHeading>
                     <GenderSelectTag
                        onChange={editProfileResponse.onChangeGender}
                     >
                        <Option hidden>{this.gender}</Option>
                        <Option>MALE</Option>
                        <Option>FEMALE</Option>
                        <Option>GENERAL</Option>
                     </GenderSelectTag>
                  </UserDataRightDiv>
                  <UserDataLeftDiv>
                     <InputHeading>JOB ROLE</InputHeading>
                     <InputUserDetailsTag
                        type='text'
                        onChange={editProfileResponse.onChangeJobRole}
                        value={this.department}
                     />
                     <InputHeading>DEPARTMENT</InputHeading>
                     <GenderSelectTag
                        onChange={editProfileResponse.onChangeDepartment}
                     >
                        <Option hidden>{this.department}</Option>
                        <Option>HARDWARE</Option>
                        <Option>BACKEND</Option>
                        <Option>FRONTEND</Option>
                     </GenderSelectTag>
                  </UserDataLeftDiv>
               </UserDataDiv>
               <ButtonDiv>
                  <Button
                     name='UPDATE'
                     onClick={onClickUpdate}
                     type={Button.buttonType.filled}
                     buttonStyles={UpdateButton}
                  />
                  <Button
                     name='CHANGE PASSWORD'
                     onClick={onClickUpdate}
                     type={Button.buttonType.filled}
                     buttonStyles={ChangePassword}
                  />
                  <Button
                     name='LOGOUT'
                     onClick={onClickUpdate}
                     type={Button.buttonType.filled}
                     buttonStyles={Logout}
                  />
               </ButtonDiv>
            </div>
            <div>
               <img src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/5137a27f-2034-402a-a563-81f597070ce9.svg' />
            </div>
         </EditProfileMainDiv>
      )
   })
   render() {
      const { editAPIStatus, editAPIError, doNetworkCalls } = this.props
      return (
         <div>
            <Header />
            <LoadingWrapperWithFailure
               apiStatus={editAPIStatus}
               apiError={editAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderSuccessUi}
            />
         </div>
      )
   }
}

export default EditProfile
