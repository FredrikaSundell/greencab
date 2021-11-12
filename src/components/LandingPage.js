import Card from './card/Card'
import LinkButton from './buttons/LinkButton'

import { ReactComponent as GreenCabLogo } from '../assets/GreenCabLogo.svg'

const LandingPage = () => {
  return (
    <Card>
      <div className="landing-info">
        <GreenCabLogo className="greencablogo" />
        <h1>
          Hej Viktor,
          <br /> Välkommen tillbaka!
        </h1>
        <h2>Nu kan du boka en grön taxi och få 10% rabatt på din resa.</h2>
        <div className="link-button-choose">
          <LinkButton to="/search">Search</LinkButton>
        </div>
      </div>
    </Card>
  )
}

export default LandingPage
