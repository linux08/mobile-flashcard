import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Home from './components/Home.js'
import AddCard from './components/AddCard.js'
import AddDeck from './components/AddDeck.js'
import Deck from './components/Deck.js'
import Question from './components/Question.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

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
    screen: AddDeck
  },
  Card: {
    screen: AddCard
  },
  Deck: {
    screen: Deck
  },
  Question: {
    screen: Question
  }

})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <RootTabs />

        </View>
      </Provider >
    )
  }
}


