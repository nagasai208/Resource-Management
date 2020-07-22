import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import IbhubsLogoAndName from '../../Images/ibhubsLogoAndName'
import DropdownMenu from '../Dropdown'
import {
   HeaderMainDiv,
   Image,
   ButtonStyles,
   ImageDiv
} from './styledComponents'
import Button from '../Button/Button'
import { observer } from 'mobx-react'

interface HearderPops {
   isButton?: boolean
   onClickAdd?: Function
}
@observer
class Header extends Component<HearderPops> {
   render() {
      const { isButton, onClickAdd } = this.props
      return (
         <HeaderMainDiv>
            <IbhubsLogoAndName />
            <ImageDiv>
               {isButton && (
                  <Button
                     name='+ ADD'
                     onClick={this.props.onClickAdd}
                     type={Button.buttonType.filled}
                     buttonStyles={ButtonStyles}
                  />
               )}
               <DropdownMenu />
            </ImageDiv>
         </HeaderMainDiv>
      )
   }
}

export default Header
