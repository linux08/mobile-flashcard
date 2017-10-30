import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Swipeout from 'react-native-swipeout'
import { connect } from 'react-redux'
import * as API from '../utils/api'
import { getDecks } from '../actions/index'

class Home extends Component {
    state = {
        loaded: false
    }
    componentDidMount() {
        this.props.getDecks()
    }

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
                    onPress={() => this.props.navigation.navigate('Deck',{name: obj.item.title,length: obj.item.amount})}>
                    <Text style={styles.text}>  {obj.item.title} </Text>
                    <Text style={{ fontSize: 12 }}> {obj.item.amount} </Text>

                </TouchableOpacity>
            </Swipeout>
        )
    }



    render() {
        let a = this.props.deck

        let data = Object.keys(a).reduce((pre, item) => {
            pre.push({
                id: Math.random(),
                title: a[item].title,
                amount: a[item].questions.length
            })
            return pre
        }, [])


        return (
            (this.state.loaded) ?
                <View>
                    <Text> Loading </Text>
                </View> :
            (data.length == 0) ?
                    <View>
                        <View>
                            <Text> No Deck at the moment </Text>
                        </View>
                        <TouchableOpacity style={{ padding: 10, bottom: 0, alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate(
                                'AddDeck')} >
                            <MaterialIcons name="add-circle-outline" size={32} color="green" />
                        </TouchableOpacity>
                    </View>
                    :
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

function mapStateToProps(state) {

    return {
        deck: state
    }
}


export default connect(mapStateToProps, { getDecks })(Home)

