import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Search from './components/Search'
import Choose from './components/Choose'
import Cart from './components/Cart'
import Confirm from './components/Confirm'
import Cancel from './components/Cancel'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cancel">
          <Cancel />
        </Route>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/choose">
          <Choose />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
