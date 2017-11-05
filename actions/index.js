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

export const deckIsLoading = (bool) => {
    return {
        type: 'DECK_IS_LOADING',
        isLoading: bool
    };
}


export const addCardToDeck = (title, data, resp) => {
    return {
        type: 'ADD_CARD_TO_DECK',
        title,
        data,
        resp
    }
}

export const addDeckSuccess = (title,response) => {
    return {
        type: 'ADD_DECK',
        title,
        response
    }
}

export const deleteDeck = (title, data) => {
    return function (dispatch) {
        return API.removeDeck(data)
            .then((resp) => {
                dispatch(removeDeck(title, data, resp))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


export const addDeck = (title) => {
    return function (dispatch) {
        return API.saveDeckTitle(title)
            .then((resp) => {
                console.log(resp)
                dispatch(addDeckSuccess(title,resp))
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
                dispatch(addCardToDeck(title, data, resp))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getDecks = () => {
    return function (dispatch) {
        return API.getDecks()
            .then((response) => {
                dispatch(deckIsLoading(false))
                return response
            })
            .then((response) => {
                dispatch(receiveDecks(response))
                dispatch(deckIsLoading(true))
            })
            .catch((err) => {
                console.log(err)
            })
    }
} 
