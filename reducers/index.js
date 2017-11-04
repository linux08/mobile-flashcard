

function entries(state = {}, action) {
  console.log(action.type)
  switch (action.type) {

    case 'RECEIVE_DECK':
      return { ...state, ...action.decks}

    case 'ADD_CARD_TO_DECK':
    console.log('add card to deck')
    // console.log(action.data)
    // console.log(action.title)
   let newState = state
   newState[action.title].questions.push(action.data)
   
      return newState
    default:
      return state
  }
}

export default entries

