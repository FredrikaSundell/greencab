import Card from './Card'
import LinkButton from './buttons/LinkButton'

const LandingPage = () => {
  return (
    <Card>
      <div className="landing-info">
        <h1>Hey from LandingPage</h1>
        <h2>blablabla</h2>
        <LinkButton to="/search">Search</LinkButton>
      </div>
    </Card>
  )
}

export default LandingPage
