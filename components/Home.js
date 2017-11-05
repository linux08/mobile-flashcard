import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, Button, FlatList, TouchableOpacity, Animated } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Swipeout from 'react-native-swipeout'
import { connect } from 'react-redux'
import * as API from '../utils/api'
import { getDecks, deleteDeck } from '../actions/index'

class Home extends Component {
    state = {
        loaded: false,
        fadeAnim: new Animated.Value(1),
        animating: true

    }
    componentDidMount() {
        this.props.getDecks()
        //  API.clearDeck()
    }

    pressDeck = () => {
        this.props.navigation.navigate('Deck', { name: obj.item.title, length: obj.item.amount })
    }

    _keyExtractor = (item, index) => item.id;

    onRemove = (obj) => {
        this.props.deleteDeck(obj.item.title, obj.item)
        // API.removeDeck(obj.item)
    }

    renderList = (obj) => {
        var swipeoutBtns = [
            {

                text: 'Delete',
                backgroundColor: 'red',
                onPress: () => {
                    this.onRemove(obj);
                }
            }
        ]

        let { fadeAnim } = this.state

        return (

            <Swipeout right={swipeoutBtns} autoClose backgroundColor="#faebd7" >

                <TouchableOpacity style={[styles.container, { backgroundColor: '#FFF' }]}
                    onPress={() => this.props.navigation.navigate('Deck', { name: obj.item.title, length: obj.item.amount })}>
                    <Animated.View style={{ ...this.props.style, opacity: fadeAnim }}>
                        <Text style={styles.text}>  {obj.item.title} </Text>
                        <Text style={[styles.text, { fontSize: 12, marginLeft: 40, marginRight: 40 }]}> {obj.item.amount} </Text>
                    </Animated.View>

                </TouchableOpacity>
            </Swipeout>

        )
    }



    render() {
        let a = this.props.deck
        console.log(a)
        let data
        if (a === null) {
            data = []
        }
        else {
            data = Object.keys(a).reduce((pre, item) => {
                pre.push({
                    id: Math.random(),
                    title: a[item].title,
                    amount: a[item].questions.length
                })
                return pre
            }, [])
            console.log(data)
        }

        if (this.props.isLoading === false) {


            const animating = this.state.animating
            return (
                <View style={styles.spinner}>
                    <ActivityIndicator
                        animating={animating}
                        color='#bc2b78'
                        size="large"
                        style={styles.activityIndicator} />
                </View>
            )
        }

        else {
            if (data.length > 0) {
                return (
                    <ScrollView style={{ flex: 1, padding: 20 }}>
                        <View style={{ marginTop: 30 }} >
                            <FlatList data={data}
                                renderItem={this.renderList}
                                keyExtractor={this._keyExtractor}

                            />
                        </View>
                        <TouchableOpacity style={{ padding: 10, bottom: 0, alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate('AddDeck')} >
                            <MaterialIcons name="add-circle-outline" size={32} color="green" />
                        </TouchableOpacity>

                    </ScrollView >
                )
            }
            else {
                return (
                    <View>
                        <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center' }}> No Deck at the moment </Text>
                        </View>
                        <TouchableOpacity style={{ padding: 10, bottom: 0, alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate(
                                'AddDeck')} >
                            <MaterialIcons name="add-circle-outline" size={32} color="green" />
                        </TouchableOpacity>
                    </View>

                )
            }
        }
    }
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderBottomWidth: 20,
        borderTopWidth: 20,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',

    },
    deck: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#d6d7da',
        paddingBottom: '3'


    },
    text: {
        fontSize: 25,
        fontFamily: 'sans-serif-condensed'

    },
    button: {
        margin: 9,
        padding: 15,
        borderRadius: 4
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})



function mapStateToProps(state) {

    return {
        deck: state.entries,
        isLoading: state.deckIsLoading

    }
}


export default connect(mapStateToProps, { getDecks, deleteDeck })(Home)

