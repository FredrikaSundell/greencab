import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Input from './Input'
import { useState } from 'react'

const Search = () => {
  const [fromInput, setFromInput] = useState('')
  const [toInput, setToInput] = useState('')

  return (
    <div className="search">
      <div>
        <LinkButtonBack to="/">LandingPage</LinkButtonBack>
      </div>
      <div>
        <Input
          value={fromInput}
          onChange={(e) => setFromInput(e.target.value)}
        />
        <button
          onClick={() => {
            console.log(fromInput, toInput)
          }}
        >
          X
        </button>
      </div>
      <div>
        <Input value={toInput} onChange={(e) => setToInput(e.target.value)} />
      </div>
      <h1>Hey from SearchPage</h1>
      <h2>blablabla</h2>
      <LinkButton to="/choose">Choose</LinkButton>
    </div>
  )
}

export default Search
