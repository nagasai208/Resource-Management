import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import HomePage from './Common/components/HomePage'
import resourceManagementRoutes from './ResourceManagementAdminPage/routes'
import authenticationRoutes from './Authentication/routes'
import stores from './Common/stores'
import './App.css'

const App = () => {
   return (
      <Provider {...stores}>
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               {authenticationRoutes}
               {resourceManagementRoutes}
               <Route path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      </Provider>
   )
}

export default App
