import React, { Component } from 'react'
import { observable } from 'mobx'

class ResourceItemsModel {
   @observable itemName
   @observable link
   @observable description
   @observable itemId
   constructor(props) {
      this.itemName = props.item_name
      this.link = props.item_link
      this.description = props.description
      this.itemId = props.item_id
   }
}

export default ResourceItemsModel
