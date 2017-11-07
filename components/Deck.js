import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks, deleteDeck } from '../actions/index'


class Deck extends Component {

    static navigationOptions = ({ navigation }) => (

        {
            title: navigation.state.params.name,
            headerRight: (
                <Button
                    title={'Home'}
                    onPress={() => navigation.navigate('Home')}
                />
            ),
        })

    

    quiz = () => {
        let { deck } = this.props
        const name = this.props.navigation.state.params.name
        const valLength = deck[name].questions.length

        if (valLength < 1) {
            alert('No quiz available kindly add card')
        }
        else {
            this.props.navigation.navigate('Question', { name: name, length: valLength }, {
                params: { param: name },
            })
        }
    }

    render() {
        let { deck } = this.props
        console.log('at render')
        console.log(deck)

        const name = this.props.navigation.state.params.name
        //console.log(deck)
        // if (deck[name] === undefined) {
        //     valLength = 0
        // }
    
        console.log(deck)
        // else {
        valLength = deck[name].questions.length
        //s}


        return (
            <View style={styles.container} >
                <View >
                    <Text style={styles.text}> {name} </Text>
                    <Text style={[styles.text, { fontSize: 20, fontWeight: '100' }]} >  {valLength} cards </Text>
                </View>
                <View style={{ marginTop: 100 }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: 'white', borderColor: '#bbb', borderWidth: 1 }]} >
                        <Text style={{ color: 'black' }} onPress={() => this.props.navigation.navigate('AddCard', { name: name, length: valLength })}> Add Card </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.quiz} >
                        <Text style={{ color: 'white' }}> Start Quiz </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 40
    },
    button: {
        margin: 10,
        backgroundColor: 'black',
        height: 45,
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        margin: 15,
        fontSize: 44,
        fontFamily: 'sans-serif-condensed'
    }
})


function mapStateToProps(state) {

    return {
        deck: state.entries
    }
}


export default connect(mapStateToProps, { getDecks })(Deck)