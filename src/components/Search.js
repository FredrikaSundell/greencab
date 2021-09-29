import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'

const Search = () => {
  return (
    <div className="search">
      <LinkButtonBack to="/">LandingPage</LinkButtonBack>
      <h1>Hey from SearchPage</h1>
      <h2>blablabla</h2>
      <LinkButton to="/choose">Choose</LinkButton>
    </div>
  )
}

export default Search
