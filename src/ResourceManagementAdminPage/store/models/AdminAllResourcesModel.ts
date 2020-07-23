import { observable } from 'mobx'

class AdminAllResourcesModel {
   @observable resourceName
   @observable resourceLink
   @observable description
   @observable resourceLogo
   @observable serviceName
   resourceId
   constructor(props) {
      this.resourceName = props.resource_name
      this.resourceLink = props.resource_link
      this.description = props.description
      this.resourceLogo = props.resource_logo
      this.resourceId = props.resource_id
      this.serviceName = props.service_name
   }
}
export default AdminAllResourcesModel
