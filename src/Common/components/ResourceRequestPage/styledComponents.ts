import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const RequestPageMainDiv = styled.div`
   ${tw``}
`

const SelectTag = styled.select`
   ${tw`mb-5 h-12 w-full`};
`

const FormMainDiv = styled.div`
   ${tw`flex w-full mt-24 `}
`

const FormDiv = styled.div`
   ${tw`flex flex-col items-center w-1/2 `}
`
const TextArea = styled.textarea`
   ${tw`w-full border border-gray-400 h-24`};
   outline: none;
`

const InputDiv = styled.div`
   ${tw` w-1/2`}
`
export {
   RequestPageMainDiv,
   SelectTag,
   FormMainDiv,
   FormDiv,
   TextArea,
   InputDiv
}
