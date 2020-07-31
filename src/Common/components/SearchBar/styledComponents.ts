import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const SreachBarDiv = styled.div`
   ${tw`  flex items-center w-2/3 h-12 bg-white`}

   border: 1px solid lightgray;
`
const SearchBarInput = styled.input`
   ${tw`w-full`}
   font-size: 18px;
   height: 40px;
   outline: none;
`
export { SreachBarDiv, SearchBarInput }
