import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import { connect } from 'react-redux'
import Card from './Card'
import NoMoreCards from './NoMoreCards'


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            correct: 0,
            wrong: 0,
            name: ''
        };
    }

    componentDidMount() {
        let data = this.props.deck
        let name = this.props.navigation.state.params.name

        var exactdata = Object.keys(data).reduce((pre, item) => {
            return data[name]
        }, [])
        this.setState({ card: exactdata, name })
    }

    handleYup = (card) => {
        this.setState(prevState => {
            return { correct: prevState.correct + 1 }
        })
        console.log(`Yup for ${card.answer}`)
    }
    handleNope = (card) => {
        this.setState(prevState => {
            return { wrong: prevState.wrong + 1 }
        })
        console.log(`Nope for ${card.answer}`)
    }
    handleMaybe = (card) => {
        console.log(`Maybe for ${card.answer}`)
    }
    render() {


        return (
            <SwipeCards
                stack={true}
                cards={this.state.card.questions}
                renderCard={(cardData) => <Card cardData={cardData} />}
                renderNoMoreCards={() => <NoMoreCards {...this.state} />}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                handleMaybe={this.handleMaybe}
                hasMaybeAction
            />
        )
    }
}

function mapStateToProps(state) {

    return {
        deck: state
    }
}


export default connect(mapStateToProps)(Question)

