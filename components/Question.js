import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import { connect } from 'react-redux'



class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let card = this.props.questions
        console.log('at card')
        console.log(card)
      
        let cardComponent = card.map((p) => {
            <View style={[styles.card, { backgroundColor: 'blue' }]} >
                <Text style={styles.text}>p.question </Text>
                <TouchableOpacity style={styles.button} onPress={() => alert('press')} >
                    <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}> View Answer </Text>
                </TouchableOpacity>
            </View>
        })
        return (
            < cardComponent />

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
            card: []
        };
    }

    componentDidMount() {
        let data = this.props.deck
        let name = this.props.navigation.state.params.name

        var exactdata = Object.keys(data).reduce((pre, item) => {
            return data[name]
        }, [])
        this.setState({ card: exactdata })
    }

    handleYup(card) {
        console.log(`Yup for ${card.answer}`)
    }
    handleNope(card) {
        console.log(`Nope for ${card.answer}`)
    }
    handleMaybe(card) {
        console.log(`Maybe for ${card.answer}`)
    }
    render() {
        return (
            <SwipeCards

                stack={true}
                cards={this.state.card.questions}
                renderCard={(cardData) => <Card {...this.state.card} {...cardData} />}
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