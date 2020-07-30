import React, { Component } from 'react'
import GobackComponent from '../GobackComponent/GobackComponent'
import Header from '../Header/Header'
import {
   AddFormMainDiv,
   FormDiv,
   ImageDiv,
   Image,
   FieldsDiv,
   Heading,
   ButtonStyle,
   TextArea,
   UploadImageDiv,
   UploadImageIcon,
   UploadImageTag,
   FormSideDiv
} from './styledComponents'
import { addImage } from '../../Images/AddItemAndResourceImage'
import Input from '../Input'
import { observer } from 'mobx-react'
import Button from '../Button/Button'
import { uploadImageUrl } from '../../Images/UploadImageIcon'
import { observable } from 'mobx'

interface AddResourcesAndItemsProps {
   goBackName: string
   goBack: (event: React.MouseEvent<HTMLParagraphElement>) => void
   title: string
   resourceName: boolean
   uploadImage: boolean
   onChangeName: Function
   onchangeLink: Function
   description: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
   onClickCreate: Function
   name: string
   link: string
   descriptionValue: string
   onChangeResourceName?: Function
   resourceNameValue?: string
   onChangeUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void
   imgUrl?: string
}
@observer
class AddResourcesAndItems extends Component<AddResourcesAndItemsProps> {
   @observable imgUrl
   onChangeUploadImage = event => {
      let upload = event.target.files[0]
      let img = new FileReader()
      img.readAsDataURL(upload)
      img.onload = () => {
         this.imgUrl = img.result
      }
   }
   render() {
      const {
         goBackName,
         goBack,
         title,
         resourceName,
         uploadImage,
         onChangeName,
         onchangeLink,
         description,
         onClickCreate,
         name,
         link,
         descriptionValue,
         onChangeResourceName,
         resourceNameValue,
         onChangeUpload
      } = this.props
      return (
         <div>
            <Header />
            <AddFormMainDiv>
               <FormDiv>
                  <GobackComponent onClickGoback={goBack} name={goBackName} />
                  <FieldsDiv>
                     <Heading>{title}</Heading>
                     <FormSideDiv>
                        <p>{resourceName ? 'ITEM' : ''} NAME</p>
                        <Input
                           type='text'
                           placeHolder='name'
                           onChange={onChangeName}
                           value={name}
                           width='100%'
                           errorMessage=''
                        />
                     </FormSideDiv>
                     <FormSideDiv>
                        <p>LINK</p>
                        <Input
                           type='text'
                           placeHolder='link'
                           onChange={onchangeLink}
                           value={link}
                           width='100'
                           errorMessage=''
                        />
                     </FormSideDiv>
                     {resourceName && (
                        <FormSideDiv>
                           <p>RESOURCE NAME</p>
                           <Input
                              type='text'
                              placeHolder='resource name'
                              onChange={onChangeResourceName}
                              value={resourceNameValue}
                              width='100'
                              errorMessage=''
                           />
                        </FormSideDiv>
                     )}
                     <FormSideDiv>
                        <p>DESCRIPTION</p>
                        <TextArea
                           onChange={description}
                           value={descriptionValue}
                           placeholder='description'
                        />
                     </FormSideDiv>
                     {uploadImage && (
                        <UploadImageDiv>
                           <UploadImageTag src={this.imgUrl} />
                           <UploadImageIcon src={uploadImageUrl} />
                           <input
                              type='file'
                              onChange={this.onChangeUploadImage}
                           />
                        </UploadImageDiv>
                     )}
                     <Button
                        name='CREATE'
                        onClick={onClickCreate}
                        type={Button.buttonType.filled}
                        buttonStyles={ButtonStyle}
                     />
                  </FieldsDiv>
               </FormDiv>
               <ImageDiv>
                  <Image src={addImage} />
               </ImageDiv>
            </AddFormMainDiv>
         </div>
      )
   }
}

export default AddResourcesAndItems
