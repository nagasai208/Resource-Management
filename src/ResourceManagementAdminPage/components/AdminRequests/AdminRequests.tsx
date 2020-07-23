import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import SelectBarButton from '../../../Common/components/SelectBarButon/SelectBarButton'
import { observer } from 'mobx-react'
import { APIStatus } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import { AllRequestsMainDiv, SreachDiv, Heading } from './styledComponents'
interface AdminRequestProps {
   adminStatus: APIStatus
   adminError: Error | null
   doNetworkCalls: Function
   allRequests: any
}
@observer
class AdminRequests extends Component<AdminRequestProps> {
   searchData = event => {}
   renderList = observer(() => {
      return null
   })
   render() {
      const {
         adminStatus,
         adminError,
         doNetworkCalls,
         allRequests
      } = this.props
      return (
         <AllRequestsMainDiv>
            <Header />
            <SelectBarButton isButton='Requests' />

            <SreachDiv>
               <Heading>Pending Requests</Heading>
               <SearchBar searchData={this.searchData} />
            </SreachDiv>
            <LoadingWrapperWithFailure
               apiStatus={adminStatus}
               apiError={adminError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderList}
            />
         </AllRequestsMainDiv>
      )
   }
}

export { AdminRequests }
