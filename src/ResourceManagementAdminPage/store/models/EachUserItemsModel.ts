import { observable } from 'mobx'

class EachUserItemsModel {
   @observable resourceName
   @observable itemName
   @observable accessLevel
   @observable description
   @observable itemLink
   @observable itemId
   constructor(props) {
      this.resourceName = props.resource_name
      this.itemName = props.item_name
      this.accessLevel = props.access_level
      this.description = props.description
      this.itemLink = props.item_link
      this.itemId = props.item_link
   }
}

export default EachUserItemsModel
