import React, { Component } from 'react'
import Header from '../../../Common/components/Header/Header'
import SelectBarButton from '../../../Common/components/SelectBarButon/SelectBarButton'
import { observer } from 'mobx-react'
import { APIStatus } from '@ib/api-constants'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import {
   AllRequestsMainDiv,
   SreachDiv,
   Heading,
   FilterAndSearchBarDiv,
   FilterAndSortDiv,
   SortingDivs,
   Names,
   AcceptButtonStyle,
   DeleteButtonStyle,
   ButtonDiv,
   AllRequestMainDiv,
   TableHeading,
   UserNameAndImage,
   UserImage,
   TableRow,
   PaginationDiv,
   CheckBox
} from './styledComponents'
import FilterBar from '../../../Common/components/FilterBar/FilterBar'
import FilterIcon from '../../../Common/components/FilterIcon/FilterIcon'
import SortIcon from '../../../Common/SortIcon/SortIcon'
import { observable } from 'mobx'
import Button from '../../../Common/components/Button/Button'
import PaginationComponent from '../../../Common/components/Pagination/Pagination'
import ReactModel from '../../../Common/components/ReactModel/ReactModel'

interface AdminRequestProps {
   adminStatus: APIStatus
   adminError: Error | null
   doNetworkCalls: Function
   allRequests: any
}
@observer
class AdminRequests extends Component<AdminRequestProps> {
   @observable selectedPageNmber
   @observable open: boolean = false
   filterList!: Array<Object>
   @observable isChecked: boolean = true
   @observable title
   @observable typeOfModel
   @observable buttonType
   @observable onChangeRejectedValue
   searchData = event => {}
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
   accept = () => {
      this.open = true
      this.title = 'Do you want Accept?'
      this.typeOfModel = false
      this.buttonType = 'OK'
   }
   reject = () => {
      this.open = true
      this.title = 'Do you want Reject?'
      this.typeOfModel = true
      this.buttonType = 'REJECT'
   }
   pagination = (event, data) => {
      this.selectedPageNmber = data.activePage
      alert(this.selectedPageNmber)
   }
   cancel = () => {
      this.open = false
   }
   onChangeRejectedData = event => {
      this.onChangeRejectedValue = event.target.value
   }
   renderList = observer(() => {
      const { allRequests } = this.props
      return (
         <AllRequestMainDiv>
            <TableHeading>
               <p></p>
               <p>PERSON NAME</p>
               <p>RESOURCE</p>
               <p>ITEMA</p>
               <p>ACCESS LEVEL</p>
               <p>DUE DATE TIME</p>
            </TableHeading>
            {allRequests.get(1).map(eachRequest => {
               return (
                  <TableRow id={eachRequest.requestId}>
                     <CheckBox type='checkbox' />
                     <UserNameAndImage>
                        <UserImage src={eachRequest.userImage} />
                        <p>{eachRequest.userName}</p>
                     </UserNameAndImage>
                     <p>{eachRequest.resource}</p>
                     <p>{eachRequest.item}</p>

                     <select>
                        {eachRequest.accessLevel.map(eachLevel => {
                           return <option>{eachLevel}</option>
                        })}
                     </select>
                     <p>{eachRequest.DueDateTime}</p>
                  </TableRow>
               )
            })}
            <PaginationDiv>
               <PaginationComponent onChangePage={this.pagination} />
            </PaginationDiv>
         </AllRequestMainDiv>
      )
   })
   render() {
      const {
         adminStatus,
         adminError,
         doNetworkCalls,
         allRequests
      } = this.props
      const { dueDataTime, accessLevel, resource } = this
      return (
         <AllRequestsMainDiv>
            <Header />
            <SelectBarButton isButton='Requests' />
            <SreachDiv>
               <Heading>Pending Requests</Heading>
               <FilterAndSearchBarDiv>
                  <SearchBar searchData={this.searchData} />
                  {this.isChecked === false && (
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
                  )}
                  <ReactModel
                     open={this.open}
                     cancel={this.cancel}
                     title={this.title}
                     buttonType={this.buttonType}
                     typeOfModel={this.typeOfModel}
                     rejectionData={this.onChangeRejectedData}
                  />
                  {this.isChecked === true && (
                     <ButtonDiv>
                        <Button
                           name='ACCEPT'
                           onClick={this.accept}
                           type={Button.buttonType.filled}
                           buttonStyles={AcceptButtonStyle}
                        />
                        <Button
                           name='REJECT'
                           onClick={this.reject}
                           type={Button.buttonType.filled}
                           buttonStyles={DeleteButtonStyle}
                        />
                     </ButtonDiv>
                  )}
               </FilterAndSearchBarDiv>
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
