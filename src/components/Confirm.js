import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Map from './map/Map'
import Card from './Card'

function Confirm() {
  return (
    <div>
      <div className="map-container-in-search">
        <Map />
      </div>
      <div className="landing-info">
        <Card>
          <div>bild</div>
          <h1>GULD</h1>
          <h2>info om bil och kostnad</h2>
          <div>
            <LinkButtonBack to="/choose">Ångra bil/tillval</LinkButtonBack>
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
