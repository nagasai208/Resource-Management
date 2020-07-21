import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
const HeaderMainDiv = styled.div`
   ${tw`flex justify-between p-5  shadow-md `}
`

const Image = styled.img`
   ${tw` self-end`}
   width: 48px;
   height: 48px;
   object-fit: contain;
`

const ButtonStyles = css`
   background-color: blue;
   width: 100px;
   margin-left: 5px;
   height: 40px;
   font-size: 18px;
   margin-right: 50px;
`

const ImageDiv = styled.div`
   ${tw`flex  items-center justify-between  mr-2`}
`

const ButtonMainDiv = styled.div`
   ${tw`flex  flex justify-center m-5`}
`

const AdminButtonStyles = css`
   background-color: blue;
   width: 200px;
   margin-left: 5px;
   height: 40px;
   font-size: 18px;
`
export { HeaderMainDiv, Image, ButtonStyles, ImageDiv,ButtonMainDiv ,AdminButtonStyles}
