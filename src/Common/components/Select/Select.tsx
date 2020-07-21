import React, { Component } from 'react'
import { SelectTag, SelectMainDIv } from './styledComponents'
import { observer } from 'mobx-react'
interface SelectProps {
   onChangeLanguage: Function
}
@observer
class Select extends Component<SelectProps> {
   onChangeLanguage = event => {
      const { onChangeLanguage } = this.props
      onChangeLanguage(event.target.value)
   }
   render() {
      return (
         <SelectMainDIv>
            <SelectTag onChange={this.onChangeLanguage}>
               <option value='en'>English</option>
               <option value='telugu'>telugu</option>
               <option value='hindi'>hindi</option>
            </SelectTag>
         </SelectMainDIv>
      )
   }
}

export default Select
