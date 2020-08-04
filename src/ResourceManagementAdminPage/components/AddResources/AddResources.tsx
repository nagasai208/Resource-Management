import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AddResourcesAndItems from '../../../Common/components/AddResourcesAndItems/AddResourcesAndItems'
import { observable } from 'mobx'
import Header from '../../../Common/components/Header/Header'
import { UserNameValidate } from '../../../Authentication/utils/ValidationUtils'

interface AddResourcesProps {
   goBack: (event: React.MouseEvent<HTMLParagraphElement>) => void
   addResource: Function
}
@observer
class AddResources extends Component<AddResourcesProps> {
   @observable name!: string
   @observable link!: string
   @observable descriptionValue!: string
   @observable errorMessageName!: string
   @observable errorMessageLink!: string
   @observable errorMessageDescription!: string
   @observable imgUrl
   constructor(props) {
      super(props)
      this.name = ''
      this.link = ''
      this.descriptionValue = ''
      this.imgUrl = ''
      this.errorMessageName = ''
      this.errorMessageLink = ''
      this.errorMessageDescription = ''
   }
   onChangeName = event => {
      this.name = event.target.value
      this.errorMessageName = UserNameValidate(this.name)
   }
   onChangeLink = event => {
      this.link = event.target.value
      this.errorMessageLink = UserNameValidate(this.link)
   }
   description = event => {
      this.descriptionValue = event.target.value
      this.errorMessageDescription = UserNameValidate(this.descriptionValue)
   }
   onClickCreate = () => {
      const { addResource } = this.props
      if (this.name === '') {
         this.errorMessageName = UserNameValidate(this.name)
      }
      if (this.link === '') {
         this.errorMessageLink = UserNameValidate(this.link)
      }
      if (this.descriptionValue === '') {
         this.errorMessageDescription = UserNameValidate(this.descriptionValue)
      } else {
         addResource({
            resource_name: this.name,
            resource_lnk: this.link,
            description: this.descriptionValue,
            resource_logo: this.imgUrl
         })
      }
   }

   onChangeUpload = event => {
      let upload = event.target.files[0]
      let img = new FileReader()
      img.readAsDataURL(upload)
      img.onload = () => {
         this.imgUrl = img.result
      }
   }
   render() {
      const { goBack } = this.props
      return (
         <div>
            <Header />
            <AddResourcesAndItems
               goBackName='resources'
               goBack={goBack}
               title='Add a Resource'
               resourceName={false}
               uploadImage={true}
               onChangeName={this.onChangeName}
               onchangeLink={this.onChangeLink}
               description={this.description}
               onClickCreate={this.onClickCreate}
               onChangeUploadImage={this.onChangeUpload}
               name={this.name}
               link={this.link}
               descriptionValue={this.descriptionValue}
               imgUrl={this.imgUrl}
               buttonName='CREATE'
               errorMessageName={this.errorMessageName}
               errorMessagelink={this.errorMessageLink}
               errorMessageDescription={this.errorMessageDescription}
            />
         </div>
      )
   }
}

export default AddResources
