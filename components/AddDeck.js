import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import * as API from '../utils/api'
import { connect } from 'react-redux'

class AddDeck extends Component {

    state = {
        text: ''
    }
    submit = () => {
        API.saveDeckTitle(this.state.text)
        this.props.navigation.navigate('Deck', { name: this.state.text, length: 0 })
    
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
        
                <Text style={styles.text}> What is the title of your new deck? </Text>
                <TextInput style={styles.textinput} editable={true} maxLength={40}
                    placeholder="Deck Title"
                    value={this.state.text} onChangeText={text => this.setState({ text })} />
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
        padding: 10,
        paddingTop: 50,
    },
    textinput: {
        margin: 30,
        alignSelf: 'stretch',
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    text: {
        textAlign: 'center',
        margin: 15,
        fontSize: 44,
        fontFamily: 'sans-serif-condensed'

    },
    button: {

        backgroundColor: 'black',
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    }
})


function mapStateToProps(state) {

    return {
        deck: state.entries
    }
}


export default connect(mapStateToProps)(AddDeck)
