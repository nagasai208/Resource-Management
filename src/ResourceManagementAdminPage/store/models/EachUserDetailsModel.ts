import { observable } from 'mobx'

class EachUserDetailsModel {
   @observable name
   @observable department
   @observable jobRole
   @observable profileUrl
   constructor(props) {
      this.name = props.name
      this.department = props.department
      this.jobRole = props.job_role
      this.profileUrl = props.profile_url
   }
}
export default EachUserDetailsModel
