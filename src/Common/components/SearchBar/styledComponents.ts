import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const SreachBarDiv = styled.div`
   ${tw`  flex items-center`}
   width: 648px;
   height: 40px;
   border: 1px solid lightgray;
`
const SearchBarInput = styled.input`
width:620px;
   font-size: 18px;
   outline: none;
`
export { SreachBarDiv, SearchBarInput }
