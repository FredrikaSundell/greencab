import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Input from './Input'
import DateTime from './dateTime/DateTime'
import { useState } from 'react'

const Search = () => {
  const [fromInput, setFromInput] = useState('')
  const [toInput, setToInput] = useState('')

  return (
    <div className="search">
      <div>
        <LinkButtonBack to="/">LandingPage</LinkButtonBack>
      </div>
      <div className="input-wrapper">
        <Input
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
        <Input value={toInput} onChange={(e) => setToInput(e.target.value)} />
      </div>
      <div className="time-buttons">
        <button>X</button>
        <button>X</button>
        <button>X</button>
      </div>
      <div className="time-and-date">
        <DateTime />
      </div>
      <div className="map-img">
        <p>KARTA</p>
      </div>
      <div className="link-button-choose">
        <LinkButton to="/choose">Choose</LinkButton>
      </div>
    </div>
  )
}

export default Search
