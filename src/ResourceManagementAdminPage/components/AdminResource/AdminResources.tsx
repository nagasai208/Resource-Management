import React, { Component } from 'react'
import { AdminResourcesMainDiv, SreachDiv } from './styledComponents'
import { observer } from 'mobx-react'
import SelectBarButton from '../../../Common/components/SelectBarButon/SelectBarButton'
import Header from '../../../Common/components/Header/Header'
import SearchBar from '../../../Common/components/SearchBar/SearchBar'
import ResourceRequestPage from "../../../Common/components/ResourceRequestPage/ResourceRequestPage"

interface AdminResourcesProps {
   isButton: boolean
   onClickAdd: Function | undefined
}
@observer
class AdminResources extends Component<AdminResourcesProps> {
   searchData = event => {
      alert(event.target.value)
   }
   render() {
      const { onClickAdd } = this.props
      return (
         <AdminResourcesMainDiv>
            <Header isButton={true} onClickAdd={onClickAdd} />
            <SelectBarButton />
            <SreachDiv>
               <SearchBar searchData={this.searchData} />
            </SreachDiv>
            <ResourceRequestPage />
         </AdminResourcesMainDiv>
      )
   }
}

export default AdminResources
