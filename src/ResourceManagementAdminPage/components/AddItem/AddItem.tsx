import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AddResourcesAndItems from '../../../Common/components/AddResourcesAndItems/AddResourcesAndItems'
import { observable } from 'mobx'

interface AddItemProps {
   goBack: (event: React.MouseEvent<HTMLParagraphElement>) => void
}
@observer
class AddItem extends Component<AddItemProps> {
   @observable name!: string
   @observable link!: string
   @observable descriptionValue!: string
   @observable uploadImage!: string
   @observable resourceName!: string
   constrctor() {
      this.name = ''
      this.link = ''
      this.descriptionValue = ''
      this.uploadImage = ''
      this.resourceName = ''
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
   onChangeResourceName = event => {
      alert(3)
   }
   render() {
      const { goBack } = this.props
      return (
         <div>
            <AddResourcesAndItems
               goBackName='users'
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
               onChangeResourceName={this.onChangeResourceName}
               resourceNameValue={this.resourceName}
               buttonName='CREATE'
            />
         </div>
      )
   }
}

export default AddItem
