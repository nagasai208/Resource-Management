import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import { observer } from 'mobx-react'
import { APIStatus } from '@ib/api-constants'
interface EditProfileProps {
   edirAPIStatus: APIStatus
   edirAPIError: Error | null
   editProfileResponse: object
}
@observer
class EditProfile extends Component<EditProfileProps> {
   render() {
      const { edirAPIStatus, edirAPIError } = this.props
      return (
         <div>
            <Header />
         </div>
      )
   }
}

export default EditProfile
