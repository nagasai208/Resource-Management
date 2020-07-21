import styled from '@emotion/styled'
import tw from 'tailwind.macro'

type PrimarySignInButtonProps = {
   apiStatus: number
}

export const PrimarySignInButton = styled.button`
   opacity: ${(props: PrimarySignInButtonProps) =>
      props.apiStatus === 100 ? 0.7 : ''};
   ${tw`w-full h-8 mt-4 text-white flex justify-center items-center rounded focus:outline-none`};
   background: 'blue';
   font-family: Rubik;
   font-size: 14px;
   font-weight: 800;
`
