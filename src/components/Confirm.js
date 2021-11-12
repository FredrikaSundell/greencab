import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Map from './map/Map'
import Card from './card/Card'
import { getGlobalState } from '../store'
import { ReactComponent as Back } from '../assets/Back.svg'

function Confirm() {
  const isChildSeat = getGlobalState('isChildSeat')

  console.log(444, isChildSeat)

  return (
    <div>
      <div className="map-container-in-search">
        <Map directions={{ from: 'Stockholm', to: 'Uppsala' }} />
      </div>
      <div className="landing-info">
        <Card>
          <div>Bild på vald bil</div>
          <h1>Rubrik på bil</h1>
          <h2>info om bil, resa, rabatt och total kostnad</h2>
          <div>
            <LinkButtonBack to="/Choose">
              <Back className="back-button" />
            </LinkButtonBack>
          </div>
        </Card>
      </div>
      <div className="link-button-choose">
        <LinkButton to="/cart">Bekräfta bokning</LinkButton>
      </div>
    </div>
  )
}

export default Confirm
