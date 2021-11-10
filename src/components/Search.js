import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Input from './input/Input'
import DateTime from './dateTime/DateTime'
import { useState } from 'react'
import Map from './map/Map'

const Search = () => {
  const [fromInput, setFromInput] = useState('')
  const [toInput, setToInput] = useState('')
  const [directions, setDirections] = useState({
    from: '',
    to: '',
  })

  const handleSearch = () => {
    setDirections({ from: fromInput, to: toInput })
  }

  return (
    <div className="search">
      <div>
        <LinkButtonBack to="/">LandingPage</LinkButtonBack>
      </div>
      <div className="input-wrapper">
        <Input
          placeHolder="Åka från.."
          value={fromInput}
          onChange={(e) => setFromInput(e.target.value)}
        />
        <button
          className="location-button"
          onClick={() => {
            console.log(fromInput, toInput)
          }}
        >
          X
        </button>
      </div>
      <div className="input-wrapper input-wrapper-to">
        <Input
          placeHolder="Åka till.."
          value={toInput}
          onChange={(e) => setToInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSearch}>SÖK</button>
      </div>
      <div className="time-buttons">
        <button>Åka nu</button>
        <button>Avgång</button>
        <button>Ankomst</button>
      </div>
      <div className="time-and-date">
        <DateTime />
      </div>
      <div className="map-container">
        <Map directions={directions} />
      </div>
      <div className="link-button-choose">
        <LinkButton to="/choose">Choose</LinkButton>
      </div>
    </div>
  )
}

export default Search
