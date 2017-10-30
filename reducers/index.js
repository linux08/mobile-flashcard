

function entries(state = {}, action) {
  switch (action.type) {

    case 'RECEIVE_DECK':
      return action.decks

    default:
      return state
  }
}

export default entries

