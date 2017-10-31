import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import { connect } from 'react-redux' 



class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <View style={[styles.card, { backgroundColor: 'blue' }]} >
                <Text style={styles.text}>Does React Native Work with Android </Text>
                <TouchableOpacity style={styles.button} onPress={() => alert('press')} >
                    <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}> View Answer </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>

                <Text style={styles.noMoreCardsText}>No more cards</Text>
            </View>
        )
    }
}

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { key: 1, text: 'Tomato', backgroundColor: 'red' },
                { key: 1, text: 'Aubergine', backgroundColor: 'purple' },
                { key: 1, text: 'Courgette', backgroundColor: 'green' },
                { key: 1, text: 'Blueberry', backgroundColor: 'blue' },
                { key: 1, text: 'Umm...', backgroundColor: 'cyan' },
                { key: 1, text: 'orange', backgroundColor: 'orange' },
            ]
        };
    }

    handleYup(card) {
        console.log(`Yup for ${card.text}`)
    }
    handleNope(card) {
        console.log(`Nope for ${card.text}`)
    }
    handleMaybe(card) {
        //<Answer />
        console.log(`Maybe for ${card.text}`)
    }
    render() {
        console.log('at question')
       // console.log(this.props.deck)
        // let deck = this.props.deck

        // data = Object.keys(deck).reduce((pre, item) => {
        //   let b = item.map((b) =>{
        //     console.log(b)
        //   })
        //   console.log(b)
        //     return pre
        // }, [])
        // console.log(data)
        return (
            <SwipeCards

                stack={true}
                cards={this.state.cards}
                renderCard={(cardData) => <Card  {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        )
    }
}

const styles = StyleSheet.create({



    card: {
        marginTop: 200,
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        width: 300,
        height: 200,
        elevation: 1,
    },

    noMoreCardsText: {
        fontSize: 22,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        paddingTop: 10,
        backgroundColor: 'pink',
        paddingLeft: 30,
        paddingRight: 30,
        height: 40,
        borderRadius: 5,
        margin: 50
    },
    text: {
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
        justifyContent: 'center',
        alignItems: 'center'

    }
})

function mapStateToProps(state) {
    
        return {
            deck: state
        }
    }
    
    
    export default connect(mapStateToProps)(Question)