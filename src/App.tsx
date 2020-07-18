import React , { lazy ,Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BasicLayOut from '../src/component/BasicLayout';
import Routes from './config/routes'

const Discovery = lazy( ()=> import('../src/pages/Discovery'))
function App() {
  return (
    <BrowserRouter>
        <BasicLayOut>
          <Suspense fallback={ null }>
            <Switch>
              <Route path={Routes.DISCOVERY} component={Discovery} />
            </Switch>
          </Suspense>
        </BasicLayOut> 
      </BrowserRouter>
  )
}

export default App;
