import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Map from './map/Map'
import Card from './Card'

function Cancel() {
  return (
    <div>
      <div className="map-container-in-search">
        <Map />
      </div>
      <div className="landing-info">
        <Card>
          <h1>Är du säker på att du vill avboka din resa?</h1>
          <div>
            <LinkButtonBack to="/search">
              Jag vill inte avboka min resa
            </LinkButtonBack>
          </div>
          <div className="link-button-choose">
            <LinkButton to="/confirm">Avboka och boka en ny resa</LinkButton>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Cancel
