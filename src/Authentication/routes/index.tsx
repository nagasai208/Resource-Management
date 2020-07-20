import React from 'react'
import { USER_SIGNIN, USER_SIGNUP } from '../constants/NavigationConstants'
import SigninPageRoute from './SigninPageRoute/SigninPageRoute'
import SignupPageRoute from './SignupPageRoute/SignupPageRoute'
import { Route } from 'react-router-dom'

const authenticationRoutes = [
   <Route exact path={USER_SIGNIN} component={SigninPageRoute} />,
   <Route exact path={USER_SIGNUP} component={SignupPageRoute} />
]

export default authenticationRoutes
