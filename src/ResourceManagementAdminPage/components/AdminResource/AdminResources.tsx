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
   EachDivData,
   PaginationDiv,
   ResourcesTotalDiv
} from './styledComponents'
import PaginationComponent from '../../../Common/components/Pagination/Pagination'
import { observable } from 'mobx'
interface AdminResourcesProps {
   isButton: boolean
   onClickAdd: Function | undefined
   doNetworkCalls: Function
   adminStatus: APIStatus
   adminError: Error | null
   allResources: any
   eachResourceRoute: Function
}
@observer
class AdminResources extends Component<AdminResourcesProps> {
   @observable selectedPageNumber
   searchData = event => {
      alert(event.target.value)
   }
   onChangePage = (event, data) => {
      this.selectedPageNumber = data.activePage
      alert(this.selectedPageNumber)
   }
   onClickResource = event => {
      const { eachResourceRoute } = this.props
      let id = event.currentTarget.id
      eachResourceRoute(id)
   }
   renderList = observer(() => {
      return (
         <ResourcesTotalDiv>
            <AllResourcesDiv>
               {this.props.allResources.get(1).map(resource => {
                  return (
                     <EachResourcesDiv
                        id={resource.resourceId}
                        onClick={this.onClickResource}
                     >
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
            <PaginationDiv>
               <PaginationComponent onChangePage={this.onChangePage} />
            </PaginationDiv>
         </ResourcesTotalDiv>
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
