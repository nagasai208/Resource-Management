import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
   InputMainDiv,
   ErrorMessage,
   InputTag,
   InputTagDiv,
   ErrorMessageLogo
} from './styledComponents'
import { errorImg } from '../../Images/errorImage'
interface InputProps {
   onChange: any
   errorMessage: string
   type: string
   placeHolder: string
   value: string
   width: string
}
@observer
class Input extends Component<InputProps> {
   render() {
      const {
         onChange,
         errorMessage,
         type,
         placeHolder,
         value,
         width
      } = this.props
      return (
         <InputMainDiv>
            <InputTagDiv>
               <InputTag
                  onChange={onChange}
                  type={type}
                  placeholder={placeHolder}
                  value={value}
                  width={width}
               />
               {errorMessage === '' ? '' : <ErrorMessageLogo src={errorImg} />}
            </InputTagDiv>
            <ErrorMessage>{errorMessage}</ErrorMessage>
         </InputMainDiv>
      )
   }
}
export { Input }
