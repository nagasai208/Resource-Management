import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Common/components/HomePage'
import { Provider } from 'mobx-react'
import './App.css'
import authenticationRoutes from './Authentication/routes'
import stores from './Common/stores'

const App = () => {
   return (
      <Provider {...stores}>
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               {authenticationRoutes}
               <Route path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      </Provider>
   )
}

export default App
