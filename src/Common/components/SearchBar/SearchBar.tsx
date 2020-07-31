import React, { Component } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { SreachBarDiv, SearchBarInput } from './styledComponents'
import { observer } from 'mobx-react'
interface SearchBarProps {
   searchData: (event: React.ChangeEvent<HTMLInputElement>) => void
}
@observer
class SearchBar extends Component<SearchBarProps> {
   render() {
      const { searchData } = this.props
      return (
         <SreachBarDiv>
            <AiOutlineSearch size={25} />
            <SearchBarInput type='text' onChange={searchData} />
         </SreachBarDiv>
      )
   }
}

export default SearchBar
