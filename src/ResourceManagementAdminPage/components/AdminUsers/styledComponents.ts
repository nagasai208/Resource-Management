import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const AllUsersMainDiv = styled.div`
   ${tw` min-h-screen `}
`

const SreachDiv = styled.div`
   ${tw`mt-24 ml-32 mr-32 flex justify-between items-center `}
`
const FilterAndSortDiv = styled.div`
   ${tw` flex `}
`

const SortingDivs = styled.div`
   ${tw`flex m-2`}
`

const Names = styled.div`
   ${tw`ml-1`}
`
const TableHeading = styled.div`
   ${tw`border flex justify-between p-2`}
`

const TotalTableDiv = styled.div`
   ${tw`ml-32 mr-32 mt-10 border-gray-500`}
`

const EachDataDiv = styled.div`
   ${tw`border border-gray-500 flex justify-between h-16 p-2`}
`

const Image = styled.img`
   ${tw`ml-1 mr-1`}
   width: 32px;
   height: 32px;
`
const UserDiv = styled.div`
   ${tw` flex items-center`}
`
const PaginationDiv = styled.div`
   ${tw`flex justify-end mt-3`}
`
export {
   AllUsersMainDiv,
   SreachDiv,
   FilterAndSortDiv,
   SortingDivs,
   Names,
   TableHeading,
   TotalTableDiv,
   EachDataDiv,
   Image,
   UserDiv,
   PaginationDiv
}
