import React from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect, Route } from 'react-router-dom'
const ProtectedRoute = inject('AuthStore')(
   observer(({ component: Component, path, AuthStore, ...rest }) => {
      const { accessToken } = AuthStore
      return (
         <Route
            {...rest}
            render={props =>
               accessToken !== undefined ? (
                  <Component />
               ) : (
                  <Redirect
                     to={{
                        pathname: '/'
                     }}
                  />
               )
            }
         />
      )
   })
)
export { ProtectedRoute }
