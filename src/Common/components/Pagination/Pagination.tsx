import React from 'react'
import { Pagination } from 'semantic-ui-react'
interface PaginationProps {
      onChangePage: (event: React.MouseEvent<HTMLAnchorElement>,data) => void
}
class PaginationComponent extends React.Component<PaginationProps> {
   render() {
        const { onChangePage } = this.props
      return (
         <Pagination
            onPageChange={onChangePage}
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={10}
         />
      )
   }
}

export default PaginationComponent
