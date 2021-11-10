import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Map from './map/Map'
import Card from './card/Card'

function Cancel() {
  return (
    <div>
      <div className="map-container-in-search">
        <Map directions={{ from: 'Stockholm', to: 'Uppsala' }} />
      </div>
      <div className="landing-info">
        <Card>
          <h1>Är du säker på att du vill avboka din resa?</h1>
          <div>
            <LinkButtonBack to="/confirm">
              Jag vill inte avboka min resa
            </LinkButtonBack>
          </div>
          <div className="link-button-choose">
            <LinkButton to="/search">Avboka och boka en ny resa</LinkButton>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Cancel
