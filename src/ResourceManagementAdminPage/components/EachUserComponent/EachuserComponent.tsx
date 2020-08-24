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
   AddButtonStyleDisabled,
   ItemName,
   Role
} from './styledComponents'

interface EachUserComponentProps {
   goBackComponent: (event: React.MouseEvent<HTMLParagraphElement>) => void
   eachResponseAPI: APIStatus
   eachResponseAPIError: Error | null
   eachUserResponse: any
   doNetworkCalls: () => void
   itemsResponse: any
   addItem: Function
   deleteItem: Function
}
@observer
class EachUser extends Component<EachUserComponentProps> {
   @observable isChecked: boolean = false
   @observable items: Array<number> = []
   @observable accessLevelList = ['Read', 'Write', 'Owner', 'Comment Only']
   onChangeSearchData = event => {
      alert(1)
   }

   descendingOrder = event => {
      alert('dec')
   }
   ascendingOrder = event => {
      alert('asc')
   }
   recentlyAdded = event => {
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
      const { eachUserResponse } = this.props
      return (
         <ResourceMainDiv>
            <ResourceDetailsDiv>
               <ResourceLogo src={eachUserResponse.profileUrl} />
               <ResourceDetails>
                  <ItemName>{eachUserResponse.name}</ItemName>
                  <Role>{eachUserResponse.department}</Role>
                  <Role>{eachUserResponse.jobRole}</Role>
               </ResourceDetails>
            </ResourceDetailsDiv>
         </ResourceMainDiv>
      )
   })

   renderTableUi = observer(() => {
      const { itemsResponse } = this.props
      console.log(itemsResponse.get(1), 'hdfghjfg')
      return (
         <ItemsTable>
            <TableHeader>
               <TableTitle></TableTitle>
               <TableTitle>RESOURCENAME</TableTitle>
               <TableTitle>ITEM</TableTitle>
               <TableTitle>ACCESS</TableTitle>
               <Description>Description</Description>
               <Link>LINK</Link>
            </TableHeader>
            {itemsResponse.get(1).map(eachItem => {
               return (
                  <EachRow>
                     <Checkbox
                        type='checkbox'
                        onChange={this.onChangeCheckbox}
                     ></Checkbox>
                     <p>{eachItem.resourceName}</p>
                     <p>{eachItem.itemName}</p>
                     <select>
                        <option hidden>{eachItem.accessLevel}</option>
                        {this.accessLevelList.map(level => {
                           return <option>{level}</option>
                        })}
                     </select>
                     <p>{eachItem.description}</p>
                     <a href={eachItem.itemLink}>{eachItem.itemLink}</a>
                  </EachRow>
               )
            })}
         </ItemsTable>
      )
   })
   render() {
      const {
         goBackComponent,
         eachResponseAPI,
         eachResponseAPIError,
         doNetworkCalls,
         addItem,
         deleteItem
      } = this.props
      const {
         recentlyAdded: recentlyAdded,
         ascendingOrder: ascendingOrder,
         descendingOrder: descendingOrder
      } = this
      return (
         <div>
            <Header />
            <EachResourceMainDiv>
               <GobackComponent onClickGoback={goBackComponent} name='users' />
               <LoadingWrapperWithFailure
                  apiStatus={eachResponseAPI}
                  apiError={eachResponseAPIError}
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
                                    onclickFunction: recentlyAdded,
                                    id: 'recently_added'
                                 },
                                 {
                                    name: 'Ascending',
                                    onclickFunction: ascendingOrder,
                                    id: 'ascending'
                                 },
                                 {
                                    name: 'Descending',
                                    onclickFunction: descendingOrder,
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
                        apiError={eachResponseAPIError}
                        onRetryClick={doNetworkCalls}
                        renderSuccessUI={this.renderTableUi}
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
