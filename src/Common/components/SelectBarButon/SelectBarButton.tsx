import React, { Component } from 'react'
import { isActive, ButtonMainDiv, isInActive } from './styledComponents'
import Button from '../Button/Button'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
@observer
class SelectBarButton extends Component {
   @observable isButtonName = 'Resources'
   onClick = event => {
      this.isButtonName = event.target.id
   }
   render() {
      return (
        
            <ButtonMainDiv>
               <Button
                  id='Resources'
                  name='Resources'
                  onClick={this.onClick}
                  type={Button.buttonType.filled}
                  buttonStyles={
                     this.isButtonName === 'Resources' ? isActive : isInActive
                  }
               />
               <Button
                  name='Requests'
                  onClick={this.onClick}
                  type={Button.buttonType.filled}
                  buttonStyles={
                     this.isButtonName === 'Requests' ? isActive : isInActive
                  }
                  id='Requests'
               />
               <Button
                  name='Users'
                  onClick={this.onClick}
                  type={Button.buttonType.filled}
                  buttonStyles={
                     this.isButtonName === 'users' ? isActive : isInActive
                  }
                  id='users'
               />
            </ButtonMainDiv>
      )
   }
}

export default SelectBarButton
