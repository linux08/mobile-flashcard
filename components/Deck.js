import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


class Deck extends Component {

    render() {
        return (
            <View style={styles.container} >
                <View >
                    <Text style={styles.text}> Udacicards </Text>
                    <Text style={[styles.text, { fontSize: 20, fontWeight: '100' }]} >  3 cards </Text>
                </View>
                <View style={{ marginTop: 100 }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: 'white', borderColor: '#bbb', borderWidth: 1 }]} >
                        <Text style={{ color: 'black' }} onPress={() => this.props.navigation.navigate( 'Card')}> Add Card </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('Question')} >
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

export default Deck