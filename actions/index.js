import * as API from '../utils/api'


export const receiveDecks = (decks) => {
    return {
        type: 'RECEIVE_DECK',
        decks
    }
}

export const removeDeck = (title, data) => {
    return {
        type: 'DELETE_DECK',
        title,
        data
    }
}


export const addCardToDeck = (title, data) => {
    return {
        type: 'ADD_CARD_TO_DECK',
        title,
        data
    }
}


export const deleteDeck = (title, data) => {
    return function (dispatch) {
        return API.removeDeck(data)
            .then((resp) => {
                dispatch(removeDeck(title, data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}



export const addCard = (title, data) => {
    return function (dispatch) {
        return API.addCardToDeck(title, data)
            .then((resp) => {
                dispatch(addCardToDeck(title, data))
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
