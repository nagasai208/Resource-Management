import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

import { BaseBtn } from './styledComponents '

interface BaseButtonProps {
   typo?: any
   onClick: any
   name: any
   apiStatus?: any
   buttonStyles?: object
   id?: string
   disabled?: boolean
}
class BaseButton extends Component<BaseButtonProps> {
   render() {
      const {
         name,
         apiStatus,
         buttonStyles,
         id,
         disabled,
         typo: TextTypo,
         ...otherProps
      } = this.props
      return (
         <React.Fragment>
            {apiStatus === 100 ? (
               <BaseBtn
                  disabled={disabled}
                  id={id}
                  color={id}
                  buttonStyles={buttonStyles}
                  apiStatus={apiStatus}
                  {...otherProps}
               >
                  <Loader type='TailSpin' color='#fff' height={30} width={30} />
               </BaseBtn>
            ) : (
               <BaseBtn
                  id={id}
                  disabled={disabled}
                  color={id}
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
