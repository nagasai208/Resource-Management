import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import HomePage from './Common/components/HomePage'
import resourceManagementRoutes from './ResourceManagementAdminPage/routes'
import authenticationRoutes from './Authentication/routes'
import stores from './Common/stores'
import './App.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './Common/i18n'
import LoadingView from './Common/components/common/LoadingWrapperWithFailure/LoadingView'

const App = () => {
   return (
      <Provider {...stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={<LoadingView />}>
               <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                     {authenticationRoutes}
                     {resourceManagementRoutes}
                     <Route path='/'>
                        <HomePage />
                     </Route>
                  </Switch>
               </Router>
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
}

export default App
