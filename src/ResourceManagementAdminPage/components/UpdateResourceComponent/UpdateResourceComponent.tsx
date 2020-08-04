import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import AddResourcesAndItems from '../../../Common/components/AddResourcesAndItems/AddResourcesAndItems'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserNameValidate } from '../../../Authentication/utils/ValidationUtils'

interface UpdateResourceComponentProps {
   goBackComponent: (event: React.MouseEvent<HTMLParagraphElement>) => void
   updateResourceResponse: any
   getUpdateResource: Function
   updateStatus: any
}
@observer
class UpdateResourceComponent extends Component<UpdateResourceComponentProps> {
   @observable name: string
   @observable link: string
   @observable descriptionValue
   @observable imgUrl
   @observable errorMessageName!: string
   @observable errorMessagelink!: string
   @observable errorMessageDescription!: string
   requestObject!: Object
   constructor(props) {
      super(props)
      const { updateResourceResponse } = this.props
      this.name = updateResourceResponse.resourceName
      this.link = updateResourceResponse.resourceLink
      this.descriptionValue = updateResourceResponse.description
      this.imgUrl = updateResourceResponse.resourceLogo
      this.errorMessageName = ''
      this.errorMessagelink = ''
      this.errorMessageDescription = ''
   }
   onChangeName = event => {
      this.name = event.target.value
   }
   onChangeLink = event => {
      this.link = event.target.value
   }
   onChangeDescription = event => {
      this.descriptionValue = event.target.value
   }
   onUploadImage = event => {
      let upload = event.target.files[0]
      let img = new FileReader()
      img.readAsDataURL(upload)
      img.onload = () => {
         this.imgUrl = img.result
      }
   }
   notify = () => {
      toast.success('Sucessfully Updated !')
   }
   updateResourceButton = () => {
      const { getUpdateResource } = this.props
      if (this.name === '') {
         this.errorMessageName = UserNameValidate(this.name)
      }
      if (this.link === '') {
         this.errorMessagelink = UserNameValidate(this.link)
      }
      if (this.descriptionValue === '') {
         this.errorMessageDescription = UserNameValidate(this.descriptionValue)
      } else {
         this.requestObject = {
            resource_name: this.name,
            resource_link: this.link,
            description: this.descriptionValue,
            resource_logo: this.imgUrl
         }
         getUpdateResource(this.requestObject)
      }
   }
   render() {
      const { goBackComponent, updateStatus } = this.props
      return (
         <div>
            <Header />
            <AddResourcesAndItems
               goBackName='resources'
               goBack={goBackComponent}
               title='Upadate Resource Name'
               resourceName={false}
               uploadImage={true}
               onChangeName={this.onChangeName}
               onchangeLink={this.onChangeLink}
               description={this.onChangeDescription}
               onClickCreate={this.updateResourceButton}
               name={this.name}
               link={this.link}
               descriptionValue={this.descriptionValue}
               onChangeUploadImage={this.onUploadImage}
               imgUrl={this.imgUrl}
               buttonName='UPDATE'
               errorMessageName={this.errorMessageName}
               errorMessagelink={this.errorMessagelink}
               errorMessageDescription={this.errorMessageDescription}
            />

            {updateStatus.getUpadateResourceAPIStatus === 200 && (
               <div>
                  {this.notify()}
                  <ToastContainer position='top-center' />
               </div>
            )}
         </div>
      )
   }
}

export default UpdateResourceComponent
