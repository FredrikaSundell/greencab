import LinkButton from './buttons/LinkButton'
import CancelButton from './buttons/CancelButton'
import Map from './map/Map'
import Card from './card/Card'

function Cancel() {
  return (
    <>
      <div className="map-container-in-search">
        <Map directions={{ from: 'Stockholm', to: 'Uppsala' }} />
      </div>
      <div className="landing-info">
        <Card>
          <div className="landing-info">
            <h1>Är du säker på att du vill avboka din resa?</h1>
          </div>
          <div className="cancel-ride-button">
            <CancelButton to="/Search">Avboka och boka en ny resa</CancelButton>
          </div>
          <div className="link-button-choose">
            <LinkButton to="/search">Avboka inte resan</LinkButton>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Cancel
