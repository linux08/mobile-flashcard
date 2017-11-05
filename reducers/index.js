import { combineReducers } from 'redux';

function entries(state = {}, action) {
  console.log(action.type)
  switch (action.type) {

    case 'DELETE_DECK':
      let newstate = state;
      delete newstate[action.title]
      console.log(newstate)
      return newstate

    case 'RECEIVE_DECK':
      return action.decks

    case 'ADD_CARD_TO_DECK':
      let newState = state;
      newState[action.title].questions.push(action.data);
      return newState


    default:
      return state
  }
}


export function deckIsLoading(state = false, action) {
  switch (action.type) {
      case 'DECK_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export default combineReducers({
  entries,
  deckIsLoading
});



