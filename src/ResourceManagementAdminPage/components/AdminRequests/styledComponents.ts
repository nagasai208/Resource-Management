import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

const AllRequestsMainDiv = styled.div`
   ${tw` min-h-screen  `}
`

const SreachDiv = styled.div`
   ${tw`mt-24 ml-32 mr-32 `}
`
const Heading = styled.p`
   font-size: 24px;
`

const FilterAndSearchBarDiv = styled.div`
   ${tw`flex justify-between items-center     `}
`
const FilterAndSortDiv = styled.div`
   ${tw`w-2/4 flex justify-end    `}
`

const SortingDivs = styled.div`
   ${tw`flex m-2`}
`

const Names = styled.div`
   ${tw`ml-1`}
`

const AcceptButtonStyle = css`
   background-color: #0b69ff;
   width: 100px;
   height: 40px;
`

const DeleteButtonStyle = css`
   ${tw`ml-5`}
   background-color: #ff0b37;
   width: 100px;
   height: 40px;
`

const ButtonDiv = styled.div`
   ${tw`flex`}
`

const AllRequestMainDiv = styled.div`
   ${tw` ml-32 mr-32 mt-10`}
`

const TableHeading = styled.div`
   ${tw`flex justify-between h-12 border items-baseline p-5`};
`

const UserNameAndImage = styled.div`
   ${tw`flex`}
`

const UserImage = styled.img`
   width: 32px;
   height: 32px;
`

const TableRow = styled.div`
   ${tw`border flex justify-between h-16 items-center p-5  `}
`
const PaginationDiv = styled.div`
   ${tw`mt-5 flex justify-end `}
`

const CheckBox = styled.input`
   ${tw`border border-red-800 w-10 h-6`}
`

export {
   AllRequestsMainDiv,
   SreachDiv,
   Heading,
   FilterAndSearchBarDiv,
   FilterAndSortDiv,
   SortingDivs,
   Names,
   AcceptButtonStyle,
   DeleteButtonStyle,
   ButtonDiv,
   AllRequestMainDiv,
   TableHeading,
   UserNameAndImage,
   UserImage,
   TableRow,
   PaginationDiv,
   CheckBox
}
