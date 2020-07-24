import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ProfilePic from '../../Images/ProfilePic'

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import FilterIcon from '../FilterIcon/FilterIcon'
interface FilterBarProps {
   data: any
   icon:any
}

@observer
class FilterBar extends Component<FilterBarProps> {
   render() {
      const { data ,icon} = this.props
      return (
         <Dropdown text='' icon={icon} floating labeled button>
            <Dropdown.Menu>
               <Dropdown.Divider />
               {data.map(eachField => {
                  return (
                     <Dropdown.Item onClick={eachField.onclickFunction}>
                        {eachField.name}
                     </Dropdown.Item>
                  )
               })}
            </Dropdown.Menu>
         </Dropdown>
      )
   }
}

export default FilterBar
