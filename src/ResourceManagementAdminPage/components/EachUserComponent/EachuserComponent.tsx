import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Header from '../../../Common/components/Header/Header'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import GobackComponent from '../../../Common/components/GobackComponent/GobackComponent'
import { APIStatus } from '@ib/api-constants'
import Button from '../../../Common/components/Button/Button'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import FilterBar from '../../../Common/components/FilterBar/FilterBar'
import SortIcon from '../../../Common/SortIcon/SortIcon'
import PaginationComponent from '../../../Common/components/Pagination/Pagination'
import { observable } from 'mobx'
import {
   ResourceLogo,
   ResourceMainDiv,
   ResourceDetailsDiv,
   ResourceDetails,
   Decription,
   ButtonStyles,
   ButtonDiv,
   DeleteButtonStyles,
   TotalTableDiv,
   EachResourceMainDiv,
   ItemsHeading,
   FilterAndSearchDiv,
   HeadingDiv,
   SortDiv,
   Table,
   TableHeader,
   ItemsTable,
   EachRow,
   PaginationDiv,
   Checkbox,
   TableTitle,
   Description,
   Link,
   FooterDiv,
   AddButtonStyle,
   DeleteButtonDisabled,
   AddButtonStyleDisabled
} from './styledComponents'


interface EachUserComponentProps {
   goBackComponent: (event: React.MouseEvent<HTMLParagraphElement>) => void
   eachResponseAPI: APIStatus
   eachResposeAPIError: Error | null
   eachResourceResponse: any
   doNetworkCalls: () => void
   itemsResponse: any
   addItem: Function
   deleteItem: Function
}
@observer
class EachUser extends Component<EachUserComponentProps> {
   @observable isChecked: boolean = false
   @observable items: Array<number> = []
   onChangeSearchData = event => {
      alert(1)
   }

   desendingOrder = event => {
      alert('dec')
   }
   assendingOrder = event => {
      alert('asc')
   }
   resentlyAdded = event => {
      alert('rec')
   }
   onChangePage = event => {}
   onChangeCheckbox = event => {
      this.isChecked = event.target.checked
      if (this.isChecked) {
         let id = event.target.id
         this.items.push(id)
      } else {
         let id = event.target.id
         let index = this.items.indexOf(id)
         this.items.splice(index, 1)
      }
   }
   renderList = observer(() => {
      const { eachResourceResponse } = this.props
      return (
         <ResourceMainDiv>
            <ResourceDetailsDiv>
               <ResourceLogo src={eachResourceResponse.profileUrl} />
               <ResourceDetails>
                  <p>{eachResourceResponse.name}</p>
                  <p>{eachResourceResponse.department}</p>
                  <p>{eachResourceResponse.jobRole}</p>
               </ResourceDetails>
            </ResourceDetailsDiv>
         </ResourceMainDiv>
      )
   })

   rederTableUi = observer(() => {
      const { itemsResponse } = this.props
      return (
         <ItemsTable>
            <TableHeader>
               <TableTitle>RESOURCENAME</TableTitle>
               <p>ACCESS</p>
               <Description>Description</Description>
               <Link>LINK</Link>
            </TableHeader>
            {itemsResponse.get(1).map(eachItem => {
               return (
                  <div>1</div>
               )
            })}
         </ItemsTable>
      )
   })
   render() {
      const {
         goBackComponent,
         eachResponseAPI,
         eachResposeAPIError,
         doNetworkCalls,
         addItem,
         deleteItem
      } = this.props
      const { resentlyAdded, assendingOrder, desendingOrder } = this
      return (
         <div>
            <Header />
            <EachResourceMainDiv>
               <GobackComponent onClickGoback={goBackComponent} name='users' />
               <LoadingWrapperWithFailure
                  apiStatus={eachResponseAPI}
                  apiError={eachResposeAPIError}
                  onRetryClick={doNetworkCalls}
                  renderSuccessUI={this.renderList}
               />
               <TotalTableDiv>
                  <HeadingDiv>
                     <ItemsHeading>Items</ItemsHeading>
                     <FilterAndSearchDiv>
                        <SearchBar searchData={this.onChangeSearchData} />
                        <SortDiv>
                           <FilterBar
                              data={[
                                 {
                                    name: 'Recently Added',
                                    onclickFunction: resentlyAdded,
                                    id: 'recently_added'
                                 },
                                 {
                                    name: 'Ascending',
                                    onclickFunction: assendingOrder,
                                    id: 'ascending'
                                 },
                                 {
                                    name: 'Descending',
                                    onclickFunction: desendingOrder,
                                    Descending: 'descending',
                                    value: 'descending'
                                 }
                              ]}
                              icon={SortIcon}
                           />
                           <p>SORT</p>
                        </SortDiv>
                     </FilterAndSearchDiv>
                  </HeadingDiv>
                  <Table>
                     <LoadingWrapperWithFailure
                        apiStatus={eachResponseAPI}
                        apiError={eachResposeAPIError}
                        onRetryClick={doNetworkCalls}
                        renderSuccessUI={this.rederTableUi}
                     />
                  </Table>
                  <FooterDiv>
                     <ButtonDiv>
                        <Button
                           name='ADD ITEM'
                           onClick={addItem}
                           type={Button.buttonType.filled}
                           buttonStyles={
                              this.items.length !== 0
                                 ? AddButtonStyleDisabled
                                 : AddButtonStyle
                           }
                           disabled={this.items.length !== 0 ? true : false}
                        />
                        <Button
                           name='DELETE'
                           onClick={deleteItem}
                           type={Button.buttonType.filled}
                           buttonStyles={
                              this.items.length !== 0
                                 ? DeleteButtonStyles
                                 : DeleteButtonDisabled
                           }
                           disabled={this.items.length !== 0 ? false : true}
                        />
                     </ButtonDiv>
                     <PaginationDiv>
                        <PaginationComponent onChangePage={this.onChangePage} />
                     </PaginationDiv>
                  </FooterDiv>
               </TotalTableDiv>
            </EachResourceMainDiv>
         </div>
      )
   }
}

export default EachUser
