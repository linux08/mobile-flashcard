import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Home from './components/Home.js'
import AddCard from './components/AddCard.js'
import AddDeck from './components/AddDeck.js'
import Deck from './components/Deck.js'
import Question from './components/Question.js'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { AsyncStorage } from 'react-native'
import { setLocalNotification } from './utils/helpers'

const Tabs = TabNavigator({
  Decks: {
    screen: Home,
  },
  AddDeck: {
    screen: AddDeck,
  },
});

const RootTabs = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      headerTitle: null,
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTitle: 'Add Card',
    }
  },
  Deck: {
    screen: Deck
  },
  Question: {
    screen: Question,
    navigationOptions: {
      headerTitle: 'Quiz',
    }
  }

})

const middewares = [
  // Add other middleware on this line...

  // thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  thunkMiddleware, logger
]

const store = createStore(reducer, compose(applyMiddleware(...middewares)))

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RootTabs />

        </View>
      </Provider >
    )
  }
}


