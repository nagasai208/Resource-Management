import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AddResourcesAndItems from '../../../Common/components/AddResourcesAndItems/AddResourcesAndItems'
import { observable } from 'mobx'
import Header from '../../../Common/components/Header/Header'
import { APIStatus } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import { UserNameValidate } from '../../../Authentication/utils/ValidationUtils'

interface AddItemProps {
   goBack: (event: React.MouseEvent<HTMLParagraphElement>) => void
   itemAPIStatus: APIStatus
   itemAPIError: Error | null
   itemResourceResponse: any
   doNetworkCalls: Function
}
@observer
class AddResourceItem extends Component<AddItemProps> {
   @observable name!: string
   @observable link!: string
   @observable descriptionValue!: string
   @observable uploadImage!: string
   @observable resourceNameValue!: string
   constrctor() {
      this.name = ''
      this.link = ''
      this.descriptionValue = ''
      this.uploadImage = ''
      this.resourceNameValue = ''
   }
   onChangeName = event => {
      this.name = event.target.value
   }
   onChangeLink = event => {
      this.link = event.target.value
   }
   description = event => {
      this.descriptionValue = event.target.value
   }
   onClickCreate = () => {
      if (this.name === '') {
         alert('2')
      }
      if (this.link === '') {
      }
      if (this.descriptionValue === '') {
      } else {
         alert(1)
      }
   }
   renderList = () => {
      this.resourceNameValue = this.props.itemResourceResponse.resourceName
      const { goBack } = this.props
      return (
         <AddResourcesAndItems
            goBackName='resource'
            goBack={goBack}
            title='Item Details'
            resourceName={true}
            uploadImage={false}
            onChangeName={this.onChangeName}
            onchangeLink={this.onChangeLink}
            description={this.description}
            onClickCreate={this.onClickCreate}
            name={this.name}
            link={this.link}
            descriptionValue={this.descriptionValue}
            resourceNameValue={this.resourceNameValue}
            buttonName='CREATE'
         />
      )
   }
   render() {
      const { itemAPIStatus, itemAPIError, doNetworkCalls } = this.props
      return (
         <div>
            <Header />
            <LoadingWrapperWithFailure
               apiStatus={itemAPIStatus}
               apiError={itemAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderList}
            />
         </div>
      )
   }
}

export default AddResourceItem
