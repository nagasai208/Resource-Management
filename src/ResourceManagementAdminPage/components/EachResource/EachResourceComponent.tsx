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
   DeleteButtonStyles
} from './styledComponents'
import Button from '../../../Common/components/Button/Button'

interface EachResourceComponentProps {
   goBackComponent: (event: React.MouseEvent<HTMLParagraphElement>) => void
   eachResponseAPI: APIStatus
   eachResposeAPIError: Error | null
   eachResourceResponse: any
   doNetworkCalls: () => void
   onClickUpdate: Function
   onClickDelete:Function
}
@observer
class EachResourceComponent extends Component<EachResourceComponentProps> {
   renderList = observer(() => {
      const { eachResourceResponse, onClickUpdate,onClickDelete } = this.props
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
         doNetworkCalls,
      } = this.props
      return (
         <div>
            <Header />
            <GobackComponent onClickGoback={goBackComponent} name='resources' />
            <LoadingWrapperWithFailure
               apiStatus={eachResponseAPI}
               apiError={eachResposeAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderList}
            />
         </div>
      )
   }
}

export default EachResourceComponent

// name='ACCEPT'
//                            onClick={this.accept}
//                            type={Button.buttonType.filled}
//                            buttonStyles={AcceptButtonStyle}
