import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
const HeaderMainDiv = styled.div`
   ${tw`flex justify-between p-5  shadow-md h-24 `} /* position:sticky;
   top: 0;
   width: 100%;
   z-index: 10; */
`

const Image = styled.img`
   ${tw` self-end`}
   width: 48px;
   height: 48px;
   object-fit: contain;
`

const ButtonStyles = css`
   background-color: #0b69ff;
   width: 100px;
   margin-left: 5px;
   height: 40px;
   font-size: 18px;
   margin-right: 50px;
`

const ImageDiv = styled.div`
   ${tw`flex  items-center justify-between  mr-24`}
`

export { HeaderMainDiv, Image, ButtonStyles, ImageDiv }
