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
   ${tw`mt-2`}
`

const ButtonDiv = styled.div`
   ${tw` mt-5 flex `}
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

const TotalTableDiv = styled.div`
   ${tw` ml-64 mr-64 mt-16 `}
`

const EachResourceMainDiv = styled.div`
   ${tw`bg-gray-100 border min-h-screen `}
`

const ItemsHeading = styled.p`
   ${tw`text-2xl`}
`

const HeadingDiv = styled.div`
   ${tw`flex justify-between`}
`
const FilterAndSearchDiv = styled.div`
   ${tw`flex items-center  w-2/3 justify-end `}
`
const SortDiv = styled.div`
   ${tw`flex ml-2   w-24`}
`

const Table = styled.div`
   ${tw` mt-5`}
`
const TableHeader = styled.div`
   ${tw`border flex justify-between p-2 items-center`}
`
const ItemsTable = styled.div`
   ${tw`border`}
`
const EachRow = styled.div`
   ${tw`flex justify-between p-5 border border-gray-400`}
`

const PaginationDiv = styled.div`
   ${tw`flex justify-end mt-5 h-6`}
`

const Checkbox = styled.input`
   ${tw`w-12 h-6 `}
`

const TableTitle = styled.p`
   ${tw`w-1/4`}
`
const Description = styled.p`
   ${tw`w-1/4`}
`
const Link = styled.a`
   ${tw`w-1/4`}
`
const FooterDiv = styled.div`
   ${tw`flex justify-between mb-10 `}
`
const AddButtonStyle = css`
   ${tw`ml-5 mr-5`}
   width: 100px;
   height: 40px;
   background-color: #2dca73;
`
const AddButtonStyleDisabled = css`
   ${tw`ml-5 mr-5`}
   width: 100px;
   height: 40px;
   background-color: #d7dfe9;
`
const DeleteButtonDisabled = css`
   ${tw` cursor-not-allowed`}
   width: 100px;
   height: 40px;
   background-color: #d7dfe9;
`
export {
   ResourceLogo,
   ResourceMainDiv,
   ResourceDetailsDiv,
   ResourceDetails,
   Decription,
   ButtonStyles,
   ButtonDiv,
   DeleteButtonStyles,
   TotalTableDiv,
   EachResourceMainDiv,
   ItemsHeading,
   HeadingDiv,
   FilterAndSearchDiv,
   SortDiv,
   Table,
   TableHeader,
   ItemsTable,
   EachRow,
   PaginationDiv,
   Checkbox,
   TableTitle,
   Description,
   Link,
   FooterDiv,
   AddButtonStyle,
   DeleteButtonDisabled,
   AddButtonStyleDisabled
}
