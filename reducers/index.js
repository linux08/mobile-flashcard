

function entries(state = {}, action) {
  console.log(action.type)
  switch (action.type) {

    case 'RECEIVE_DECK':
      return action.decks

    case 'ADD_CARD_TO_DECK':
  

    var newState = state;
    newState[action.title].questions.push(action.data);
    return newState
    //let newState = state[action.title].questions.push(action.data)
   //state[action.title].questions.push(action.data)
  // // console.log('clicked add card to deck')
  //  console.log(newState)
   
  //     return {...state,newState}
    default:
      return state
  }
}

export default entries

