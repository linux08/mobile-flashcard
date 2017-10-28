import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Swipeout from 'react-native-swipeout'

class Home extends Component {

    _keyExtractor = (item, index) => item.id;

    renderList = (obj) => {
        var swipeoutBtns = [
            {

                text: 'Delete',
                backgroundColor: 'red'
            }
        ]
        return (
            <Swipeout right={swipeoutBtns} autoClose backgroundColor="#faebd7" >

                <TouchableOpacity style={[styles.container, { backgroundColor: '#FFF' }]}
                    onPress={() => this.props.navigation.navigate('Deck')}>

                    <Text style={styles.text}>  {obj.item.name} </Text>
                    <Text style={{ fontSize: 12 }}> {obj.item.card} </Text>

                </TouchableOpacity>
            </Swipeout>
        )
    }



    render() {
        const data = [
            { id: 1, name: 'Udacicards', card: '3 cards' },
            { id: 2, name: 'react', card: '1 cards' },
            { id: 3, name: 'React-Natives', card: '4 cards' }
        ]
        return (
            <ScrollView style={{ flex: 1, padding: 20 }}>
                <View style={{ marginTop: 30 }} >
                    <FlatList data={data}
                        renderItem={this.renderList}
                        keyExtractor={this._keyExtractor}

                    />
                </View>
                <TouchableOpacity style={{ padding: 10, bottom: 0, alignItems: 'center' }}
                    onPress={() => this.props.navigation.navigate(
                        'AddDeck')} >
                    <MaterialIcons name="add-circle-outline" size={32} color="green" />
                </TouchableOpacity>

            </ScrollView >

        )
    }
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderBottomWidth: 20,
        borderTopWidth: 20,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',

    },
    deck: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#d6d7da',
        paddingBottom: '3'


    },
    text: {
        fontSize: 25,
        fontFamily: 'sans-serif-condensed'

    },
    button: {
        margin: 9,
        padding: 15,
        borderRadius: 4
    }
})

export default Home

