import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  isChildSeat: false,
  isAnimal: false,
  isHandicapFriendly: false,
}

const { useGlobalState, getGlobalState } = createGlobalState(initialState)
export { useGlobalState, getGlobalState }
