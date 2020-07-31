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
   HeadingDiv
} from './styledComponents'
import Button from '../../../Common/components/Button/Button'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import FilterBar from '../../../Common/components/FilterBar/FilterBar'
import SortIcon from '../../../Common/SortIcon/SortIcon'

interface EachResourceComponentProps {
   goBackComponent: (event: React.MouseEvent<HTMLParagraphElement>) => void
   eachResponseAPI: APIStatus
   eachResposeAPIError: Error | null
   eachResourceResponse: any
   doNetworkCalls: () => void
   onClickUpdate: Function
   onClickDelete: Function
}
@observer
class EachResourceComponent extends Component<EachResourceComponentProps> {
   onChangeSearchData = event => {
      alert(1)
   }

   onChnageSort = event => {
      alert(event.target.id)
   }
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
   render() {
      const {
         goBackComponent,
         eachResponseAPI,
         eachResposeAPIError,
         doNetworkCalls
      } = this.props
      const { onChnageSort } = this
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
                     <SearchBar searchData={this.onChangeSearchData} />
                     <FilterBar
                        data={[
                           {
                              name: 'Recently Added',
                              onclickFunction: onChnageSort,
                              id: 'recently_added'
                           },
                           {
                              name: 'Ascending',
                              onclickFunction: onChnageSort,
                              id: 'ascending'
                           },
                           {
                              name: 'Descending',
                              onclickFunction: onChnageSort,
                              Descending: 'descending'
                           }
                        ]}
                        icon={SortIcon}
                     />
                     <p>SORT</p>
                  </HeadingDiv>
               </TotalTableDiv>
            </EachResourceMainDiv>
         </div>
      )
   }
}

export default EachResourceComponent
