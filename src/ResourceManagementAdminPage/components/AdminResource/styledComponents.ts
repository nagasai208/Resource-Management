import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const AdminResourcesMainDiv = styled.div`
   ${tw` min-h-screen `}
`
const SreachDiv = styled.div`
   ${tw`mt-24 ml-32 m`}
`

const EachResourcesDiv = styled.div`
   ${tw` w-1/4  border border-black-800 m-5 p-10`}
`
const AllResourcesDiv = styled.div`
   ${tw`flex flex-wrap justify-between  `}
`

const EachImageDiv = styled.div`
   ${tw`flex ml-6`}
`
const Heading = styled.p`
   ${tw`m-0 text-2xl mb-1`}
`

const HeadingDiv = styled.div`
   ${tw`m-5`}
`
const CloudName = styled.p`
   ${tw`m-0 text-gray-500`}
`

const Link = styled.a`
   ${tw``}
`
const Description = styled.p`
   ${tw`text-gray-500 text-lg`}
`
const EachDivData = styled.div`
   ${tw` text-lg`}
`
const PaginationDiv = styled.div`
   ${tw`mt-5 flex justify-end `}
`
const ResourcesTotalDiv = styled.div`
   ${tw` ml-32 mr-32`}
`
export {
   AdminResourcesMainDiv,
   SreachDiv,
   EachResourcesDiv,
   AllResourcesDiv,
   EachImageDiv,
   Heading,
   HeadingDiv,
   CloudName,
   Link,
   Description,
   EachDivData,
   PaginationDiv,
   ResourcesTotalDiv
}
