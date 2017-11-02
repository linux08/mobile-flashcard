import { AsyncStorage } from 'react-native'


const key = 'Flashcard:Lin'


export function addCardToDeck(title, data) {
    return AsyncStorage.getItem(key)
        .then((result) => {
            const deck = JSON.parse(result)
            deck[title].questions.push(data)
            AsyncStorage.setItem(key, JSON.stringify(deck))
            return JSON.parse(result)
        })
}

export function removeDeck() {

    return AsyncStorage.getItem(key)
        .then((result) => {
            const deck = JSON.parse(result)
            deck[key] = undefined
            delete data[key]
            AsyncStorage.setItem(key, JSON.stringify(deck))
            return JSON.parse(result)
        })
    // AsyncStorage.removeItem(key)
    //     .then((er) => {
    //         console.log(er)
    //         // keys k1 & k2 removed, if they existed
    //         // do most stuff after removal (if you want)
    //         console.log('successfully deleted')
    //     });
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

    let b = data
    let a = {
        [data]: {
            title: data,
            questions: []
        }
    }
    return AsyncStorage.mergeItem(key, JSON.stringify(a))

    // return AsyncStorage.setItem(key, a)
    // .then((result) =>{
    //     console.log(result)
    //     return JSON.parse(result)
    // })
}






// getDecks: return all of the decks along with their titles, questions, and answers. 
// getDeck: take in a single id argument and return the deck associated with that id. 
// saveDeckTitle: take in a single title argument and add it to the decks. 
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.