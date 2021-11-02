import LinkButton from './buttons/LinkButton'
import Map from './map/Map'

function Cart() {
  return (
    <div>
      <div className="map-container-in-cart">
        <Map />
      </div>
      <h1>info om bokad resa</h1>
      <div className="link-button-choose">
        <LinkButton to="/cancel">Avboka resa</LinkButton>
      </div>
    </div>
  )
}

export default Cart
