import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Common/components/HomePage'
import { Provider } from 'mobx-react'
import Page1 from './Common/components/Page1'
import './App.css'

const App = () => {
   return (
      <Provider>
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               <Route exact path='/page-1'>
                  <Page1 />
               </Route>
               <Route path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      </Provider>
   )
}

export default App
