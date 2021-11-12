import LinkButton from './buttons/LinkButton'
import Map from './map/Map'

function Cart() {
  return (
    <div>
      <div className="map-container-in-cart">
        <Map directions={{ from: 'Stockholm', to: 'Uppsala' }} />
      </div>
      <h1>info om när bil anländer</h1>
      <div className="link-button-choose">
        <LinkButton to="/cancel">Avboka resa</LinkButton>
      </div>
    </div>
  )
}

export default Cart
