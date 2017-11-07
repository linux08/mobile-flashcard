import { AsyncStorage } from 'react-native'


const key = 'Flashcard:Liin'


export function addCardToDeck(title, data) {
    return AsyncStorage.getItem(key)
        .then((result) => {
            const deck = JSON.parse(result)
            deck[title].questions.push(data)
            AsyncStorage.setItem(key, JSON.stringify(deck))
            return JSON.parse(result)
        })
}

export function removeDeck(deck) {
    return AsyncStorage.getItem(key)
        .then((result) => {
            const data = JSON.parse(result)
            data[deck.title] = undefined
            delete data[deck.title]
            AsyncStorage.setItem(key, JSON.stringify(data))
        })

}

export function clearDeck() {

    AsyncStorage.removeItem(key)
        .then((er) => {
        });
}


export function getDecks() {
    return AsyncStorage.getItem(key)
        .then((results) => {
            return JSON.parse(results)
        })
}

export function getDeck() {
    AsyncStorage.setItem(key)
        .then((result) => {

        })
}

export function saveDeckTitle(data) {


    let a = {
        [data]: {
            title: data,
            questions: []
        }
    }
    return AsyncStorage.mergeItem(key, JSON.stringify(a))
}


