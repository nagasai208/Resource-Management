import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
const isActive = css`
   width: 220px;
   height: 40px;
   font-size: 18px;
   border-radius: 0px;
   background-color: #0b69ff;
   color: white;
`

const isInActive = css`
   ${tw`bg-gray-300 border border-gray-400`}
   width: 220px;
   height: 40px;
   font-size: 18px;
   border-radius: 0px;

   color: black;
`

const ButtonMainDiv = styled.div`
   ${tw`flex  flex justify-center m-2 mt-16 `}
`

export { isActive, ButtonMainDiv, isInActive }
