import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Map from './map/Map'
import Card from './Card'

function Choose() {
  return (
    <div>
      <div className="map-container-in-search">
        <Map />
      </div>
      <div className="landing-info">
        <Card>
          <h1>Välj bil och tillval</h1>
          <div>
            <LinkButtonBack to="/search">Ångra desination</LinkButtonBack>
          </div>
        </Card>
      </div>
      <div className="link-button-choose">
        <LinkButton to="/confirm">Se bokning</LinkButton>
      </div>
    </div>
  )
}

export default Choose
