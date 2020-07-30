import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import AddResourcesAndItems from '../../../Common/components/AddResourcesAndItems/AddResourcesAndItems'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { APIStatus } from '@ib/api-constants'

interface UpdateResourceComponentProps {
   goBackComponent: (event: React.MouseEvent<HTMLParagraphElement>) => void
   eachResponseAPI: APIStatus
   eachResposeAPIError: Error | null
   eachResourceResponse: any
   doNetworkCalls: () => void
}
@observer
class UpdateResourceComponent extends Component<UpdateResourceComponentProps> {
   @observable name
   @observable link
   @observable descriptionValue
   @observable imgUrl

   onChangeName = () => {}
   onChangeLink = () => {}
   onChangeDescription = () => {}
   updateResourceButton = () => {}
   onUploadImage = event => {}
   render() {
      const { eachResponseAPI, eachResposeAPIError,doNetworkCalls } = this.props
      return (
         <div>
            <AddResourcesAndItems
               goBackName='resources'
               goBack={this.onChangeName}
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
               onChangeUpload={this.onUploadImage}
               imgUrl={this.imgUrl}
            />
         </div>
      )
   }
}

export default UpdateResourceComponent
