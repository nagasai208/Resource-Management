import React, { Component } from 'react'
import { isActive, ButtonMainDiv, isInActive } from './styledComponents'
import Button from '../Button/Button'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
   gotoAddRequests,
   gotoAddUsers,
   gotoResources
} from '../../../ResourceManagementAdminPage/utils/NavigationUtils'
interface SelectBarButtonsProps extends RouteComponentProps {
   isButton: string
}
@observer
class SelectBarButton extends Component<SelectBarButtonsProps> {
   onClickResources = event => {
      gotoResources(this.props.history)
   }
   onClickRequests = event => {
      gotoAddRequests(this.props.history)
   }
   onClickUsers = event => {
      gotoAddUsers(this.props.history)
   }

   render() {
      const { isButton } = this.props
      return (
         <ButtonMainDiv>
            <Button
               name='Resources'
               onClick={this.onClickResources}
               type={Button.buttonType.filled}
               buttonStyles={isButton === 'Resources' ? isActive : isInActive}
            />
            <Button
               name='Request'
               onClick={this.onClickRequests}
               type={Button.buttonType.filled}
               buttonStyles={isButton === 'Requests' ? isActive : isInActive}
            />
            <Button
               name='User'
               onClick={this.onClickUsers}
               type={Button.buttonType.filled}
               buttonStyles={isButton === 'users' ? isActive : isInActive}
            />
         </ButtonMainDiv>
      )
   }
}

export default withRouter(SelectBarButton)
