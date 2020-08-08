import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import AuthStore from '../../../Authentication/store/AuthenticationStore'
import { gotoEditProfile } from '../../../ResourceManagementAdminPage/utils/NavigationUtils'
import { withRouter, RouteComponentProps } from 'react-router-dom'
interface DropdownMenuProps extends RouteComponentProps {}
interface InjectedProps extends DropdownMenuProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class DropdownMenu extends Component<DropdownMenuProps> {
   editProfile = () => {
      gotoEditProfile(this.getInjectedProps().history)
   }
   onClickSignout = () => {
      this.getInjectedProps().authStore.getSignout()
   }
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

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

export default withRouter(DropdownMenu)
