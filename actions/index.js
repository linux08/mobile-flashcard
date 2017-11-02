import * as API from '../utils/api'


export function receiveDecks(decks) {
    return {
        type: 'RECEIVE_DECK',
        decks
    }
}

export function loadingDecks() {
    return {
        type: 'LOADING_DECK',
    
    }
}



export function addCardToDeck(deck) {
    return {
        type: 'ADD_CARD_TO_DECK',
        deck
    }
}


export const addCard = (title,data) => {
    return function (dispatch) {
        return API.addCardToDeck(title,data)
            .then((resp) => {
               dispatch(addCardToDeck(resp))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getDecks = () => {
    return function (dispatch) {
        return API.getDecks()
            .then((resp) => {
               dispatch(receiveDecks(resp))
            })
            .catch((err) => {
                console.log(err)
            })
    }
} 
