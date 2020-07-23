import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import SelectBarButton from '../../../Common/components/SelectBarButon/SelectBarButton'
import { observer } from 'mobx-react'
import { APIStatus } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import { SreachDiv, AllUsersMainDiv } from './styledComponents'
interface AdminUsersProps {
   adminStatus: APIStatus
   adminError: Error | null
   doNetworkCalls: Function
   allUsers: any
}
@observer
class AdminUsers extends Component<AdminUsersProps> {
   searchData = () => {
      alert(1)
   }
   renderList = observer(() => {
      return null
   })
   render() {
      const { adminStatus, adminError, doNetworkCalls } = this.props
      return (
         <AllUsersMainDiv>
            <Header />
            <SelectBarButton isButton='users' />
            <SreachDiv>
               <SearchBar searchData={this.searchData} />
            </SreachDiv>
            <LoadingWrapperWithFailure
               apiStatus={adminStatus}
               apiError={adminError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderList}
            />
         </AllUsersMainDiv>
      )
   }
}

export { AdminUsers }
