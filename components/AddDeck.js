import React, { Component } from 'react'
import { Text, View , StyleSheet , TextInput, TouchableOpacity } from 'react-native'


class AddDeck extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text  style = {styles.text}> What is the title of your new deck? </Text>
                <TextInput style ={ styles.textinput} editable = {true} maxLength = {40} placeholder="Deck Title"  />
                <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate(
              'Home')} >
                   <Text style={{ color: 'white'}}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
         
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 70,
    },
    textinput:{
        
        margin: 30,
        alignSelf: 'stretch',
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    text:{
        textAlign: 'center',
        margin: 15,
        fontSize: 44,
        fontFamily: 'sans-serif-condensed'
         
    },
    button:{

        backgroundColor:'black',
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        
    }
})

export default AddDeck