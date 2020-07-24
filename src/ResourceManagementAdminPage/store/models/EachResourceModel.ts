import { observable } from 'mobx'

class EachResourceModel {
   @observable resourceName
   @observable resourceLink
   @observable description
   @observable resourceLogo
   @observable resourceId
   @observable serviceName
   constructor(props) {
      this.resourceName = props.resource_name
      this.resourceLink = props.resource_link
      this.description = props.description
      this.resourceId = props.resource_id
      this.serviceName = props.service_name
      this.resourceLogo = props.resource_logo
   }
}

export default EachResourceModel
