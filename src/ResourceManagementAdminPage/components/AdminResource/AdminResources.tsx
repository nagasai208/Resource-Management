import React, { Component } from 'react'
import { observer } from 'mobx-react'
import SelectBarButton from '../../../Common/components/SelectBarButon/SelectBarButton'
import Header from '../../../Common/components/Header/Header'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import { APIStatus } from '@ib/api-constants'
import {
   AdminResourcesMainDiv,
   SreachDiv,
   EachResourcesDiv,
   AllResourcesDiv,
   EachImageDiv,
   Heading,
   HeadingDiv,
   CloudName,
   Link,
   Description,
   EachDivData
} from './styledComponents'
interface AdminResourcesProps {
   isButton: boolean
   onClickAdd: Function | undefined
   doNetworkCalls: Function
   adminStatus: APIStatus
   adminError: Error | null
   allResources: any
}
@observer
class AdminResources extends Component<AdminResourcesProps> {
   searchData = event => {
      alert(event.target.value)
   }

   renderList = observer(() => {
      return (
         <AllResourcesDiv>
            {this.props.allResources.map(resource => {
               return (
                  <EachResourcesDiv>
                     <EachImageDiv>
                        <img src={resource.resourceLogo} />
                        <HeadingDiv>
                           <Heading>{resource.resourceName}</Heading>
                           <CloudName>{resource.serviceName}</CloudName>
                        </HeadingDiv>
                     </EachImageDiv>
                     <EachDivData>
                        <Link href={resource.resourceLink}>
                           {resource.resourceLink}
                        </Link>
                        <Description>{resource.description}</Description>
                     </EachDivData>
                  </EachResourcesDiv>
               )
            })}
         </AllResourcesDiv>
      )
   })
   render() {
      const { onClickAdd, doNetworkCalls, adminStatus, adminError } = this.props
      return (
         <AdminResourcesMainDiv>
            <Header isButton={true} onClickAdd={onClickAdd} />
            <SelectBarButton isButton='Resources' />
            <SreachDiv>
               <SearchBar searchData={this.searchData} />
            </SreachDiv>

            <LoadingWrapperWithFailure
               apiStatus={adminStatus}
               apiError={adminError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderList}
            />
         </AdminResourcesMainDiv>
      )
   }
}

export default AdminResources
