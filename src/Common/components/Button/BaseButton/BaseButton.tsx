import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

import { BaseBtn } from './styledComponents '

interface BaseButtonProps {
   typo?: any
   onClick: any
   name: any
   apiStatus?: any
   buttonStyles?: object
}
class BaseButton extends Component<BaseButtonProps> {
   render() {
      const {
         name,
         apiStatus,
         buttonStyles,
         typo: TextTypo,
         ...otherProps
      } = this.props
      console.log(buttonStyles)
      return (
         <React.Fragment>
            {apiStatus === 100 ? (
               <BaseBtn
                  buttonStyles={buttonStyles}
                  apiStatus={apiStatus}
                  {...otherProps}
               >
                  <Loader type='TailSpin' color='#fff' height={30} width={30} />
               </BaseBtn>
            ) : (
               <BaseBtn
                  buttonStyles={buttonStyles}
                  apiStatus={apiStatus}
                  {...otherProps}
               >
                  {name}
               </BaseBtn>
            )}
         </React.Fragment>
      )
   }
}

export default BaseButton
