import {
   RESOURCE_MANAGEMENT_ADDRESOURCES,
   RESOURCE_MANAGEMENT_ADD_ITEM,
   RESOURCE_MANAGEMENT_REQUEST,
   RESOURCE_MANAGEMENT_USERS,
   RESOURCE_MANAGEMENT_RESOURCES,
   RESOURCE_MANAGEMENT_SINGLE_RESOURCE,
   RESOURSE_MANAGEMENT_UPDATE_RESOURCE
} from '../constants/NavigationConstants'

export const gotoAddResources = history => {
   history.push(RESOURCE_MANAGEMENT_ADDRESOURCES)
}

export const gotoGoBack = history => {
   history.goBack()
}

export const gotoAddItemRoute = history => {
   history.push(RESOURCE_MANAGEMENT_ADD_ITEM)
}

export const gotoAddRequests = history => {
   history.push(RESOURCE_MANAGEMENT_REQUEST)
}

export const gotoAddUsers = history => {
   history.push(RESOURCE_MANAGEMENT_USERS)
}

export const gotoResources = history => {
   history.push(RESOURCE_MANAGEMENT_RESOURCES)
}

export const gotoEachResource = (history, id) => {
   history.push(`${RESOURCE_MANAGEMENT_SINGLE_RESOURCE}/${id}`)
}

export const gotoUpdateResource = history => {
   history.push(RESOURSE_MANAGEMENT_UPDATE_RESOURCE)
}
