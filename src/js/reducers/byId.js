import * as types from '../constants/ActionTypes'
const byId = (state= {}, action) => {
  switch (action.type) {
    case types.ADD_ENTRY_SUCCESS:
    case types.FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        ...action.response.entities.entries
      }
    case types.REMOVE_ENTRY_SUCCESS:
      let nextState = { ...state }
      delete nextState[action.response.result]
      return nextState
    default:
      return state
  }
}

export default byId

export const getEntries = (state, id) => state[id]
