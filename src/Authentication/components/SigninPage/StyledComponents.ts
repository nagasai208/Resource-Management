import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

const Maindiv = styled.div`
   ${tw`w-full flex justify-center  items-center min-h-screen`}
   background-color: #f1f7ff;
`
const SignupMainDiv = styled.div`
   ${tw``};
   width: 536px;
   height: 687px;
   border-radius: 8px;
   background-color: #ffffff;
   padding-top: 48px;
   padding-left: 108px;
`

const Heading = styled.p`
   ${tw`text-center`};
   width: 214px;
   margin-top: 24px;
   margin-bottom: 10px;
   margin-left: 75px;
   height: 80px;
   font-family: Rubik;
   font-size: 32px;
`

const Image = styled.img`
   margin-left: 120px;
`

const ButtonStyles = css`
   background-color: blue;
   width: 320px;
   margin-left: 5px;
   height: 40px;
`

const HaveAnAccount = styled.p`
   ${tw`text-sm mt-2 `}
`

const HaveAccont = styled.div`
   ${tw`flex mt-6 ml-12 `}
`

const Login = styled.p`
   ${tw`text-sm text-blue-500 ml-1 mt-2`}
`

const UserName = styled.p`
   ${tw`text-sm text-gray-500`}
`
const Password = styled.p`
   ${tw`text-sm text-gray-500   `}
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
   Password
}
