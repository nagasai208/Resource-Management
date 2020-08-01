import React, { Component } from 'react'
import GobackComponent from '../GobackComponent/GobackComponent'
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
   FormSideDiv,
   AddResourceMainDiv,
   InputHeading
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
   resourceNameValue?: string
   onChangeUploadImage?: (event: React.ChangeEvent<HTMLInputElement>) => void
   imgUrl?: string
   buttonName: string
}
@observer
class AddResourcesAndItems extends Component<AddResourcesAndItemsProps> {
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
         resourceNameValue,
         onChangeUploadImage,
         imgUrl,
         buttonName
      } = this.props
      return (
         <AddResourceMainDiv>
            <AddFormMainDiv>
               <FormDiv>
                  <GobackComponent onClickGoback={goBack} name={goBackName} />
                  <FieldsDiv>
                     <Heading>{title}</Heading>
                     <FormSideDiv>
                        <InputHeading>
                           {resourceName ? 'ITEM' : ''} NAME
                        </InputHeading>
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
                        <InputHeading>LINK</InputHeading>
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
                           <InputHeading>RESOURCE NAME</InputHeading>
                           <Input
                              type='text'
                              placeHolder='resource name'
                              value={resourceNameValue}
                              width='100'
                              errorMessage=''
                           />
                        </FormSideDiv>
                     )}
                     <FormSideDiv>
                        <InputHeading>DESCRIPTION</InputHeading>
                        <TextArea
                           onChange={description}
                           value={descriptionValue}
                           placeholder='description'
                        />
                     </FormSideDiv>
                     {uploadImage && (
                        <UploadImageDiv>
                           <UploadImageTag src={imgUrl} />
                           <UploadImageIcon src={uploadImageUrl} />
                           <input type='file' onChange={onChangeUploadImage} />
                        </UploadImageDiv>
                     )}
                     <Button
                        name={buttonName}
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
         </AddResourceMainDiv>
      )
   }
}

export default AddResourcesAndItems
