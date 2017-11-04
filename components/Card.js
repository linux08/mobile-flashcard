import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class Card extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        const { cardData, name,position } = this.props
        const question = this.props.card.questions

        return (
            <View>
                <View style={[styles.card, { backgroundColor: 'blue' }]} >
                    <View>
                        <Text> Question  {position} / {question.length}</Text>
                    </View>
                    <Text style={styles.text}>{cardData.question} </Text>
                    <TouchableOpacity style={styles.button} onPress={() => alert(`${cardData.answer}`)} >
                        <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center' }}>Answer </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

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


export default Card