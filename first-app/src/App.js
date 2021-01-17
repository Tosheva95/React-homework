import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage.js'
import HomePage from './components/HomePage.js'

class App extends React.Component {

  render = () => {
    return (
      <div>
        <BrowserRouter>
          <Switch>

            <Route exact path='/'>
              <RegistrationPage />
            </Route>

            <Route path='/home'>
              <HomePage />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App