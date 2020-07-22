import styled from '@emotion/styled'
import tw from 'tailwind.macro'
type errorProps = {
   error: string
}
const InputMainDiv = styled.div`
   ${tw` justify-center w-full  `}
`
const ErrorMessage = styled.p`
   ${tw`text-red-600 h-10  mt-1 text-sm`};
`

const InputTag = styled.input`
   ${tw` h-10 text-lg`}
   border-radius:2px;
   background-color: ${(props: errorProps) =>
      props.error === '' ? '' : '#fed7d7'};
   outline: none;
`
const InputTagDiv = styled.div`
   ${tw`flex`};
   border: ${(props: errorProps) =>
      props.error === '' ? '1px solid #718096' : '1px solid red'};
   width: 100%;
   background-color: ${(props: errorProps) =>
      props.error === '' ? '' : '#fed7d7'};
`
const ErrorMessageLogo = styled.img`
   ${tw`ml-2`}
`

export { InputMainDiv, ErrorMessage, InputTag, InputTagDiv, ErrorMessageLogo }
