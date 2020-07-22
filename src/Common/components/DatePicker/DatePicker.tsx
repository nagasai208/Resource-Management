import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
@observer
class DatePickerComponent extends React.Component {
   @observable date

   handleChange = date => {
      this.date = date
   }

   render() {
      return (
         <DatePicker
            className={'border border-gray-500 w-64 h-12 mb-4'}
            selected={this.date}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={15}
            timeCaption='time'
            dateFormat='MMMM d, yyyy h:mm aa'
            placeholderText='Select date and time'
         />
      )
   }
}

export default DatePickerComponent
