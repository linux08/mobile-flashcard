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



export function addCardToDeck(title,data) {
    return {
        type: 'ADD_CARD_TO_DECK',
        title,
        data
    }
}


export const addCard = (title,data) => {
    return function (dispatch) {
        return API.addCardToDeck(title,data)
            .then((resp) => {
               dispatch(addCardToDeck(title,data))
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
