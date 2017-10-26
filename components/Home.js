import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

class Home extends Component {

    _keyExtractor = (item, index) => item.id;

    renderList = (obj) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>  {obj.item.name} </Text>
                <Text style={{ fontSize: 12 }}> {obj.item.card} </Text>
            </View>
        )
    }



    render() {
        const data = [
            { id: 1, name: 'Udacicards', card: '3 cards' },
            { id: 2, name: 'react', card: '1 cards' },
            { id: 3, name: 'React-Natives', card: '4 cards' }
        ]
        // console.log(data)
        return (
            <ScrollView style={{ flex: 1,padding:20 }}>
                <Text style={{ marginLeft: 30 }} > Decks  </Text>
                <View style={{ marginTop: 50 }} >
                    <FlatList data={data}
                        renderItem={this.renderList}
                        keyExtractor={this._keyExtractor}

                    />
                </View>
                <TouchableOpacity style={{  padding: 10, bottom: 0,alignItems: 'center'}} >
                    <MaterialIcons name="add-circle-outline" size={32} color="green" />
                </TouchableOpacity>

            </ScrollView >

        )
    }
}


const styles = StyleSheet.create({
    container: {
        //marginTop: 20,
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
        margin: 5,
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 2,
        
    }
})

export default Home

//style={ styles.button}
