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
   addItem: Function
}
@observer
class AddResourceItem extends Component<AddItemProps> {
   @observable name: string
   @observable link: string
   @observable descriptionValue: string
   @observable uploadImage: string
   @observable resourceNameValue: string
   @observable errorMessageName!: string
   @observable errorMessagelink!: string
   @observable errorMessageDescription!: string

   constructor(props) {
      super(props)
      this.name = ''
      this.link = ''
      this.descriptionValue = ''
      this.uploadImage = ''
      this.resourceNameValue = ''
      this.errorMessageName = ''
      this.errorMessagelink = ''
      this.errorMessageDescription = ''
   }
   onChangeName = event => {
      this.name = event.target.value
      this.errorMessageName = UserNameValidate(this.name)
   }
   onChangeLink = event => {
      this.link = event.target.value
      this.errorMessagelink = UserNameValidate(this.link)
   }
   description = event => {
      this.descriptionValue = event.target.value
      this.errorMessageDescription = UserNameValidate(this.descriptionValue)
   }
   onClickCreate = () => {
      const { addItem } = this.props
      if (this.name === '') {
         this.errorMessageName = UserNameValidate(this.link)
      }
      if (this.link === '') {
         this.errorMessagelink = UserNameValidate(this.name)
      }
      if (this.descriptionValue === '') {
         this.errorMessageDescription = UserNameValidate(this.descriptionValue)
      } else {
         addItem({
            item_name: this.name,
            item_link: this.link,
            description: this.descriptionValue
         })
      }
   }
   renderList = observer(() => {
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
            errorMessageName={this.errorMessageName}
            errorMessagelink={this.errorMessagelink}
            errorMessageDescription={this.errorMessageDescription}
         />
      )
   })
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
