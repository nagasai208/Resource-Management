import React, { Component } from 'react'
import IbhubsLogoAndName from '../../Images/ibhubsLogoAndName'
import { profilePic } from '../../Images/ProfilePic'
import {
   HeaderMainDiv,
   Image,
   ButtonStyles,
   ImageDiv,
   ButtonMainDiv,
   AdminButtonStyles
} from './styledComponents'
import Button from '../Button/Button'
import { observer } from 'mobx-react'

interface HearderPops {
   isButton?: boolean
   onClickAdd?: Function
}
@observer
class Header extends Component<HearderPops> {
   onClick = () => {
      const { onClickAdd } = this.props
      alert(1)
   }
   render() {
      const { isButton } = this.props
      return (
         <div>
            <HeaderMainDiv>
               <IbhubsLogoAndName />
               <ImageDiv>
                  {isButton && (
                     <Button
                        name='ADD+'
                        onClick={this.onClick}
                        type={Button.buttonType.filled}
                        buttonStyles={ButtonStyles}
                     />
                  )}
                  <Image src={profilePic} />
               </ImageDiv>
            </HeaderMainDiv>
            <ButtonMainDiv>
               <Button
                  name='ADD+'
                  onClick={this.onClick}
                  type={Button.buttonType.filled}
                  buttonStyles={AdminButtonStyles}
               />
               <Button
                  name='ADD+'
                  onClick={this.onClick}
                  type={Button.buttonType.filled}
                  buttonStyles={AdminButtonStyles}
               />
               <Button
                  name='ADD+'
                  onClick={this.onClick}
                  type={Button.buttonType.filled}
                  buttonStyles={AdminButtonStyles}
               />
            </ButtonMainDiv>
         </div>
      )
   }
}

export default Header
