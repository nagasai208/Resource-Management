import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import SelectBarButton from '../../../Common/components/SelectBarButon/SelectBarButton'
import { observer } from 'mobx-react'
import { APIStatus } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'

import SortIcon from '../../../Common/SortIcon/SortIcon'
import FilterIcon from '../../../Common/components/FilterIcon/FilterIcon'
import FilterBar from '../../../Common/components/FilterBar/FilterBar'
import {
   SreachDiv,
   AllUsersMainDiv,
   FilterAndSortDiv,
   SortingDivs,
   Names,
   TableHeading,
   TotalTableDiv,
   EachDataDiv,
   Image,
   UserDiv,
   PaginationDiv
} from './styledComponents'
import PaginationComponent from '../../../Common/components/Pagination/Pagination'
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
   dueDataTime = () => {
      alert('due')
   }
   accessLevel = () => {
      alert('access')
   }
   resource = () => {
      alert('resource')
   }
   resentlyAdded = () => {
      alert('resent')
   }
   ascending = () => {
      alert('asc')
   }
   descending = () => {
      alert('des')
   }
   onChangePage = (event, data) => {
      alert(data.activePage)
   }
   onClickUser = event => {
      alert(event.currentTarget.id)
   }
   renderList = observer(() => {
      const { allUsers } = this.props
      return (
         <TotalTableDiv>
            <TableHeading>
               <p>PERSON NAME</p>
               <p>DEPARTMENT</p>
               <p>JOB ROLE</p>
            </TableHeading>
            {allUsers.get(1).map(eachuser => {
               return (
                  <EachDataDiv id={eachuser.userId} onClick={this.onClickUser}>
                     <UserDiv>
                        <Image src={eachuser.userImage} />
                        <p>{eachuser.userName}</p>
                     </UserDiv>
                     <p>{eachuser.department}</p>
                     <p>{eachuser.jobRole}</p>
                  </EachDataDiv>
               )
            })}
            <PaginationDiv>
               <PaginationComponent onChangePage={this.onChangePage} />
            </PaginationDiv>
         </TotalTableDiv>
      )
   })
   render() {
      const { adminStatus, adminError, doNetworkCalls } = this.props
      const { dueDataTime, accessLevel, resource } = this
      return (
         <AllUsersMainDiv>
            <Header />
            <SelectBarButton isButton='users' />
            <SreachDiv>
               <SearchBar searchData={this.searchData} />
               <FilterAndSortDiv>
                  <SortingDivs>
                     <FilterBar
                        data={[
                           {
                              name: 'Recently Added',
                              onclickFunction: dueDataTime
                           },
                           {
                              name: 'Ascending',
                              onclickFunction: accessLevel
                           },
                           {
                              name: 'Descending',
                              onclickFunction: resource
                           }
                        ]}
                        icon={SortIcon}
                     />
                     <Names>SORT</Names>
                  </SortingDivs>
                  <SortingDivs>
                     <FilterBar
                        data={[
                           {
                              name: 'Due Data Time',
                              onclickFunction: dueDataTime
                           },
                           {
                              name: 'Access Level',
                              onclickFunction: accessLevel
                           },
                           { name: 'Resource', onclickFunction: resource }
                        ]}
                        icon={FilterIcon}
                     />
                     <Names>FILTER</Names>
                  </SortingDivs>
               </FilterAndSortDiv>
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
