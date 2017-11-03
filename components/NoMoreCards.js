import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


class NoMoreCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // this.props.navigation.navigate('Question', { name: name }, { params: { param: name } })

        // onPress = {() => this.props.navigation.navigate('Deck', { name: name, length: total })
        const { correct, wrong, name } = this.props
        let total = correct + wrong

        return (
            <View style={styles.noMoreCardsText} >

                <Text style={{ marginTop: 40, fontSize: 40, }} >Quiz result</Text>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={[styles.text, { margin: 30 }]}>Correct {correct}</Text>
                    <Text style={[styles.text, { margin: 30 }]}>Wrong {wrong}</Text>
                </View>


                <View style={styles.box}>
                    <Text style={styles.score}>{Math.round((correct / total) * 100)}%</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.resultbutton}
                        onPress={() => console.log('Restart')}>
                        <Text style={styles.text}> Restart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.resultbutton}
                        onPress={() => console.log('Deck')}>
                        <Text style={styles.text}>  Deck </Text>
                    </TouchableOpacity>
                </View>
            </View >
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

    noMoreCardsText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    resultbutton: {
        backgroundColor: '#FF00FF',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30

    },
    text: {
        fontSize: 25,
        fontFamily: 'sans-serif-condensed',
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FF00'
    },
    score: {
        fontSize: 50,
    }
})

export default NoMoreCards

