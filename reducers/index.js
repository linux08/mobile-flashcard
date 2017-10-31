

function entries(state = {}, action) {
  switch (action.type) {

    case 'RECEIVE_DECK':
      return action.decks

    case 'ADD_CARD_TO_DECK':
      return action.deck
    default:
      return state
  }
}

export default entries

