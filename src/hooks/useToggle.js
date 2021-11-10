import { useState } from 'react'

function useToggle(initial = false) {
  const [isToggled, setIsToggled] = useState(initial)

  function toggle() {
    setIsToggled(!isToggled)
  }

  return [isToggled, toggle]
}

export default useToggle
