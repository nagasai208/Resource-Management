import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AddResourcesAndItems from '../../../Common/components/AddResourcesAndItems/AddResourcesAndItems'
import { observable } from 'mobx'

interface AddResourcesProps {
   goBack: (event: React.MouseEvent<HTMLParagraphElement>) => void
}
@observer
class AddResources extends Component<AddResourcesProps> {
   @observable name!: string
   @observable link!: string
   @observable descriptionValue!: string
   @observable uploadImage!: string
   constrctor() {
      this.name = ''
      this.link = ''
      this.descriptionValue = ''
      this.uploadImage = ''
   }
   onChangeName = event => {
      alert
      this.name = event.target.value
   }
   onChangeLink = event => {
      this.link = event.target.value
   }
   description = event => {
      this.descriptionValue = event.target.value
   }
   onClickCreate = event => {
      alert(1)
   }

   onChangeUpload = event => {
      console.log(event.target.files, 'sdgj')
   }
   render() {
      const { goBack } = this.props
      return (
         <div>
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
               name={this.name}
               link={this.link}
               descriptionValue={this.descriptionValue}
               onChangeUpload={this.onChangeUpload}
            />
         </div>
      )
   }
}

export default AddResources
