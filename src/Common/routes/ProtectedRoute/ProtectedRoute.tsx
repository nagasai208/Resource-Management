import React from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect, Route } from 'react-router-dom'
const ProtectedRoute = inject('authStore')(
   observer(({ component: Component, path, authStore, ...rest }) => {
      const { accessToken } = authStore
      return (
         <Route
            {...rest}
            render={props =>
               accessToken !== undefined ? (
                  <Component />
               ) : (
                  <Redirect
                     to={{
                        pathname: '/signin'
                     }}
                  />
               )
            }
         />
      )
   })
)
export { ProtectedRoute }
