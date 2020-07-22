import { RESOURCE_MANAGEMENT_ADDRESOURCES, RESOURCE_MANAGEMENT_ADD_ITEM } from '../constants/NavigationConstants'

export const gotoAddResources = history => {
   history.push(RESOURCE_MANAGEMENT_ADDRESOURCES)
}

export const gotoGoBack = history => {
   history.goBack()
}


export const gotoAddItemRoute = history => {
   history.push(RESOURCE_MANAGEMENT_ADD_ITEM)
}