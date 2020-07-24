import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { TextArea } from './styledComponents'
interface ReactModelProps {
   open: boolean
   cancel: (event: React.MouseEvent<HTMLElement>, data) => void
   title: string
   typeOfModel: boolean
   buttonType: string
   rejectionData?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
class ReactModel extends Component<ReactModelProps> {
   state = { open: false }
   render() {
      const {
         open,
         cancel,
         title,
         typeOfModel,
         buttonType,
         rejectionData
      } = this.props

      return (
         <div>
            <Modal size='mini' open={open} className='bg-white-800  '>
               <Modal.Header className=' text-3xl '>{title}</Modal.Header>
               {typeOfModel && (
                  <div>
                     <p>RESON FOR REJECTION</p>
                     <TextArea
                        onChange={rejectionData}
                        placeholder='enter reson'
                     />
                  </div>
               )}
               <Modal.Actions>
                  <Button onClick={cancel}>CANCEL</Button>
                  <Button negative onClick={cancel} content={buttonType} />
               </Modal.Actions>
            </Modal>
         </div>
      )
   }
}

export default ReactModel
