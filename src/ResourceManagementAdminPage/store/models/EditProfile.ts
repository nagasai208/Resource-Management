import { observable } from 'mobx'

class EditProfileModel {
   @observable userDepartment
   @observable userEmail
   @observable userGender
   @observable userJobRole
   @observable userLogo
   @observable userName
   constructor(props) {
      this.userDepartment = props.user_department
      this.userEmail = props.user_email
      this.userGender = props.user_gender
      this.userJobRole = props.user_job_role
      this.userLogo = props.user_logo
      this.userName = props.user_name
   }
   onChangeName = event => {
      this.userName = event.target.value
   }
   onChangeEmail = event => {
      this.userEmail = event.target.value
   }
   onChangeGender = event => {
      this.userGender = event.target.value
   }
   onChangeJobRole = event => {
      this.userJobRole = event.target.value
   }
   onChangeDepartment = event => {
      this.userDepartment = event.target.value
   }
   onChangeUserImage = event => {
      let upload = event.target.files[0]
      let img = new FileReader()
      img.readAsDataURL(upload)
      img.onload = () => {
         this.userLogo = img.result
      }
   }

}
export default EditProfileModel
