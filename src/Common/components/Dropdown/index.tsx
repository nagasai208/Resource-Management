import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ProfilePic from '../../Images/ProfilePic'

import React, { Component } from 'react'
import { observer } from 'mobx-react'
interface DropdownMenuProps {}

@observer
class DropdownMenu extends Component<DropdownMenuProps> {
   editProfile = () => {
      alert(1)
   }
   onClickSignout = () => {
      alert(2)
   }

   render() {
      return (
         <Dropdown
            text=''
            icon='user outline'
            floating
            labeled
            button
            className='user outline'
         >
            <Dropdown.Menu>
               <Dropdown.Divider />
               <Dropdown.Item onClick={this.editProfile}>
                  Add Profile
               </Dropdown.Item>
               <Dropdown.Item onClick={this.onClickSignout}>
                  Signout
               </Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
      )
   }
}

export default DropdownMenu
