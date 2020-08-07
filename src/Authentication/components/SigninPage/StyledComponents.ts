import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

const Maindiv = styled.div`
   ${tw`w-full flex justify-center  items-center min-h-screen `}
   background-color: #f1f7ff;
`
const SignupMainDiv = styled.div`
   ${tw`  flex flex-col items-center  w-1/4 p-10 `};
   border-radius: 8px;
   background-color: #ffffff;
`

const Heading = styled.p`
   ${tw`text-center mb-0`};
   height: 80px;
   font-family: Rubik;
   font-size: 32px;
`

const Image = styled.img``

const ButtonStyles = css`
   ${tw`w-1/2 text-xl`}
   background-color: blue;
   height: 40px;
`

const HaveAnAccount = styled.p`
   ${tw`text-xl mt-2 `}
`

const HaveAccont = styled.div`
   ${tw`flex mt-6 ml-12 `}
`

const Login = styled.p`
   ${tw`text-xl text-blue-500 ml-1 `}
`

const UserName = styled.p`
   ${tw`text-sm text-gray-500`}
`
const Password = styled.p`
   ${tw`text-sm text-gray-500   `}
`
const InputDiv = styled.div`
   ${tw` w-1/2 `}
`
export {
   SignupMainDiv,
   Maindiv,
   Heading,
   ButtonStyles,
   Image,
   HaveAnAccount,
   HaveAccont,
   Login,
   UserName,
   Password,
   InputDiv
}
