import React, { Component } from 'react'
import { buttonType, variationType } from './constants'
import BaseButton from './BaseButton/BaseButton'
import OutlineButton from './OutlineButton/OutlineButton'
interface ButtonProps {
   type: string
   typo?: any
   onClick: any
   name: any
   apiStatus?: any
   buttonStyles?: object
   id?:string
   disabled?:boolean
}
class Button extends Component<ButtonProps> {
   static buttonType = buttonType
   static variationType = variationType

   getButtonVariation = variation => {
      switch (variation) {
         case variationType.oval:
            return 1
         case variationType.rectangle:
            return 2
      }
   }
   render() {
      const { type, ...otherProps } = this.props
      switch (type) {
         case buttonType.filled:
            return <BaseButton {...otherProps} />
         case buttonType.outline:
            return <OutlineButton />
         default:
            console.warn('Invalid button type', 'type')
            break
      }
   }
}

export default Button
