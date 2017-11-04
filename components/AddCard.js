import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import * as API from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../actions/index'

class AddCard extends Component {

    state = {
        question: '',
        answer: ''
    }

    submit = () => {
         const { name } = this.props.navigation.state.params
        const data = {
            question: this.state.question,
            answer: this.state.answer
        }
        this.props.addCard(name, data)
        console.log('at add card')
        console.log(name)
        this.props.navigation.navigate('Deck', { name: this.props.navigation.state.params.name, length: this.props.navigation.state.params.length })
    }


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
            
                <View style={styles.subcontainer}>
                    <Text style={styles.text} > Question </Text>
                    <TextInput style={styles.textinput}
                        editable={true} maxLength={40}
                        value={this.state.question}
                        onChangeText={question => this.setState({ question })} />
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.text} > Answer </Text>
                    <TextInput style={styles.textinput}
                        editable={true} maxLength={40}
                        value={this.state.answer}
                        onChangeText={answer => this.setState({ answer })}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.submit} >
                    <Text style={{ color: 'white' }}> Submit </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        flex: 1,

    },
    button: {
        backgroundColor: 'black',
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 70,
        marginRight: 70
    },
    subcontainer: {
        padding: 10,

    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 25,
        marginLeft: 70,
        marginRight: 70
    },
    textinput: {

        margin: 15,
        height: 40,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 5,
    }
})

function mapStateToProps(state) {

    return {
        deck: state
    }
}


export default connect(mapStateToProps, { addCard })(AddCard)
