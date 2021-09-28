import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Hey from LandingPage</h1>
      <h2>blablabla</h2>
      <Router>
        <Link to="/search">
          <button className="btn">Go</button>
        </Link>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

function Search() {
  return <h2>About</h2>
}

export default LandingPage
