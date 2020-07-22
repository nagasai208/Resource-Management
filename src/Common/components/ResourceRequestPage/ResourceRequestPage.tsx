import React, { Component } from 'react'
import GobackComponent from '../GobackComponent/GobackComponent'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Input from '../Input'
import {
   RequestPageMainDiv,
   SelectTag,
   FormMainDiv,
   FormDiv,
   TextArea,
   InputDiv
} from './styledComponents'
import DatePickerComponent from "../DatePicker/DatePicker"

@observer
class ResourceRequestPage extends Component {
   @observable name = 'Requests Page'
   @observable value = ''
   @observable options = ['Product Desaign', 'Engineering', 'Marketing']
   onClickGoback = event => {
      this.value = event.target.value
   }
   render() {
      return (
         <RequestPageMainDiv>
            <GobackComponent
               onClickGoback={this.onClickGoback}
               name={this.name}
            />
            <FormMainDiv>
               <FormDiv>
                  <InputDiv>
                     <p>RESOURCE NAME</p>
                     <Input
                        onChange={this.onClickGoback}
                        type='text'
                        placeHolder='resource name'
                        value={this.value}
                        width='100'
                        errorMessage=''
                     />
                  </InputDiv>
                  <InputDiv>
                     <p>ITEM NAME</p>
                     <Input
                        onChange={this.onClickGoback}
                        type='text'
                        placeHolder='resource name'
                        value={this.value}
                        width='100'
                        errorMessage=''
                     />
                  </InputDiv>
                  <InputDiv>
                     <p>ACCESS LEVEL</p>
                     <SelectTag>
                        {this.options.map(value => {
                           return <option>{value}</option>
                        })}
                     </SelectTag>
                  </InputDiv>
                  <InputDiv>
                     <p>REMARK</p>
                     <TextArea />
                  </InputDiv>
               </FormDiv>
               <FormDiv>
                  <InputDiv>
                     <p>RESON FOR ACCESS</p>
                     <Input
                        onChange={this.onClickGoback}
                        type='text'
                        placeHolder='resource name'
                        value={this.value}
                        width='100'
                        errorMessage=''
                     />
                  </InputDiv>
                  <InputDiv>
                      <DatePickerComponent />
                  </InputDiv>
                  <InputDiv>
                  <p>STATUS</p>
                     <Input
                        onChange={this.onClickGoback}
                        type='text'
                        placeHolder='resource name'
                        value={this.value}
                        width='100'
                        errorMessage=''
                     />
                  </InputDiv>
               </FormDiv>
            </FormMainDiv>
         </RequestPageMainDiv>
      )
   }
}

export default ResourceRequestPage
