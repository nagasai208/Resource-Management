import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const InputMainDiv = styled.div`
   ${tw` justify-center `}
`
const ErrorMessage = styled.p`
   ${tw`text-red-600 h-10  mt-1 text-sm`};
`

const InputTag = styled.input`
${tw` h-10 `}
   width: ${props => (props.width ? '' : '#fed7d7')};
   border-radius:2px;
   outline:none
`

const InputTagDiv = styled.div`
   ${tw`flex border border-gray-500`};
   width: 320px;
`

const ErrorMessageLogo = styled.img`
   ${tw`ml-2`}
`

export { InputMainDiv, ErrorMessage, InputTag, InputTagDiv, ErrorMessageLogo }
