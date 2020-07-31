import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Header from '../../../Common/components/Header/Header'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import GobackComponent from '../../../Common/components/GobackComponent/GobackComponent'
import { APIStatus } from '@ib/api-constants'
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
   PaginationDiv
} from './styledComponents'
import Button from '../../../Common/components/Button/Button'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import FilterBar from '../../../Common/components/FilterBar/FilterBar'
import SortIcon from '../../../Common/SortIcon/SortIcon'
import PaginationComponent from '../../../Common/components/Pagination/Pagination'

interface EachResourceComponentProps {
   goBackComponent: (event: React.MouseEvent<HTMLParagraphElement>) => void
   eachResponseAPI: APIStatus
   eachResposeAPIError: Error | null
   eachResourceResponse: any
   doNetworkCalls: () => void
   onClickUpdate: Function
   onClickDelete: Function
   itemsResponse: any
}
@observer
class EachResourceComponent extends Component<EachResourceComponentProps> {
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
   renderList = observer(() => {
      const { eachResourceResponse, onClickUpdate, onClickDelete } = this.props
      return (
         <ResourceMainDiv>
            <ResourceDetailsDiv>
               <ResourceLogo src={eachResourceResponse.resourceLogo} />
               <ResourceDetails>
                  <p>{eachResourceResponse.resourceName}</p>
                  <p>{eachResourceResponse.resourceId}</p>
                  <a href={eachResourceResponse.resourceLink}>
                     {eachResourceResponse.resourceLink}
                  </a>
               </ResourceDetails>
            </ResourceDetailsDiv>
            <Decription>{eachResourceResponse.description}</Decription>
            <ButtonDiv>
               <Button
                  name='UPDATE'
                  onClick={onClickUpdate}
                  type={Button.buttonType.filled}
                  buttonStyles={ButtonStyles}
               />
               <Button
                  name='DELETE'
                  onClick={onClickDelete}
                  type={Button.buttonType.filled}
                  buttonStyles={DeleteButtonStyles}
               />
            </ButtonDiv>
         </ResourceMainDiv>
      )
   })

   rederTableUi = observer(() => {
      const { itemsResponse } = this.props
      console.log(itemsResponse.get(1))
      return (
         <ItemsTable>
            <TableHeader>
               <p></p>
               <p>TITLE</p>
               <p>DESCRIPTION</p>
               <p>LINK</p>
            </TableHeader>
            {itemsResponse.get(1).map(eachItem => {
               return (
                  <EachRow id={eachItem.itemId}>
                     <input type='checkbox' />
                     <p>{eachItem.itemName}</p>
                     <p>{eachItem.link}</p>
                     <p>{eachItem.description}</p>
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
         eachResposeAPIError,
         doNetworkCalls
      } = this.props
      const { resentlyAdded, assendingOrder, desendingOrder } = this
      return (
         <div>
            <Header />
            <EachResourceMainDiv>
               <GobackComponent
                  onClickGoback={goBackComponent}
                  name='resources'
               />
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
                  <PaginationDiv>
                     <PaginationComponent onChangePage={this.onChangePage} />
                  </PaginationDiv>
               </TotalTableDiv>
            </EachResourceMainDiv>
         </div>
      )
   }
}

export default EachResourceComponent
