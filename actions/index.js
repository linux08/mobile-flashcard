import * as API from '../utils/api'


export function receiveDecks(decks) {
    return {
        type: 'RECEIVE_DECK',
        decks
    }
}

export const getDecks = () => {
    return function (dispatch) {
        API.getDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks))
            })
            .catch((err) => {
                console.log(err)
            })
    }
} 
