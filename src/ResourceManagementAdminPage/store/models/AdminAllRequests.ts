import { observable } from 'mobx'

class AdminAllRequestsModel {
   @observable userName: string
   @observable resource: string
   @observable item: string
   @observable accessLevel: string
   @observable DueDateTime: string
   @observable requestId: number
   constructor(props) {
      ;(this.userName = props.user_name),
         (this.resource = props.resource),
         (this.item = props.item),
         (this.accessLevel = props.access_level),
         (this.DueDateTime = props.due_date_time),
         (this.requestId = props.request_id)
   }
}

export default AdminAllRequestsModel
