import LinkButton from './buttons/LinkButton'
import Input from './input/Input'
import DateTime from './dateTime/DateTime'
import { useState } from 'react'
import Map from './map/Map'
import LinkButtonBack from './buttons/LinkButtonBack'
import { ReactComponent as Back } from '../assets/Back.svg'

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
        <LinkButtonBack to="/">
          <Back className="back-button" />
        </LinkButtonBack>
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
