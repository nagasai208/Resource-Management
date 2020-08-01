import { observable } from 'mobx'

class AllUsersModel {
   @observable userName
   @observable department
   @observable jobRole
   @observable userId
   @observable userImage
   constructor(props) {
      this.userName = props.user_name
      this.department = props.department
      this.jobRole = props.job_role
      this.userId = props.user_id
      this.userImage = props.user_image
   }
}

export default AllUsersModel
