import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

const ResourceLogo = styled.img`
   width: 100px;
   height: 100px;
`
const ResourceMainDiv = styled.div`
   ${tw` ml-64 mr-64 mt-16 w-1/4  `}
`

const ResourceDetailsDiv = styled.div`
   ${tw`flex`}
`

const ResourceDetails = styled.div`
   ${tw`m-2`}
`

const Decription = styled.p`
   ${tw`mt-5`}
`

const ButtonDiv = styled.div`
   ${tw` mt-12 flex`}
`
const ButtonStyles = css`
   ${tw`ml-5 mr-5`}
   width: 100px;
   height: 40px;
   background-color: #0b69ff;
`

const DeleteButtonStyles = css`
   ${tw``}
   width: 100px;
   height: 40px;
   background-color: #ff0b37;
`
export {
   ResourceLogo,
   ResourceMainDiv,
   ResourceDetailsDiv,
   ResourceDetails,
   Decription,
   ButtonStyles,
   ButtonDiv,
   DeleteButtonStyles
}
