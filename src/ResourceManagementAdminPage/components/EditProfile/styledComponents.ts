import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

const EditProfileMainDiv = styled.div`
   ${tw`m-24 flex `}
`
const InputTag = styled.input`
   ${tw`mt-10`}
`
const ImageDiv = styled.div`
   ${tw`flex flex-col items-center justify-center w-1/4 `}
`

const InputHeading = styled.p`
   ${tw`text-sm text-gray-500 m-0`}
`
const InputUserDetailsTag = styled.input`
   ${tw` h-10 w-64 mt-2 mb-5 border border-gray-500 outline-none	 `}
`

const GenderSelectTag = styled.select`
   ${tw`mt-2 mb-5 h-10 w-64 border border-gray-500 text-sm `}
`
const Option = styled.option`
   ${tw`text-sm`}
`
const UserDataDiv = styled.div`
   ${tw`flex w-full m-5 `}
`
const UserDataRightDiv = styled.div`
   ${tw`flex flex-col w-1/2`}
`

const UserDataLeftDiv = styled.div`
   ${tw`flex flex-col w-1/2 m-5`}
`
const UpdateButton = css`
   ${tw`m-2`}
   width: 100px;
   height: 40px;
   background-color: #0b69ff;
`
const ChangePassword = css`
   ${tw`m-2`}
   width: 200px;
   height: 40px;
   background-color: #00b2ca;
`
const Logout = css`
   ${tw` border border-600-gray m-2`}
   width: 100px;
   height: 40px;
   color: black;
   background-color: #ffffff;
`
const ButtonDiv = styled.div`
   ${tw`flex`}
`
export {
   EditProfileMainDiv,
   InputTag,
   ImageDiv,
   InputHeading,
   InputUserDetailsTag,
   GenderSelectTag,
   Option,
   UserDataDiv,
   UserDataRightDiv,
   UserDataLeftDiv,
   UpdateButton,
   ButtonDiv,
   ChangePassword,
   Logout
}
