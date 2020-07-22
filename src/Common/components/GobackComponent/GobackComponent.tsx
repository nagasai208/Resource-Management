import React, { Component } from 'react'
import { GobackName } from './styledComponents'
import { arrowImage } from '../../Images/ArrowImage'
interface GobackProps {
   name: string
   onClickGoback:(event:React.MouseEvent<HTMLParagraphElement>) => void
}

class GobackComponent extends Component<GobackProps> {
   render() {
      const { name,onClickGoback } = this.props
      return (
         <GobackName>
            <img src={arrowImage} />
            <p onClick = {onClickGoback}>{name}</p>
         </GobackName>
      )
   }
}

export default GobackComponent  
