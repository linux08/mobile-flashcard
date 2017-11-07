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
            name: '',
            position: 1
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
            return { correct: prevState.correct + 1, position: prevState.position + 1}
        })
        console.log(`Yup for ${card.answer}`)
    }
    handleNope = (card) => {
        this.setState(prevState => {
            return { wrong: prevState.wrong + 1, position: prevState.position + 1 }
        })
        console.log(`Nope for ${card.answer}`)
    }
   
    render() {
        console.log('cardKey')

        return (
            <SwipeCards
                stack={true}
               // cardKey={cardKey}
                cards={this.state.card.questions}
                renderCard={(cardData) => <Card   cardData={cardData} {...this.state} />}
                renderNoMoreCards={() => <NoMoreCards {...this.state} {...this.props} />}
                handleYup={this.handleYup}
                handleNope={this.handleNope}
            />
        )
    }
}

function mapStateToProps(state) {

    return {
        deck: state.entries
    }
}


export default connect(mapStateToProps)(Question)

