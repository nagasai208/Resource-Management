import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

type errorProps = {
   error: string
}
const AddFormMainDiv = styled.div`
   ${tw` flex w-full min-h-screen bg-gray-200`}
`

const FormDiv = styled.div`
   ${tw`w-1/2`}
`

const ImageDiv = styled.div`
   ${tw`w-1/2 `}
`

const Image = styled.img`
   ${tw``};
   width: 900px;
   height: 800px;
`

const FieldsDiv = styled.div`
   ${tw` flex flex-col  items-center mt-24`}
`

const Heading = styled.p`
   font-size: 40px;
`

const ButtonStyle = css`
   ${tw`m-5 p-2 h-12   `}
   background-color: blue;
   width: 150px;
`

const TextArea = styled.textarea`
   ${tw`border border-gray-300 h-24 mb-5 w-full`}
   background-color: ${(props: errorProps) =>
      props.error === '' ? '' : '#fed7d7'};
   outline: none;
`
const UploadImageDiv = styled.div`
   ${tw`flex `};
   width: 340px;
`

const UploadImageIcon = styled.img`
   ${tw`mr-2`}
`

const UploadImageTag = styled.img`
   width: 50px;
   border: 1px solid gray;
`

const FormSideDiv = styled.div`
   ${tw`w-1/2 `}
`
const AddResourceMainDiv = styled.div`
   ${tw``}
`

const InputHeading = styled.div`
   ${tw`text-gray-600 mb-2`}
`

export {
   AddFormMainDiv,
   FormDiv,
   ImageDiv,
   Image,
   FieldsDiv,
   Heading,
   ButtonStyle,
   TextArea,
   UploadImageDiv,
   UploadImageIcon,
   UploadImageTag,
   FormSideDiv,
   AddResourceMainDiv,
   InputHeading
}
